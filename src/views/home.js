import { html, render } from 'lit-html'
import { container } from '../app';

export function homePage(ctx, next) {
    document.title = "OaE - Home";

    const template = html`
        <h1 class="text-center">Welcome to the Orcs and Elves website!</h1>
        <p class="text-danger fs-4 text-center">This website is still a Work-In-Progress. There may be wrong or missing information, if you spot it, please message me on Discord @ NewHappyRabbit :)</p>

        <h4 class="mt-5">Here's whats available right now:</h4>
        <ul class="fs-4">
            <li><a href="/elves">Elves</a></li>
            <li><a href="/orcs">Orcs</a></li>
        </ul>

        <h5 class="text-blue">I've tried using the game borders in tables (can be seen in Units > Any unit > Abilities table). Maybe we can stick with it</h5>

        <br><br><br><br>
        <p class="text-yellow">Text in yellow is a known bug/missing/wrong info or feature. I'm working on it.</p>
        <p class="text-green">Text in green is fixed.</p>
        <h4 class="mt-5">Here's what's missing and coming soon:</h4>
        <ul class="text-yellow">
            <li>General info - Natural Blocker, etc. (wc3-oae.com/general) page</li>
            <li>F1 menu and F9 info/commands</li>
            <li>Spell book
                <ul>
                    <li class="text-green">Elves ✓</li>
                    <li class="text-green">Orcs</li>
                    <ul>
                        <li>Scryer - find icon</li>
                        <li>Ghost - find icon</li>
                    </ul>
                </ul>
            </li>
            <li>Elves
                <ul>
                    <li>Units
                        <ul>
                            <li>Description for all units</li>
                            <li>Tips for all units</li>
                            <li>Owl Scout
                                <ul>
                                    <li>Check if reforged icon is correct</li>
                                </ul>
                            </li>
                            <li class="text-green">Ancient ✓</li>
                            <li class="text-green">Elven Worker ✓
                                <ul>
                                    <li class="text-green">Abilities (spell book) ✓</li>
                                    <li class="text-green">Upgrades from Tree of Life ✓</li>
                                </ul>
                            </li>
                            <li class="text-green">Hippogryph ✓
                                <ul>
                                    <li class="text-green">Add "Passive" to Deep Wounds ability ✓</li>
                                    <li class="text-green">Add "... has upgrades from Tree of Technology" text ✓</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Buildings
                    <ul>
                        <li>Tech center</li>
                        <li>Barracks</li>
                        <li>Blocker
                            <ul>
                                <li>Change the description to be more universal, because now it just states its health and etc. Make it something like: "The blocker is a defensive structure, used to block paths, etc."</li>
                            </ul>
                        </li>
                        <li>Tree of Technology
                            <ul>
                                <li>Better descriptions for all upgrades</li>
                                <li>Tenacity : check which lvl increases the dmg of blizzard (Druid)</li>
                            </ul>
                        </li>
                        <li>Tree of Life
                            <ul>
                                <li class="text-green">Add all upgrades and info ✓</li>
                                <li>Resurrection - info for each revive (gold/sec)</li>
                            </ul>
                        </li>
                        <li>Magic Tower and other towers
                            <ul>
                                <li>Add upgrades and abilities</li>
                            </ul>
                        </li>
                        <li class="text-green">Gold mine ✓
                            <ul>
                                <li class="text-green">Change description "feed" text to "This structure feeds gold only when killed after the 10 minute mark" ✓</li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </li>
        </ul>
            <li>Orcs
                <ul>
                    <li class="text-green">Units ✓
                        <ul>
                            <li class="text-green">Grunt ✓</li>
                            <li class="text-green">Shaman ✓</li>
                            <li class="text-green">Tracker ✓</li>
                            <li class="text-green">Tauren ✓</li>
                            <li class="text-green">Medic ✓</li>
                            <li class="text-green">Inventor ✓</li>
                            <li class="text-green">Berserker ✓</li>
                            <li class="text-green">Morphs Level 2 ✓</li>
                        </ul>
                    </li>
                    <li class="text-green">Buildings ✓
                        <ul>
                            <li>Morph ✓</li>
                            <ul>
                                <li>Description ✓</li>
                                <li class="text-green">Upgrades ✓</li>
                                <ul>
                                    <li class="text-green">Rage ✓</li>
                                    <li class="text-green">Weapon ✓</li>
                                    <li class="text-green">Armor ✓</li>
                                    <li class="text-green">Conjurer ✓</li>
                                    <li class="text-green">Recover ✓</li>
                                </ul>
                            </ul>
                            <li>Altar ✓</li>
                            <ul>
                                <li>Description ✓</li>
                                <li>Upgrades - will be located in each units page ✓</li>
                            </ul>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        
        <h4 class="mt-5">Website related stuff:</h4>
        <ul class="text-yellow">
            <li class="text-green">Custom scrollbar ✓</li>
            <li>Custom borders for tables - like the borders in-game</li>
            <li>OCR - verified members can upload an image of the scoreboard when the game ends and have it converted & saved as data in the website for stats and games history</li>
            <li>Mobile responsive</li>
            <li>Accessability</li>
            <li>Light mode</li>
            <li>CDN</li>
        </ul>
        <p>Please don't be scared by this ugly mess of a website! Design will be coming after all the info is imported from the game.</p>
    `;

    render(template, container);
    next();
}