import '../css/units.css';
import { html, render } from 'lit-html'
import { container } from '../app';
import { rmvSpc } from '../utilities';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { elvesBuildings } from './data/elves/buildings';
import { elvesUnits } from './data/elves/units';
import { orcsBuildings } from './data/orcs/buildings';
import { orcsUnits } from './data/orcs/units';

export const teams = {
    "orcs": {
        name: "orcs",
        nameCapitalized: "Orcs",
        units: orcsUnits,
        buildings: orcsBuildings,
        banner: "/images/orcs/banner.png",
        header: "/images/header-decoration.png"
    },
    "elves": {
        name: "elves",
        nameCapitalized: "Elves",
        units: elvesUnits,
        buildings: elvesBuildings,
        banner: "/images/elves/banner.png",
        header: "/images/header-decoration-gold.png"
    }
}

const topRowTemplate = (units) => html`
    <div class="d-flex flex-wrap justify-content-center gap-4 topRow">
        ${units.map(unit => html`
            <div class="card text-bg-dark p-2">
                    <a class="text-center" href="/${unit.team}/${unit.type}/${rmvSpc(unit.name)}"><img src=${unit.imgR}></a>
                    <div class="card-body p-0">
                        <a href="/${unit.team}/${unit.type}/${rmvSpc(unit.name)}"><h5 class="card-title text-center">${unit.name}</h5></a>
                        <!-- TODO ADD small description  <p class="card-text fs-6">${unsafeHTML(unit.description)}</p> -->
                    </div>
            </div>
        `)}
    </div>
`;

export function teamPage(ctx, next) {
    const selectedTeamName = ctx.path.replace('/', '');

    document.title = `OaE - ${teams[selectedTeamName].nameCapitalized}`;

    const teamTemplate = (team) => html`
        <div class="d-flex align-items-center justify-content-center">
            <img src=${team.header}/>
            <h1 class="m-0">${team.nameCapitalized} team</h2>
            <img style="transform: rotate(180deg)" src=${team.header}/>
        </div>

        <h2 class="mt-5 text-center">Units</h2>
        ${topRowTemplate(team.units, 'units')}

        <h2 class="mt-5 text-center">Buildings</h2>
        ${topRowTemplate(team.buildings, 'buildings')}
    `;

    render(teamTemplate(teams[selectedTeamName]), container);
    next();
}

export function selectTeamPage(ctx, next) {
    document.title = "OaE - Teams";
    const selectTeamTemplate = () => html`
        <h1 class="text-center">Pick your team</h1>
        <div class="d-flex justify-content-center">
            <div class="text-center">
                <img src="/images/header-decoration-gold.png"/>
                <h2 class="d-inline">Elves</h2>
                <img style="transform: rotate(180deg)" src="/images/header-decoration-gold.png"/>
                <a class="teamFlags" href="/elves">
                    <img class="d-block m-auto w-50" src="/images/elves/banner.png"/>
                </a>
            </div>
            <div class="text-center">
                <img src="/images/header-decoration.png"/>
                <h2 class="d-inline">Orcs</h2>
                <img style="transform: rotate(180deg)" src="/images/header-decoration.png"/>
                <a class="teamFlags" href="/orcs">
                    <img class="d-block m-auto w-50" src="/images/orcs/banner.png"/>
                </a>
            </div>
        </div>
    `;

    render(selectTeamTemplate(), container);
    next();
}