import { html, render } from 'lit-html';
import { container } from '../app';
import Tesseract from 'tesseract.js';
import { firebase } from "./firebase"

import { getDatabase, ref, set } from "firebase/database";

async function handleInputChange(event) {
    // Clear thanks feedback
    render('', document.getElementById('btns'));

    var input = event.target;
    var image = input.files[0];

    const imgEl = document.getElementById('loadedImage');
    const barEl = document.getElementById('progressbar');

    // Reset progress bar
    barEl.classList.add('progress-bar-animated');
    barEl.classList.add('progress-bar-striped');
    barEl.classList.remove('bg-success');
    barEl.style.width = '0%';

    // Load image as preview
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imgEl.src = event.target.result;
    });
    reader.readAsDataURL(image);

    // Start OCR
    function updateProgress(e) {
        const status = e.status;

        if (status !== "recognizing text") return;

        const progress = e.progress;

        //set bar width to progress
        barEl.style.width = `${progress * 100}%`;
    }

    const { createWorker } = Tesseract;
    const worker = await createWorker('eng', 1, {
        logger: e => updateProgress(e),
    });

    (async () => {
        const { data } = await worker.recognize(image);

        await worker.terminate();

        // console.log(data);

        // Mark progress as done
        barEl.classList.remove('progress-bar-animated');
        barEl.classList.remove('progress-bar-striped');
        barEl.classList.add('bg-success');

        // Render text rows in table
        const rows = html`
            ${data.lines.map(line => html`
                <tr>
                    <td>${line.text}</td>
                </tr>
            `)}
        `;
        render(rows, document.querySelector('tbody'));

        // Render correct or not buttons
        const buttons = () => html`
            <p>Please use the below buttons to verify the image recognition results</p>
            <div class="d-flex gap-3 w-100">
                <button val="true" @click=${btnClick} class="btn btn-success fs-4 w-50">Correct</button>
                <button val="false" @click=${btnClick} class="btn btn-danger fs-4 w-50">Incorrect</button>
            </div>
        `;
        render(buttons(), document.getElementById('btns'));
    })();
}

async function sendDataDb(val) {
    const timestamp = Date.now();
    const data = {
        timestamp,
        correct: val === 'true' ? true : false,
    }

    const db = getDatabase();
    set(ref(db, 'ocr_test/' + timestamp), data)
        .then(() => {
            console.log('data saved')
        })
        .catch((error) => {
            console.log(error);
        });
}

function btnClick(e) {
    // Render thanks text in btns div
    const thanks = () => html`
        <p>Thank you for your feedback!</p>
    `
    render(thanks(), document.getElementById('btns'));

    // Get btn attr val
    const val = e.target.getAttribute('val');

    // Send data to db
    sendDataDb(val);
}

export function ocrPage(ctx, next) {
    const ocrTemplate = () => html`
            <h1 class="text-blue text-center">Screen Recognition TESTING</h1>
            <p class="fs-3 text-center text-red">WARNING! This is a test only! Upload an image, compare recognized lines of text with the image and mark answer as correct/incorrect. Your answer will be saved in a database</p>
            <p class="fs-3 text-center text-red">Don't spam, don't lie</p>
            <div class="d-flex flex-column m-auto gap-3 w-50 justify-content-center align-items-center">
                <div id="btns" class="text-center text-yellow fs-3">
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Upload image to recognize</label>
                    <input @change=${handleInputChange} class="form-control" type="file" accept="image/*">
                </div>
                <div class="progress w-100" role="progressbar">
                    <div id="progressbar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
                </div>
                <div class="d-flex gap-3 w-100">
                    <img id="loadedImage" style="background-color: var(--dark-purple); height: 600px" class="w-50" />
                    <table class="table table-dark table-striped w-50">
                        <thead>
                            <tr><th>Recognized lines</th></tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

    render(ocrTemplate(), container);
    next();
}