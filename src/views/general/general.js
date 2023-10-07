import { html, render } from 'lit-html'
import { container } from '../../app';
import { commands } from '../data/commands';

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

export function generalPage(ctx, next) {
    const generalTemplate = () => html`
        <h2 class="text-blue mb-3">Commands</h2>
        
        <h4 class="text-yellow">Elves commands</h4>
        ${commandsTable(commands.elves)}

        <h4 class="text-yellow">Orcs commands</h4>
        ${commandsTable(commands.orcs)}
        
        <h4 class="text-yellow">Global commands</h4>
        ${commandsTable(commands.global)}

        <h4 class="text-yellow">Observers commands</h4>
        ${commandsTable(commands.observers)}

        <hr>
    `;

    render(generalTemplate(), container);
    next();
}