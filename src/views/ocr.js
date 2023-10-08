import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container, deviceMobile } from '../app';
import Tesseract from 'tesseract.js';

async function handleInputChange(event) {
    var input = event.target;
    var image = input.files[0];
    const imgEl = document.getElementById('loadedImage');
    const barEl = document.getElementById('progressbar');

    // Load image as preview
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imgEl.src = event.target.result;
    });
    reader.readAsDataURL(image);

    // OCR
    function progressBar(e) {
        const status = e.status;

        if (status !== "recognizing text") return;

        const progress = e.progress;


        //set bar width to progress
        barEl.style.width = `${progress * 100}%`;
    }

    const { createWorker } = Tesseract;
    const worker = await createWorker('eng', 1, {
        logger: e => progressBar(e), // Add logger here
    });

    (async () => {
        const { data } = await worker.recognize(image);

        // Close worker
        await worker.terminate();

        // console.log(data);

        // Render names to table
        const rows = html`
            ${data.lines.map(line => html`
                <tr>
                    <td>${line.text}</td>
                </tr>
            `)}
        `;

        render(rows, document.querySelector('tbody'));

        // Mark bar as done
        barEl.classList.remove('progress-bar-animated');
        barEl.classList.remove('progress-bar-striped');
        barEl.classList.add('bg-success');

        // Render buttons if all is good
    })();
}

export function ocrPage(ctx, next) {
    const ocrTemplate = () => html`
            <h1 class="text-blue text-center"> Score Tracker</h1>
            <div class="d-flex flex-column m-auto gap-3 w-50 justify-content-center align-items-center">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Upload image to recognize</label>
                    <input @change=${handleInputChange} class="form-control" type="file" accept="image/*">
                </div>
                <div class="progress w-100" role="progressbar">
                    <div id="progressbar" class="progress-bar progress-bar-striped progress-bar-animated"></div>
                </div>
                <div class="d-flex gap-3 w-100">
                    <img id="loadedImage" style="background-color: var(--dark-purple); height: 800px" class="w-50" />
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