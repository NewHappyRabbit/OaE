import { html, render } from 'lit-html'
import { container } from '../app';
import { markers } from '../utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const news = [
    {
        title: "Mobile responsiveness",
        date: "05.10.2023",
        content: `
        <h4 class="text-yellow">New stuff in this website update:</h4>
        <ul>
            <li>Mobile responsiveness
                <ul>
                    <li>Updated the whole website to be easier to use on mobile</li>
                    <li>Changed some tables to card-like views (example: Abilities, Upgrades)</li>
                </ul>
            </li>
            <li>Navigation menu
                <ul>
                    <li>Increased gap between links in desktop and mobile view</li>
                    <li>Fixed a bug where if you click a link in the navigation on mobile the menu stays open</li>
                    <li>Added a discord link</li>
                    <li>Changed the font of "OaE" title</li>
                    <li>Color tweaks</li>
                </ul>
            </li>
            <li>Added the &/orcs/units/Grunt&'s *Ghost* ability icon</li>
            <li>Added "MP" text after mana value and "sec" after cooldowns in tables to avoid confusion when scrolling down a long table and you stop seeing the header.</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>Orcs spell *Scryer*: icon missing</li>
            <li>*Owl Scout*: check if Reforged icon is correct</li>
            <li>*Blocker*: description</li>
            <li>*Tenacity* - Check which level increases the damage of *Blizzard* (Druid ability)</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>Elves and orcs: tips for units, buildings, upgrades, etc.</li>
            <li>Elves units: better description</li>
            <li>Elves buildings: *Tech Center*, *Barracks*</li>
            <li>*Tree of Technology*: Description for main upgrades.</li>
        </ul>

        <h4 class="text-yellow mt-5">New things coming for the website:</h4>
        <ul>
            <li>Major design overhaul</li>
            <li>Custom borders for tables</li>
            <li>Ability for verified members to upload a photo of the scoreboard after a match and have it converted & saved as data that can be used for stats and game history (balance check)</li>
        </ul>
        `
    },
    {
        title: "Website up!",
        date: "04.10.2023",
        content: `
        <h4 class="text-yellow">Here's whats been added to our website:</h4>
        <ul>
            <li>Orcs - buildings, units, abilities and upgrades</li>
            <li>Elfs - buildings, units, abilities and upgrades</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>Orcs spells: *Scryer* and *Ghost* - abilities icons missing</li>
            <li>*Owl Scout*: check if Reforged icon is correct</li>
            <li>*Blocker*: description</li>
            <li>*Tenacity* - Check which level increases the damage of *Blizzard* (Druid ability)</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>Elves and orcs - tips for units, buildings, upgrades, etc.</li>
            <li>Elves units: better description</li>
            <li>Elves buildings: *Tech Center*, *Barracks*</li>
            <li>*Tree of Technology*: Description for main upgrades.</li>
        </ul>

        <h4 class="text-yellow mt-5">New things coming for the website:</h4>
        <ul>
            <li>Major design changes</li>
            <li>Mobile responsive</li>
            <li>Custom borders for tables</li>
            <li>Ability for verified members to upload a photo of the scoreboard after a match and have it converted & saved as data that can be used for stats and game history (balance check)</li>
        </ul>
        `,
    }
]

const newsTemplate = (news) => html`
    <div class="card border-primary text-bg-dark mb-5">
        <h3 class="card-header border-primary">Latest news: ${news.title} [${news.date}]</h3>
        <div class="card-body">
            <div class="card-text">${unsafeHTML(markers(news.content))}</div>
        </div>
    </div>
`;

export function homePage(ctx, next) {
    document.title = "OaE - Home";

    const template = html`
        <h1 class="text-center">Welcome to the Orcs and Elves website!</h1>
        <p class="text-danger fs-4 text-center">This website is still a Work-In-Progress. There may be wrong or missing information, if you spot it, please message me on Discord @ NewHappyRabbit :)</p>

        ${newsTemplate(news[0])}
    `;

    render(template, container);
    next();
}