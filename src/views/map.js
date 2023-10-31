import { html, render } from 'lit-html'
import { container } from '../app';
import { markers } from '../utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';


const updates = [
    {
        version: "1.7.5",
        url: "/resources/map/Orcs_and_Elves_IE_Patch_1.7.5p.w3x",
        date: "27.10.2023",
        patch_notes: `
            <h4 class="text-yellow">Game settings</h4>
            <ul>
                <li>Shared lives have been changed to individual knockouts when players are on their last life.</li>
                <li>Cooperative - Team lives changed from 20/10 to 13/7 for elves/orcs. <span class="fst-italic text-secondary">Same as before, but the first 12/6 lives are shared and the last life for every player is individual.</span></li>
                <li>Added a new trial template to game settings for variety and testing purposes. <span class="fst-italic text-secondary">This game mode uses 1600 Gold Mines, free revives, longer respawn times and leaver control is enabled for both teams.</span></li>
                <li>&/elves/buildings/treeOfLife#Savior& (Talent) is now banned from some game templates where it has no effect.</li>
                <li>Renamed "Hardcore" to "Lives" in the game settings menu.</li>
            </ul>

            <h4 class="text-yellow">General</h4>
            <ul>
                <li>Map theme was changed from "snowy winter" to "rainy summer" variation. <span class="fst-italic text-secondary">This change was made based on players poll votes of the top-rated cliff type and ground texture at the time of implementation. The host can type %%-rain%% to enable/disable the weather effects.</span></li>
                <li>Fixed an issue with orcs gold sharing that sometimes gave more gold than intended.</li>
                <li>Slightly moved the position of a gold mine on the bottom left team base.</li>
            </ul>

            <h4 class="text-yellow">Orcs</h4>
            <ul>
                <li>&/orcs/units/Shaman#Lightning& (Shaman) search radius increased from 50 to 130.<span class="fst-italic text-secondary">Lightning will now detect obstacles in a larger area and should no longer pierce through structures as easily.</span></li>
                <li>&/orcs/units/Grunt#Turret& will now remain in play when the caster morph or is killed. Requirement changed from conjurer level 1/3/5 to 2/3/5. <span class="fst-italic text-secondary">Knockout will still clear all turrets.</span></li>
                <li>&/orcs/units/Grunt#Haunt& will now remain in play when the caster morph or is killed. <span class="fst-italic text-secondary">Knockout will still clear all haunts. The blight should now be properly removed as well.</span></li>
                <li>&/orcs/units/Grunt#Corruption& (Level 3) cooldown increased from 0 to 2 seconds.</li>
                <li>&/orcs/units/Grunt#Scryer& cost reduced from 25/20/15 to 20/15/10 mana.</li>
            </ul>
            <h4 class="text-yellow">Elves</h4>
            <ul>
                <li>&/elves/units/ElvenWorker#Fade& (Level 2) added a visual sign when the unit becomes invisible.</li>
                <li>&/elves/units/ElvenWorker#Restore& range changed from 200/300/400 to 200/250/300. Level 3 will now remove most debuffs from the target when they are healed.</li>
                <li>&/elves/units/druid#Slumber& (Druid) cooldown increased from 10 to 40 seconds.</li>
                <li>&/elves/buildings/blocker#Stone Blocker& health increased from 264 to 277 life.</li>
            </ul>
        `
    },
]

const updatesTemplate = () => html`
    ${updates.map((update, index) => html`
    <div class="card border-primary text-bg-dark mb-5">
        <h2 class="card-header text-center">${index === 0 ? html`<span class="text-yellow">LATEST</span>` : ""} ${update.version} <span class="fs-5">(${update.date})</span></h2>
        <a download class="btn btn-primary fs-5 border-0" style="border-radius: 0px" href=${update.url}>Download <i class="bi bi-download"></i></a>
        <div class="card-body">
            <div class="card-text">${unsafeHTML(markers(update.patch_notes))}</div>
        </div>
    </div>
    `)}
`;

export function mapPage(ctx, next) {
    document.title = "OaE - Map";
    const template = html`
        <h1 class="text-yellow mb-3">Updates</h1>
        ${updatesTemplate()}
    `;

    render(template, container);
    next();
}