import { html, render } from 'lit-html';
import { deviceMobile } from '../app';


const navBar = () => html`
    <a class="navbar-brand lifecraft fs-1 text-blue" href="/">O&E</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center gap-3">
            <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                <a class="nav-link" href="/general">General info</a>
            </li>
            <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                <a class="nav-link" href="/elves">Elves</a>
            </li>
            <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                <a class="nav-link" href="/orcs">Orcs</a>
            </li>
            <li class="nav-item" data-toggle=${deviceMobile ? "collapse" : ""} data-target="#navbarSupportedContent">
                <a class="nav-link discord-btn"href="https://discord.gg/UdSwB3Pk"><i class="bi bi-discord"></i> Discord</a>
            </li>
    </div>
`;

export function renderNav() {
    render(navBar(), document.querySelector('nav'));
}