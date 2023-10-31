import page from 'page';
import './css/global.css';
import { unitsPage } from './views/teams/units/units.js';
import { homePage } from './views/home';
import { renderNav } from './views/navbar';
import { selectTeamPage, teamPage } from './views/teams/teams';
import { generalPage } from './views/general/general';
import { ocrPage } from './views/ocr';
import { mapPage } from './views/map';

export const container = document.getElementById('container'); // where to render everything
export const deviceMobile = window.innerWidth < 768; // used for rendering responsive design templates


function scrollToView() {
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Wait 2 sec
    setTimeout(() => {
        const hash = window.location.hash;

        if (!hash) return;

        // Remove # from hash
        const element = document.getElementById(hash.replace('#', ''));

        if (!element) return;

        element.classList.add('scrolledIntoView')

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1000);
}

// Middleware
page('*', renderNav);

page('/', homePage, scrollToView);
// page('/ocr', ocrPage, scrollToView);
page('/general', generalPage, scrollToView)
page('/map', mapPage, scrollToView);
page('/teams', selectTeamPage, scrollToView);
page('/orcs', teamPage, scrollToView);
page('/elves', teamPage, scrollToView);
page('/:team/:type/:name', unitsPage, scrollToView);
// page('/:team/units/:name', entityPage, scrollToView);
// page('/:team/buildings/:name', entityPage, scrollToView);

page('*', () => page('/')); // Everything else, redirect to home page
page();
