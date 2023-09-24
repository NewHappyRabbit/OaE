import page from 'page';
import './css/global.css';
import { unitPage } from './views/units.js';
import { buildingPage } from './views/buildings.js';
import { homePage } from './views/home';
import { renderNav } from './views/navbar';

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

page('/', homePage, renderNav, scrollToView);
page('/units', unitPage, renderNav, scrollToView);
page('/units/:name', unitPage, renderNav, scrollToView); // :name is a parameter
page('/buildings', buildingPage, renderNav, scrollToView);
page('/buildings/:name', buildingPage, renderNav, scrollToView);
page('*', () => page('/')); // Everything else, redirect to home page
page();