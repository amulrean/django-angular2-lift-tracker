import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'navbar',
    template: ` 
        <div class="mdl-layout mdl-js-layout">
            <header class="mdl-layout__header">
                <div class="mdl-layout-icon"></div>
                <div class="mdl-layout__header-row">
                <span class="mdl-layout__title">Material Design Lite</span>
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="#">Hello</a>
                    <a class="mdl-navigation__link" href="#">World.</a>
                    <a class="mdl-navigation__link" href="#">How</a>
                    <a class="mdl-navigation__link" href="#">Are</a>
                    <a class="mdl-navigation__link" href="#">You?</a>
                </nav>
                </div>
            </header>
            <div class="mdl-layout__drawer">
                <span class="mdl-layout__title">Material Design Lite</span>
                <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="#">Hello</a>
                <a class="mdl-navigation__link" href="#">World.</a>
                <a class="mdl-navigation__link" href="#">How</a>
                <a class="mdl-navigation__link" href="#">Are</a>
                <a class="mdl-navigation__link" href="#">You?</a>
                </nav>
            </div>
            <main class="mdl-layout__content">
                <div>Content</div>
            </main>
        </div>
    `
})

export class Navbar implements OnInit {

    constructor() { }

    ngOnInit() { }
}