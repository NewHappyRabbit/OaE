import '../css/units.css';
import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container, deviceMobile } from '../app';
import { markers, rmvSpc } from '../utilities';
import { teams } from './teams';

// This is the main Units and Buildings page template
export function unitsPage(ctx, next) {
    const selectedEntityName = ctx.params.name;
    const selectedTeam = teams[ctx.params.team];
    const selectedEntityType = ctx.params.type;
    let selectedEntity;
    if (selectedEntityType === 'units')
        selectedEntity = selectedTeam.units.find(unit => rmvSpc(unit.name.toLowerCase()) === selectedEntityName.toLowerCase());
    else if (selectedEntityType === 'buildings')
        selectedEntity = selectedTeam.buildings.find(building => rmvSpc(building.name.toLowerCase()) === selectedEntityName.toLowerCase());
    else
        window.location.replace('/');

    document.title = `OaE - ${selectedEntity.name}`;

    const unitTable = (entities) => html`
        <div class="mb-5">
            <div class="tableWrapper customTableWrapper">
                <div class="customTopBorder"></div>
                <div class="customRightBorder"></div>
                <div class="customBottomBorder"></div>
                <div class="customLeftBorder"></div>
                <div class="customTopLeftBorder"></div>
                <div class="customTopRightBorder"></div>
                <div class="customBottomLeftBorder"></div>
                <div class="customBottomRightBorder"></div>
                <table class="table w-auto customTable customTableAlternateRows" data-bs-theme="dark">
                    <thead>
                        <tr>
                            <th class="text-center">Classic</th>
                            <th class="text-center">Reforged</th>
                            <th class="text-center">Name</th>
                            ${entities.some(entity => entity.hotkey) ? html`<th class="text-center">Hotkey</th>` : ""}
                            ${entities.some(entity => entity.mana) ? html`<th class="text-center">Mana</th>` : ""}
                            ${entities.some(entity => entity.cooldown || entity.hasOwnProperty('passive')) ? html`<th class="text-center">Cooldown</th>` : ""}
                            ${entities.some(entity => entity.range) ? html`<th class="text-center">Range</th>` : ""}
                            ${entities.some(entity => entity.gold) ? html`<th class="text-center">Gold cost</th>` : ""}
                            ${entities.some(entity => entity.supply) ? html`<th class="text-center">Supply cost</th>` : ""}
                            <th class="descriptionColumn">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${entities.map(entity => html`
                            <tr id="${rmvSpc(entity.name)}">
                                <td class="text-center"><img src="${entity.img}" class="entityImage"></td>
                                <td class="text-center"><img src="${entity.imgR}" class="entityImage"></td>
                                <td class="name text-center">${unsafeHTML(markers(entity.name))}</td>
                                ${entities.some(entity => entity.hotkey) ? entity.hotkey ? html`<td class="text-center">(${entity.hotkey})</td>` : entity.passive === true ? html`<td><span class="text-purple text-center">Passive</span></td>` : html`<td></td>` : ""}
                                ${entities.some(entity => entity.mana) ? entity.mana ? html`<td class="text-blue ws-nowrap text-center">${entity.mana} MP</td>` : html`<td></td>` : ""}
                                ${entities.some(entity => entity.cooldown) ? entity.cooldown ? html`<td class="ws-nowrap text-center">${entity.cooldown} sec` : html`<td></td>` : ""}
                                ${entities.some(entity => entity.gold) ? entity.gold ? html`<td class="text-center"><span class="text-yellow">${entity.gold}g</span></td>` : html`<td></td>` : ""}
                                ${entities.some(entity => entity.supply) ? entity.supply ? html`<td class="text-green text-center">${entity.supply}</td>` : html`<td></td>` : ""}
                                ${entities.some(entity => entity.range) ? entity.range ? html`<td class="text-center">${entity.range}</td>` : html`<td></td>` : ""}
                                <td class="description">${unsafeHTML(markers(entity.description))}</td>
                            </tr > `)}
                            </tbody>
                </table>
            </div>
        </div>
    `;

    const unitTableMobile = (entities) => html`
        <div class="mb-5">
            ${entities.map(entity => html`
                <div class="text-bg-dark mb-3 p-2">
                    <div class="d-flex justify-content-center gap-3 align-items-center">
                        <img src="${entity.img}" class="entityImage">
                        <img src="${entity.imgR}" class="entityImage">
                    </div>
                    <div class="mt-2">
                        <h2 class="text-center text-green">
                            ${entity.name}
                            ${entity.hotkey ? html`<span class="hotkey">(${entity.hotkey})</span>` : entity.passive === true ? html`<span class="text-purple">(Passive)</span>` : ""}
                        </h2>
                            ${entity.mana ? html`<p class="text-blue mb-0">Mana: ${entity.mana}</p>` : ""}
                            ${entity.cooldown ? html`<p class="mb-0">Cooldown: ${entity.cooldown}</p>` : ""}
                            ${entity.gold ? html`<p class="text-yellow mb-0">Gold cost: ${entity.gold}g</p>` : ""}
                            ${entity.supply ? html`<p class="mb-0">Supply cost: ${entity.gold}</p>` : ""}
                            ${entity.range ? html`<p class="mb-0">Range: ${entity.range}</p>` : ""}
                            <p class="mt-2">${unsafeHTML(markers(entity.description))}</p>
                    </div>
                </div>
            `)}
        </div>
    `;

    const statsContainer = (entity) => html`
        <div class="statsContainer wideTable border border-warning">
                <h4 class="text-yellow text-center">Base stats</h4>
                <div class="tableWrapper">
                    <table class="table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
                        <tbody>
                            ${entity.gold ? html`
                                <tr>
                                    <th>Gold cost</th>
                                    <td class="text-center"><span class="text-yellow">${entity.gold + "g"}</span></td>
                                </tr>
                            ` : ""}
                            ${entity.supply ? html`
                                <tr>
                                    <th>Supply cost</th>
                                    <td class="text-center">${entity.supply}</td>
                                </tr>
                            ` : ""}
                            ${entity.feed ? html`
                                <tr>
                                    <th>Feed</th>
                                    <td class="text-center"><span class="text-danger">${entity.feed}</span></td>
                                </tr>
                            ` : ""}
                            ${entity.stats ? Object.entries(entity.stats).map(([name, value] = entry) => html`
                                <tr>
                                    <th>${name}</th>
                                    <td class="text-center">${value}</td>
                                </tr>
                            `) : ""}
                        </tbody>
                    </table>
                </div>
            </div>
    `;

    const wideUpgradesTable = (upgrades) => html`
        <h4 class="text-yellow mt-3">Upgrades</h4>
        <div>
            ${upgrades.map(mainUpgrade => {
        return html`
            <div id=${rmvSpc(mainUpgrade.name)} class="mb-5">
                <h4 class="mt-3">${mainUpgrade.name} ${mainUpgrade.hotkey ? html`(<span class="text-purple">${mainUpgrade.hotkey}</span>)` : ""}</h4>
                ${mainUpgrade.description ? html`<p>${unsafeHTML(markers(mainUpgrade.description))}</p>` : ""}
                <div class="tableWrapper wideTable">
                    <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
                        <tr>
                            <th class="text-center">Level</th>
                            ${mainUpgrade.upgrades.map(upgrade => html`
                                <td id=${rmvSpc(mainUpgrade.name) + upgrade.lvl} class="text-center">${upgrade.lvl}</td>
                            `)}
                        </tr>
                        <tr>
                            <th class="text-center">Icons</th>
                            ${mainUpgrade.upgrades.map(upgrade => html`
                                <td class="text-center">
                                    <img src="${upgrade.img}" class="upgradeImage">
                                    ${upgrade.imgR ? html`<img src="${upgrade.imgR}" class="upgradeImage">` : ""}
                                </td>
                            `)}
                        </tr>
                        <tr>
                            <th class="text-center">Gold</th>
                            ${mainUpgrade.upgrades.map(upgrade => html`
                                <td class="text-center text-yellow">${upgrade.gold}g</td>
                            `)}
                        </tr>
                        ${mainUpgrade.hasRequires ? html`
                            <tr>
                                <th class="text-center">Requires</th>
                                ${mainUpgrade.upgrades.map(upgrade => html`
                                    ${upgrade.requires ? html`<td class="text-center">${unsafeHTML(markers(upgrade.requires))}</td>` : html`<td></td>`}
                                `)}
                            </tr>
                        ` : ""}
                        <tr>
                            <th>Description</th>
                            ${mainUpgrade.upgrades.map(upgrade => html`
                                <td>
                                    ${upgrade.changes.map(element => html`
                                        ${!element.team && !element.type ? html`<span class="text-blue">${element.name}</span>` : html`<a href=${`/${element.team}/${element.type ? element.type + "/" : ""}${rmvSpc(element.name)}`}>${element.name}</a>
                                        `}
                                        <ul>
                                            ${element.stats.map(stat => html`
                                                <li>${stat.name}: ${stat.hasOwnProperty('old') ? `${stat.old} -> ` : ""}<span class="text-yellow">${stat.new}</span> ${stat.parenthesesVal ? html`(<span class="text-yellow">${stat.parenthesesVal}</span>)` : ""} ${stat.description ? unsafeHTML(markers(stat.description)) : ""}</li>
                                            `)}
                                        </ul>
                                    `)}
                                </td>
                            `)}
                        </tr>
                    </table>
                </div>
            </div>
            `})}
        </div>
    `;

    const unitTemplate = (entity) => html`
        <a href="/${entity.team}" class="btn btn-outline-light d-none d-md-inline fs-5"><i class="bi bi-arrow-left"></i> Return</a>

        ${deviceMobile ? html`
            <div class="d-flex flex-column align-items-center gap-3 mb-3 justify-content-center">
                <div class="d-flex align-items-center gap-5 justify-content-center">
                    <img class="mainImg" src="${entity.img}" class="unitImage" title="Classic Image"/>
                    <img class="mainImg" src="${entity.imgR}" class="unitImage" title="Reforged Image"/>
                </div>
                <h1 class="text-blue">${entity.name} ${entity.hotkey ? html`<span class="text-purple">(${entity.hotkey})</span>` : ""}</h1>
            </div>
        ` : html`
            <div class="d-flex align-items-center gap-3 mb-3 justify-content-center">
                <img src=${selectedTeam.header}/>
                <img class="mainImg" src="${entity.img}" class="unitImage" title="Classic Image"/>
                <img class="mainImg" src="${entity.imgR}" class="unitImage" title="Reforged Image"/>
                <h1 class="text-blue">${entity.name} ${entity.hotkey ? html`<span class="text-purple">(${entity.hotkey})</span>` : ""}</h1>
                <img style="transform: rotate(180deg)" src=${selectedTeam.header}/>
            </div>
        `}

        <div class="d-flex flex-column flex-md-row align-items-start gap-5 mb-5">
            ${entity.stats ? statsContainer(entity) : ""}
            <div>
                <div class="description mb-3">
                    <h4 class="text-yellow">Description</h4>
                        ${unsafeHTML(markers(entity.description))}
                    </div>
                ${entity.transformsTo ? html`
                    <div class="mt-3">
                        <h4 class="text-yellow">Can transform to</h4>
                        <ul>
                            ${entity.transformsTo.map(transform => html`
                                <li><a href=${`/units/${rmvSpc(transform)}`}>${transform}</a></li>
                            `)}
                        </ul>
                    </div>
                ` : ""}
                <!-- <div>
                    <h4 class="text-yellow">Tips</h4> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!
                </div> -->
            </div>
        </div>
        ${entity.abilities ? html`
            <h2 class="text-yellow">Abilities</h2>
            ${selectedTeam.name === 'orcs' && entity.type === 'units' ? html`
            <p class="fs-3 text-red">All orc abilities below will display cooldown and stats like this: <span class="text-yellow">X/Y</span>, where <span class="text-yellow">X is Morph Level 1</span> and <span class="text-yellow">Y is Morph Level 2</span>!</p>
            <p class="text-yellow">Example: Cooldown 90/60 means: Shaman cooldown: 90. Far Seer cooldown: 60</p>
            ` : ""}
            ${deviceMobile ? unitTableMobile(entity.abilities) : unitTable(entity.abilities)}
        ` : ""}

        ${entity.upgrades ? html`
            <h2 class="text-yellow mt-3">Upgrades</a></h2>
            ${deviceMobile ? unitTableMobile(entity.upgrades) : unitTable(entity.upgrades)}
        ` : ""}

        ${entity.upgradesFromBuilding?.map(building => html`
            <h2 class="text-yellow mt-3">Upgrades from <a href=${building.url}>${building.name}</a></h2>
            ${deviceMobile ? unitTableMobile(building.upgrades) : unitTable(building.upgrades)}
        `)}

        ${entity.upgradesSeparated ? wideUpgradesTable(entity.upgradesSeparated) : ""}

        ${entity.externalUpgrades?.map(upgrade => html`
                <p class="fw-bold text-green fs-5 mt-5">This ${entity.type === 'units' ? 'unit' : 'building'} can get additional upgrades for health, armor, etc. from the <a href=${upgrade.url}>${upgrade.name}</a>!</p>
        `)}
    `;

    render(unitTemplate(selectedEntity), container);
    next();
}