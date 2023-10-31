import { html, render } from 'lit-html';
import { deviceMobile } from '../app';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const links = [
    {
        url: "/",
        name: "Home"
    },
    {
        url: "/map",
        name: "Map"
    },
    {
        url: "/general",
        name: "General info"
    },
    {
        url: "/elves",
        name: "Elves"
    },
    {
        url: "/orcs",
        name: "Orcs"
    },
    {
        url: "https://discord.gg/UdSwB3Pk",
        icon: "<i class='bi bi-discord'></i>",
        name: "Discord"
    }
]
const navBar = (url) => html`
    <a class="navbar-brand lifecraft fs-1 text-blue" href="/">O&E</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center gap-3">
            ${links.map(link => html`
                <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                    <a class=${`nav-link ${url == link.url ? 'active' : ''}`} href=${link.url}>${link.icon ? unsafeHTML(link.icon) : ""} ${link.name}</a>
                </li>
            `)}
    </div>
`;

export function renderNav(ctx, next) {
    render(navBar(ctx.canonicalPath), document.querySelector('nav'));
    next();
}