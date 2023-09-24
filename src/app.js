import page from 'page';
import './css/global.css';
import { unitPage } from './views/units.js';
import { buildingPage } from './views/buildings.js';

export const container = document.querySelector('body'); // where to render everything

page('/units', unitPage);
page('/units/:name', unitPage); // :name is a parameter
page('/buildings', buildingPage);
page('/buildings/:name', buildingPage);
// page('/buildings/:name', buildingPage)
page('*', () => page('/')); // Everything else, redirect to home page
page();