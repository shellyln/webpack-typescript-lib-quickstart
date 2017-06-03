

/**
 * Webpack's requiring resources example.
 */
export class AssetsLoader {
    /**
     * Load assets.
     */
    public load(): void {
        // load html as string.
        let html  = require("../views/main.html");
        console.log(html);

        // load json as object.
        let json  = require("../assets/data/main.json");
        console.log(JSON.stringify(json));

        // load image as data url string.
        let image = require("../assets/images/bug.png");
        console.log(image);

        // load stylesheet and append to DOM.
        let css   = require("../assets/scss/main.scss");
    }
}

