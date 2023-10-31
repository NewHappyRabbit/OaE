import { html, render } from 'lit-html'
import { container, deviceMobile } from '../../app';
import { commands } from '../data/commands';
import { roles } from '../data/roles';
import { markers } from '../../utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const commandsTemplate = () => html`
    <h2 class="text-blue mb-3">Commands</h2>
    <h4 class="text-yellow">Elves commands</h4>
    ${commandsTable(commands.elves)}

    <h4 class="text-yellow">Orcs commands</h4>
    ${commandsTable(commands.orcs)}
    
    <h4 class="text-yellow">Global commands</h4>
    ${commandsTable(commands.global)}

    <h4 class="text-yellow">Observers commands</h4>
    ${commandsTable(commands.observers)}
`;

const commandsTable = (commands) => html`
    <table class="table w-auto table-striped table-hover mb-5" data-bs-theme="dark">
        <thead>
            <tr>
                <th class="text-center">Description</th>
                <th class="text-center">Command</th>
            </tr>
        </thead>
        <tbody>
            ${commands.map(command => html`
                <tr>
                    <td class="text-center">${command.name}</td>
                    <td class="text-center">${command.command}</td>
                </tr>
            `)}
        </tbody>
    </table>
`

const rolesTemplate = () => html`
    <h2 class="text-blue mb-3">Role selection <span class="hotkey">(F1)</span></h2>
    <p>Show your teammates what your preferred role is by changing your icon in the scoreboard top-right of screen.</p>
    <h4 class="text-yellow">Elves</h4>
    ${deviceMobile ? rolesTableMobile(roles.elves) : rolesTable(roles.elves)}

    <h4 class="text-yellow">Orcs</h4>
    ${deviceMobile ? rolesTableMobile(roles.orcs) : rolesTable(roles.orcs)}
    <hr>
`;

const rolesTable = (roles) => html`
    <table class="table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
        <thead>
            <tr>
                <th class="text-center">Classic</th>
                <th class="text-center">Reforged</th>
                <th class="text-center">Name</th>
                <th class="text-center">Description</th>
            </tr>
        </thead>
        <tbody>
            ${roles.map(role => html`
                <tr>
                    <td><img class="entityImage" src="${role.img}" title="Classic Image"/></td>
                    <td><img class="entityImage" src="${role.imgR}" title="Reforged Image"/></td>
                    <td class="text-center text-yellow">${role.name}</td>
                    <td class="">${unsafeHTML(markers(role.description))}</td>
                </tr>
            `)}
        </tbody>
    </table>
`;

const rolesTableMobile = (roles) => html`
        <div class="mb-5">
            ${roles.map(role => html`
                <div class="text-bg-dark rounded-3 mb-5 p-2">
                    <div class="d-flex justify-content-center gap-3 align-items-center">
                        <img src="${role.img}" class="entityImage">
                        <img src="${role.imgR}" class="entityImage">
                    </div>
                    <div class="mt-2">
                        <h2 class="text-center text-green">
                            ${role.name}
                        </h2>
                        <p class="mt-2">${unsafeHTML(markers(role.description))}</p>
                    </div>
                </div>
            `)}
        </div>
    `;

const upgradesTemplate = () => html`
    <h2 class="text-blue mb-3">Upgrades<span class="hotkey">(F1)</span></h2>
    <p>View what upgrades your teammates unlocked. Example images below.</p>
    <div class="d-flex flex-column flex-md-row justify-content-evenly">
        <div>
            <h4 class="text-yellow text-center">Elves</h4>
            <img style="max-width: 100%" class="mb-4" src="/images/elves/upgradesExample.png"/>
        </div>
        <div>
            <h4 class="text-yellow text-center">Orcs</h4>
            <img style="max-width: 100%" class="mb-4" src="/images/orcs/upgradesExample.png"/>
        </div>
    </div>
    <hr>
`;

const playerScoreTemplate = () => html`
     <h2 class="text-blue mb-3">Player Score<span class="hotkey">(F1)</span></h2>
    <p>View your teammates score, such as kills, gold mined, etc. Example images below.</p>
    <div class="d-flex flex-column flex-md-row justify-content-evenly">
        <div>
            <h4 class="text-yellow text-center">Elves</h4>
            <img style="max-width: 100%" class="mb-4" src="/images/elves/playerScoreExample.png"/>
        </div>
        <div>
            <h4 class="text-yellow text-center">Orcs</h4>
            <img style="max-width: 100%" class="mb-4" src="/images/orcs/playerScoreExample.png"/>
        </div>
    </div>
    <hr>
`;

export function generalPage(ctx, next) {
    const generalTemplate = () => html`
        ${rolesTemplate()}
        ${upgradesTemplate()}
        ${playerScoreTemplate()}
        ${commandsTemplate()}
    `;

    render(generalTemplate(), container);
    next();
}