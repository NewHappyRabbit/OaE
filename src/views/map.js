import { html, render } from 'lit-html'
import { container } from '../app';


const updates = [
    {
        version: "1.8.0a",
        url: "/resources/map/Orcs_and_Elves_IE_Patch_1.8.0ap.w3x",
        date: "14.05.2024",
        patch_notes_link: "/resources/pdf/patch_notes_1.8.0a.pdf",
    },
    {
        version: "1.7.5",
        url: "/resources/map/Orcs_and_Elves_IE_Patch_1.7.5p.w3x",
        date: "27.10.2023",
        patch_notes_link: "/resources/pdf/patch_notes_1.7.5.pdf",
    },
]

const updatesTemplate = () => html`
<div class="d-flex flex-wrap flex-sm-row flex-column gap-5 align-items-sm-end align-items-center">
    ${updates.map((update, index) => html`
    <div class="card border-primary text-bg-dark p-3">
        <h2 class="card-header text-center">${index === 0 ? html`<div class="text-yellow">LATEST</div>` : ""} ${update.version} <span class="fs-5">(${update.date})</span></h2>
        <a download class="btn btn-primary fs-5 border-0" style="border-radius: 0px" href=${update.url}>Download <i class="bi bi-download"></i></a>

        <a download href=${update.patch_notes_link} class="btn btn-primary mt-2 fs-5 border-0" style="border-radius: 0px">Patch notes<i class="bi bi-file-earmark-text"></i></a>
    </div>
    `)}
</div>
`;

export function mapPage(ctx, next) {
    document.title = "OaE - Map";
    const template = html`
        <h1 class="text-yellow mb-3 text-center">Updates</h1>
        ${updatesTemplate()}
    `;

    render(template, container);
    next();
}