import { html, render } from 'lit-html'
import { container } from '../app';
import { markers } from '../utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const news = [
    {
        title: "New map update 1.7.5",
        date: "31.10.2023",
        content: `
        <h4 class="text-yellow">Whats fixed/added:</h4>
        <ul>
            <li>Added a new Map page in the navigation bar. This page will contain map patch notes and download links.</li>
            <li>Added F1 menu items explanation.</li>
            <li>Current page is marked in yellow now in navigation menu.</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>None</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>Analytics</li>
            <li>Add content table at the top of every unit/building page, where you can click a ability/upgrade and have the website scroll it into view.</li>
            <li>Elves and orcs: tips for units, buildings, upgrades, etc.</li>
            <li>Elves units: better description</li>
            <li>*Tree of Technology*: Description for main upgrades.</li>
        </ul>

        <h4 class="text-yellow mt-5">New things coming for the website:</h4>
        <ul>
            <li>Custom borders for tables</li>
            <li>Ability for verified members to upload a photo of the scoreboard after a match and have it converted & saved as data that can be used for stats and game history (balance check)</li>
        </ul>
        `
    },
    {
        title: "Missing icons, download link",
        date: "23.10.2023",
        content: `
        <h4 class="text-yellow">Whats fixed/added:</h4>
        <ul>
            <li>Added *Role Selection*, *Player Score* and *Upgrades* from F1 menu to General info page</li>
            <li>Added download link and header to home page (only visible on desktop)</li>
            <li>Added scroll to top button</li>
            <li>Added *Scryer* icon</li>
            <li>Added *Blocker* description</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>None</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>General info page: F1 menu explained</li>
            <li>Analytics</li>
            <li>Add content table at the top of every unit/building page, where you can click a ability/upgrade and have the website scroll it into view.</li>
            <li>Elves and orcs: tips for units, buildings, upgrades, etc.</li>
            <li>Elves units: better description</li>
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
        title: "Added missing info",
        date: "07.10.2023",
        content: `
        <h4 class="text-yellow">Whats fixed/added:</h4>
        <ul>
            <li>Added General info page: Commands for all types of players</li>
            <li>Added dividers between different sections for better visibility</li>
            <li>Wide tables (Tree of Technology and Altar) now have alternating colors for columns, instead of rows</li>
            <li>Some units names were not showing as links on mobile</li>
            <li>Tenacity: Added damage increases for the abilities of Ent and Druid</li>
            <li>Elves buildings: &/elves/buildings/Tech Center&, &/elves/buildings/Barracks&</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>Orcs spell *Scryer*: icon missing</li>
            <li>*Blocker*: description</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>General info page: F1 menu explained</li>
            <li>Analytics</li>
            <li>Add content table at the top of every unit/building page, where you can click a ability/upgrade and have the website scroll it into view.</li>
            <li>Elves and orcs: tips for units, buildings, upgrades, etc.</li>
            <li>Elves units: better description</li>
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
        title: "Known issues fix",
        date: "06.10.2023",
        content: `
        <h4 class="text-yellow">Whats fixed:</h4>
        <ul>
            <li>Owl scout icon</li>
            <li>Grunt: some stats was wrong, updated it</li>
            <li>Destruction upgrade: had 2 level 4's, fixed to say level 4 and 5</li>
        </ul>

        <h4 class="text-yellow mt-5">Known issues or wrong info:</h4>
        <ul>
            <li>Orcs spell *Scryer*: icon missing</li>
            <li>*Blocker*: description</li>
            <li>*Tenacity* - Check which level increases the damage of *Blizzard* (Druid ability)</li>
        </ul>

        <h4 class="text-yellow mt-5">Here's whats coming soon:</h4>
        <ul>
            <li>Add content table at the top of every unit/building page, where you can click a ability/upgrade and have the website scroll it into view.</li>
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
            <li>Add content table at the top of every unit/building page, where you can click a ability/upgrade and have the website scroll it into view.</li>
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
        <div class="d-flex gap-5 flex-column justify-content-center align-items-center mb-3" id="downloadContainer">
            <div class="text-center">
                <h1 class="lifecraft text-yellow mb-0">Orcs & Elves</h1>
                <h3>Created by <span class="text-yellow">Infernium</span></h3>
                <h3 class="d-none d-md-block">Latest version: <span class="text-yellow">1.7.5</span></h3>
            </div>
            <a class="fs-2 btn btn-primary d-none d-md-block" href="/map">Download <i class="bi bi-download"></i></a>
        </div>

        ${newsTemplate(news[0])}
    `;

    render(template, container);
    next();
}