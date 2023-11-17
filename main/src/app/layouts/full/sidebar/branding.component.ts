import { Component } from "@angular/core";

@Component({
    selector: "app-branding",
    template: `
        <div class="branding">
            <a href="/">
                <img
                    src="./assets/images/#Logo Cumlaudes/dark-#Logo Cumlaude.svg"
                    class="align-middle m-2"
                    alt="#Logo Cumlaude"
                />
            </a>
        </div>
    `,
})
export class BrandingComponent {
    constructor() {}
}
