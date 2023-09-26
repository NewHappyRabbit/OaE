import { html, render } from 'lit-html';

const navBar = () => html`
    <a class="navbar-brand" href="/">OaE</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/teams">Teams</a>
            </li> -->
            <li class="nav-item">
                <a class="nav-link" href="/elves">Elves</a>
            </li>
            <!-- <li class="nav-item">
                <a class="nav-link" href="/orcs">Orcs</a>
            </li> -->
        <!-- //TODO IMPLEMENT SEARCH 
            <form class="form d-flex gap-3 my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
    </div>
`;

export function renderNav() {
    render(navBar(), document.querySelector('nav'));
}