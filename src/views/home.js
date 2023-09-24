import { html, render } from 'lit-html'
import { container } from '../app';

export function homePage(ctx, next) {


    const template = html`
        <h1 class="text-center">Welcome to the Orcs and Elves website!</h1>
        <p class="text-danger fs-4 text-center">This website is still a Work-In-Progress. There may be wrong or missing information, if you spot it, please message me on Discord @ NewHappyRabbit :)</p>

        <h4 class="mt-5">Here's whats available right now:</h4>
        <ul>
            <li><a href="/buildings">Buildings</a></li>
            <li><a href="/units">Units</a></li>
        </ul>

        <h4 class="mt-5">Here's what's missing and coming soon:</h4>
        <ul class="text-yellow">
            <li>Elves units - Ancient</li>
            <li>Spell book (F2) - for both Elves and Orcs</li>
            <li>Buildings - tips, better descriptions</li>
            <li>Towers - upgrades, abilities</li>
            <li>F1 menu</li>
            <li>Orcs - units, morphs, upgrades, buildings</li>
            <li>My precious sleep :(</li>
        </ul>

        <h4 class="mt-5">Website related stuff:</h4>
        <ul class="text-yellow">
            <li>CDN</li>
            <li>Design</li>
            <li>Accessability</li>
            <li>Light mode :D</li>
        </ul>
        <p>Please don't be scared by this ugly mess of a website! Design will be coming after all the info is imported from the game.</p>
    `;

    render(template, container);
    next();
}