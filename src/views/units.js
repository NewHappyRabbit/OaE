import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container } from '../app';
import { markers, rmvSpc } from '../utilities';
import { allUnits, treeOfLifeUpgrades, treeOfWarUpgrades } from './buildings';

export function unitPage(ctx, next) {
    const selectedUnitName = ctx.params.name;
    const selectedUnit = allUnits.find(unit => rmvSpc(unit.name) === selectedUnitName);

    const unitAbilitiesTable = (abilities) => html`
        <div class="mb-5">
            <h4 class="text-yellow">Abilities</h4>
            <div class="tableWrapper customTableWrapper">
                <div class="customTopBorder"></div>
                <div class="customRightBorder"></div>
                <div class="customBottomBorder"></div>
                <div class="customLeftBorder"></div>
                <div class="customTopLeftBorder"></div>
                <div class="customTopRightBorder"></div>
                <div class="customBottomLeftBorder"></div>
                <div class="customBottomRightBorder"></div>
                <table class="table table-hover w-auto customTable" data-bs-theme="dark">
                    <thead>
                        ${console.log(abilities.some(ability => ability.hasOwnProperty('cooldown')))}
                        <th class="text-center">Classic</th>
                        <th class="text-center">Reforged</th>
                        <th class="text-center">Name</th>
                        ${abilities.some(ability => ability.hotkey) ? html`<th class="text-center">Hotkey</th>` : ""}
                        ${abilities.some(ability => ability.hasOwnProperty('mana')) ? html`<th class="text-center">Mana</th>` : ""}
                        ${abilities.some(ability => ability.hasOwnProperty('cooldown')) ? html`<th class="text-center">Cooldown</th>` : ""}
                        ${abilities.some(ability => ability.range) ? html`<th class="text-center">Range</th>` : ""}
                        <th>Description</th>
                    </thead>
                    <tbody>
                        ${abilities.map(ability => {
        return html`
                            <tr id="${rmvSpc(ability.name)}">
                                <td class="text-center"><img src="${ability.img}" class="abilityImage"></td>
                                <td class="text-center"><img src="${ability.imgR}" class="abilityImage"></td>
                                <td class="abilityName name text-center">${unsafeHTML(markers(ability.name))}</td>
                                ${abilities.some(ability => ability.hotkey) ? ability.hotkey ? html`<td class="text-center">(${ability.hotkey})</td>` : ability.passive === true ? html`<td><span class="text-purple text-center">Passive</span></td>` : html`<td></td>` : ""}
                                ${abilities.some(ability => ability.mana) ? ability.mana ? html`<td class="text-blue text-center">${ability.mana}</td>` : html`<td></td>` : ""}
                                ${abilities.some(ability => ability.cooldown) ? ability.cooldown ? html`<td class="text-center">${ability.cooldown}</td>` : html`<td></td>` : ""}
                                ${abilities.some(ability => ability.range) ? ability.range ? html`<td class="text-center">${ability.range}</td>` : html`<td></td>` : ""}
                                <td class="abilityDescription description">${unsafeHTML(markers(ability.description))}</td>
                            </tr>`})}
                            </tbody>
                </table>
            </div>
        </div>
    `;

    const unitUpgradesTable = (upgrades, building) => html`
        <h4 class="text-yellow mt-3">Upgrades from <a href="/buildings/${rmvSpc(building)}">${building}</a></h4>
        <div class="tableWrapper">
            <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
                <thead>
                    <th class="text-center">Classic</th>
                    <th class="text-center">Reforged</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Gold cost</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    ${upgrades.map(upgrade => {
        return html`
                        <tr id=${rmvSpc(upgrade.name)}>
                            <td class="text-center"><img src="${upgrade.img}" class="abilityImage"></td>
                            <td class="text-center"><img src="${upgrade.imgR}" class="abilityImage"></td>
                            <td class="text-center">${unsafeHTML(markers(upgrade.name))}</td>
                            <td class="text-center"><span class="text-yellow">${upgrade.gold}g</span></td>
                            <td>${unsafeHTML(markers(upgrade.description))}</td>
                        </tr>`})}
                        </tbody>
            </table>
        </div>
    `;

    const unitTemplate = (unit) => html`
        <div class="d-flex align-items-center gap-3 mb-3 justify-content-center">
            <img class="mainImg" src="${unit.img}" class="unitImage" title="Classic Image"/>
            <img class="mainImg" src="${unit.imgR}" class="unitImage" title="Reforged Image"/>
            <h1 class="text-blue">${unit.name} ${unit.hotkey ? html`<span>(<span class="hotkey">${unit.hotkey}</span>)</span>` : ""}</h1>
        </div>
        <div class="d-flex flex-row align-items-start gap-5 mb-5">
            <div class="statsContainer wideTable border border-warning">
                <h4 class="text-yellow text-center">Stats</h4>
                <div class="tableWrapper">
                    <table class="table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
                        <tbody>
                            ${unit.gold ? html`
                                <tr>
                                    <th>Gold cost</th>
                                    <td class="text-center"><span class="text-yellow">${unit.gold + "g"}</span></td>
                                </tr>
                            ` : ""}
                            ${unit.supply ? html`
                                <tr>
                                    <th>Supply cost</th>
                                    <td class="text-center">${unit.supply}</td>
                                </tr>
                            ` : ""}
                            ${unit.feed ? html`
                                <tr>
                                    <th>Feed</th>
                                    <td class="text-center"><span class="text-danger">${unit.feed}</span></td>
                                </tr>
                            ` : ""}
                            ${unit.stats ? Object.entries(unit.stats).map(([name, value] = entry) => html`
                                <tr>
                                    <th>${name}</th>
                                    <td class="text-center">${value}</td>
                                </tr>
                            `) : ""}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <div class="description mb-3">
                    <h4 class="text-yellow">Description</h4>
                        ${unsafeHTML(markers(unit.description))}
                    </div>
                ${unit.transformsTo ? html`
                    <div class="mt-3">
                        <h4 class="text-yellow">Can transform to</h4>
                        <ul>
                            ${unit.transformsTo.map(transform => html`
                                <li><a href=${`/units/${rmvSpc(transform)}`}>${transform}</a></li>
                            `)}
                        </ul>
                    </div>
                ` : ""}
                <div>
                    <h4 class="text-yellow">Tips</h4> 
                    <!-- TODO add tips later on -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!
                </div>
            </div>
        </div>
        ${unit.abilities ? unitAbilitiesTable(unit.abilities) : ""}
        ${treeOfWarUpgrades[unit.name] ? unitUpgradesTable(treeOfWarUpgrades[unit.name], 'Tree Of War') : ""}
        ${rmvSpc(unit.name).toLowerCase() == 'elvenworker' ? unitUpgradesTable(treeOfLifeUpgrades, 'Tree Of Life') : ""}
        ${unit.treeOfTechnologyUpgrades ? html`<p class="fw-bold text-green fs-5 mt-5">This unit can get additional upgrades for health, armor, etc. from the <a href="/buildings/TreeOfTechnology">Tree Of Technology</a>!</p>` : ""}
    `;

    const allTemplates = () => html`
        <div id="unitsContainer">
            <h3>Units</h3>
            <p>Select unit to view information about it.</p>
            <div class="d-flex flex-wrap gap-5 p-2 mb-5">
                ${allUnits.map(unit => html`
                    <a href=${`/units/${rmvSpc(unit.name)}`} class="border-0 bg-transparent p-0 d-flex flex-column align-items-center fw-bold text-blue">
                        <img src="${unit.img}" class="unitImage" title=${unit.name}>${unit.name}
                    </a>
                `)}
            </div>

            ${selectedUnitName ? unitTemplate(selectedUnit) : ""}
        </div>
    `;

    render(allTemplates(), container);
    next();
}