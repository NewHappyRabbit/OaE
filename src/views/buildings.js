import { html, render } from 'lit-html'
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { container } from '../app';
import { markers, rmvSpc } from '../utilities';
import { teams } from './teams';



export function buildingPage(ctx, next) {
    const selectedBuildingName = ctx.params.name;
    const selectedTeam = teams[ctx.params.team];
    const selectedBuilding = selectedTeam.buildings.find(building => rmvSpc(building.name.toLowerCase()) === selectedBuildingName.toLowerCase());

    const buildingAbilitiesTable = (abilities) => html`
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
                <table class="table w-auto customTable customTableAlternateRows" data-bs-theme="dark">
                    <thead>
                        <th class="text-center">Classic</th>
                        <th class="text-center">Reforged</th>
                        <th class="text-center">Name</th>
                        ${abilities.some(ability => ability.hotkey) ? html`<th class="text-center">Hotkey</th>` : ""}
                        ${abilities.some(ability => ability.hasOwnProperty('mana')) ? html`<th class="text-center">Mana</th>` : ""}
                        ${abilities.some(ability => ability.hasOwnProperty('cooldown') || ability.hasOwnProperty('passive')) ? html`<th class="text-center">Cooldown</th>` : ""}
                        ${abilities.some(ability => ability.range) ? html`<th class="text-center">Range</th>` : ""}
                        ${abilities.some(ability => ability.gold) ? html`<th class="text-center">Gold cost</th>` : ""}
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
                                ${abilities.some(ability => ability.cooldown) ? ability.cooldown ? html`<td class="text-center">${ability.cooldown}` : html`<td></td>` : ""}
                                ${abilities.some(ability => ability.gold) ? ability.gold ? html`<td class="text-center"><span class="text-yellow">${ability.gold}g</span></td>` : html`<td></td>` : ""}
                                ${abilities.some(ability => ability.range) ? ability.range ? html`<td class="text-center">${ability.range}</td>` : html`<td></td>` : ""}
        <td class="abilityDescription description">${unsafeHTML(markers(ability.description))}</td>
                            </tr > `})}
                            </tbody>
                </table>
            </div>
        </div>
    `;

    const buildingUpgradesTable = (upgrades) => html`
        <h4 class="text-yellow mt-3">Upgrades</h4>
        <div class="tableWrapper">
            <table class="table table-striped table-hover mb-0 w-auto" data-bs-theme="dark">
                <thead>
                    <th class="text-center">Classic</th>
                    <th class="text-center">Reforged</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Hotkey</th>
                    ${selectedBuilding.upgrades.some(upgrade => upgrade.gold) ? html`<th class="text-center">Gold cost</th>` : ""}
                    ${selectedBuilding.upgrades.some(upgrade => upgrade.supply) ? html`<th class="text-center">Supply cost</th>` : ""}
                    <th>Description</th>
                </thead>
                <tbody>
                    ${upgrades.map(upgrade => {
        return html`
                        <tr id=${rmvSpc(upgrade.name)}>
                            <td class="text-center"><img src="${upgrade.img}" class="abilityImage"></td>
                            <td class="text-center"><img src="${upgrade.imgR}" class="abilityImage"></td>
                            <td class="text-center">${unsafeHTML(markers(upgrade.name))}</td>
                            <td class="text-center">(${upgrade.hotkey})</td>
                            ${selectedBuilding.upgrades.some(upgrade => upgrade.gold) ? html`<td class="text-center"><span class="text-yellow">${upgrade.gold}g</span></td>` : ""}
                            ${selectedBuilding.upgrades.some(upgrade => upgrade.supply) ? html`<td class="text-center">${upgrade.supply}</td>` : ""}
                            <td>${unsafeHTML(markers(upgrade.description))}</td>
                        </tr>`})}
                        </tbody>
            </table>
        </div>
    `;

    const treeOfTechnologyTableUpgradesTable = (upgrades) => html`
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

    const buildingTemplate = (building) => html`
    <div class="d-flex flex gap-3 mb-5 justify-content-evenly">
            ${selectedTeam.buildings.map(building => html`
                <div class="card text-bg-dark p-2">
                        <a href="/${selectedTeam.name}/buildings/${rmvSpc(building.name)}"><img src=${building.imgR} class="card-img-top"></a>
                        <div class="card-body p-0">
                            <a href="/${selectedTeam.name}/buildings/${rmvSpc(building.name)}"><h5 class="card-title text-center">${building.name}</h5></a>
                        </div>
                </div>
            `)}
        </div>

        <div class="d-flex align-items-center gap-3 mb-3 justify-content-center">
            <img src=${selectedTeam.header}/>
            <img class="mainImg" src="${building.img}" class="buildingImage" title="Classic Image"/>
            <img class="mainImg" src="${building.imgR}" class="buildingImage" title="Reforged Image"/>
            <h1 class="text-blue">${building.name} ${building.hotkey ? html`<span>(<span class="hotkey">${building.hotkey}</span>)</span>` : ""}</h1>
            <img style="transform: rotate(180deg)" src=${selectedTeam.header}/>
        </div>

        <div class="d-flex flex-row align-items-start gap-5 mb-5">
            <div class="statsContainer wideTable border border-warning">
                <h4 class="text-yellow text-center">Stats</h4>
                <div class="tableWrapper">
                    <table class="table table-striped table-hover w-auto mb-0" data-bs-theme="dark">
                        <tbody>
                            ${building.gold ? html`
                                <tr>
                                    <th>Gold cost</th>
                                    <td class="text-center"><span class="text-yellow">${building.gold + "g"}</span></td>
                                </tr>
                            ` : ""}
                            ${building.supply ? html`
                                <tr>
                                    <th>Supply cost</th>
                                    <td class="text-center">${building.supply}</td>
                                </tr>
                            ` : ""}
                            ${building.feed ? html`
                                <tr>
                                    <th>Feed</th>
                                    <td class="text-center"><span class="text-danger">${building.feed}</span></td>
                                </tr>
                            ` : ""}
                            ${building.stats ? Object.entries(building.stats).map(([name, value] = entry) => html`
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
                        ${unsafeHTML(markers(building.description))}
                    </div>
                <div>
                    <h4 class="text-yellow">Tips</h4> 
                    <!-- TODO add tips later on -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!
                </div>
            </div>
        </div>
        ${building.abilities ? buildingAbilitiesTable(building.abilities) : ""}
        ${building.upgrades ? buildingUpgradesTable(building.upgrades) : ""}
        ${building.upgradesSeparated ? treeOfTechnologyTableUpgradesTable(building.upgradesSeparated) : ""}
        ${building.treeOfTechnologyUpgrades ? html`<p class="fw-bold text-green fs-5 mt-5">This building can get additional upgrades for health, damage, etc. from the <a href="/buildings/TreeOfTechnology">Tree Of Technology</a>!</p>` : ""}
    `;

    render(buildingTemplate(selectedBuilding), container);
    next();
}