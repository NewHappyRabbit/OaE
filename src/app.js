import page from 'page';
import './css/global.css';
import { unitPage } from './views/units.js';
import { buildingPage } from './views/buildings.js';
import { homePage } from './views/home';
import { renderNav } from './views/navbar';
import { selectTeamPage, teamPage } from './views/teams';

export const container = document.getElementById('container'); // where to render everything

function scrollToView() {
    // Wait 2 sec
    setTimeout(() => {
        const hash = window.location.hash;

        if (!hash) return;

        // Remove # from hash
        const element = document.getElementById(hash.replace('#', ''));

        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1000);
}

renderNav();

page('/', homePage, scrollToView);
page('/teams', selectTeamPage, scrollToView);
page('/orcs', teamPage, scrollToView);
page('/elves', teamPage, scrollToView);
page('/:team/units/:name', unitPage, scrollToView);
page('/:team/buildings/:name', buildingPage, scrollToView);

page('*', () => page('/')); // Everything else, redirect to home page
page();
