# webpack-typescript-lib-quickstart
Quickstart project for TypeScript library that runs on browsers and/or Node build with Webpack2.


### Features
* Compile TypeScript source and output as CommonJS format with declaration information and source map.
* Compile TypeScript source and output as CommonJS format single file with declaration information source map.  
  (Declaration information settings are disabled. See tsconfig-webpack-node-dist.json.)


* Compile TypeScript source and output as AMD format single file with source map.
* Compile SCSS, do auto-prefixing (PostCSS), and output as single CSS file with source map.


* Run unit tests ([jasmine-node](https://www.npmjs.com/package/jasmine-node)).


* Include CI configurations
  ([Travis CI](https://travis-ci.org/),
   [bitbucket pipelines](https://www.atlassian.com/software/bitbucket/features/pipelines),
   [Wercker](http://www.wercker.com/),
   [AWS CodeBuild](https://aws.amazon.com/codebuild/)).
* Include Visual Studio Code debugger and tasks configurations.




# Usage (Starting your library project)
1. Fork and clone me.
1. Edit package informations of `package.json`.  
   Don't remember to change repository url, author, homepage.
1.  Edit library name and output file name of `webpack.config.js`.  
    ```javascript
    // [Node-single-js-file]: Packing a Node single Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            <your-output-name>: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: '<your-library-name>',
            ...
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                ...

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!webpack-typescript-lib-quickstart).*$/
            }, {
                test: /\.jsx?$/,
                ...

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!webpack-typescript-lib-quickstart).*$/
            }, {
            ...
    },
    
    // [Browser-single-js-file]: Packing a library Javascript file.
    {
        entry: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY OUTPUT NAME!
            <your-output-name>: path.resolve(__dirname, 'src/index.ts')
        },
        output: {
            // TODO: YOU SHOULD REPLACE THE LIBRARY NAME!
            library: '<your-library-name>',
            ...
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                ...

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!webpack-typescript-lib-quickstart).*$/
            }, {
                test: /\.jsx?$/,
                ...

                // TODO: YOU SHOULD REPLACE THE PACKAGE NAME!
                // exclude 'node_module' directory except myself (refered from other packages)
                exclude: /node_modules[\/\\](?!webpack-typescript-lib-quickstart).*$/
            }, {
            ...
    },
    ```
1. Write your code.
1. and build it.  
   ```sh
   npm run build
   npm test
   ```




# Calling from your other Node project (runs on Node)
1. Install me:  
   ```sh
   npm install --save-dev webpack-typescript-lib-quickstart
   ```
1. Import something:  
   ```javascript
   import {MathExt} from "webpack-typescript-lib-quickstart/MathExt";
   ```
1. and use:  
   ```javascript
   console.log(new MathExt().add(1, 2));
   ```
1. Build it (if you need transpiling).

See [example](https://github.com/shellyln/wp-quickstart-caller-example).




# Calling from your other Node project (runs on browsers)
1. Install me:  
   ```sh
   npm install --save-dev webpack-typescript-lib-quickstart
   ```
1. Import something:  
   ```javascript
   import {MathExt} from "webpack-typescript-lib-quickstart/MathExt";
   ```
1. and use:  
   ```javascript
   console.log(new MathExt().add(1, 2));
   ```
1. Build it by Webpack or packagers you prefer.

See [example](https://github.com/shellyln/wp-quickstart-caller-example).




# Calling from old-fashioned script file
1. Clone me:  
   ```sh
   git clone shellyln/webpack-typescript-lib-quickstart.git
   ```
1. Build me:
   ```sh
   npm run build
   npm test
   ```
1. Copy `dist/awesomemylib.min.js` and `dist/awesomemylib.min.js.map` to your site.
1. and use:

app.html
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.3/require.js"></script>
<script>
    require.config({
        baseUrl: ".",
        paths: {
            // Don't add extension ".js".
            AwesomeMyLibrary: "path/to/awesomemylib.min"
        }
    });
    require(["app"]);
</script>
```

app.js
```javascript
require(["AwesomeMyLibrary"], function(AwesomeMyLibrary) {
    console.log(new AwesomeMyLibrary.MathExt().add(1, 2));
    new AwesomeMyLibrary.AssetsLoader().load();
});
```




# Compile SCSS Stylesheets to single CSS file.
1. Clone me:  
   ```sh
   git clone shellyln/webpack-typescript-lib-quickstart.git
   ```
1. Build me:
   ```sh
   npm run build
   npm test
   ```
1. Copy `dist/style.min.css` and `dist/style.min.css.map` to your site.
1. and use:

app.html
```html
<head>
    <link rel="stylesheet" type="text/css" href="path/to/style.min.css">
</head>
```




# Directory structure
* /bin/ : Output directory of Node module javascript file (CommonJS) that build with tsc.
* /bin/index_single.js : Node module javascript single file (CommonJS) that build+packed by Webpack.
* /dist/ : Output directory of distribution javascript single file (AMD ; for browsers) and stylesheet single file that build+packed by Webpack.
* /declarations/ : Output directory of TypeScript declaration.
* /src/index.ts : Library main file.
* /src/app.ts : Debugger entry point file.
* /src/lib/ : Directory of library program codes.
* /src/spec/ : Directory of unit test codes. We use [jasmine-node](https://www.npmjs.com/package/jasmine-node).
* /src/assets/scss/ : Directory of stylesheet source.
* /src/assets/ : Assets requiring from example code (lib/AssetsLoader) that packed to JS file by Webpack.
* /src/views/ : Assets requiring from example code (lib/AssetsLoader) that packed to JS file by Webpack.
* /.babelrc : Babel configuration.
* /.gitignore : git ignore list.
* /.npmignore : NPM ignore list.
* /package.json : NPM package configuration.
* /tsconfig.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for Node module output. it also uses for IDEs' error checking and coding assistance.
* /tsconfig-webpack-node.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for Node module single file output.
* /tsconfig-webpack-dist.json : [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for distribution single file output.
* /webpack.config.js : [Webpack2 build configuration](https://webpack.js.org/configuration/).
* /.travis.yml : [Travis CI](https://travis-ci.org/) test and deploying pipeline configuration.
* /bitbucket-pipelines.yml : [bitbucket pipelines](https://www.atlassian.com/software/bitbucket/features/pipelines) test and deploying pipeline configuration.
* /bitbucket-heroku-deploy.sh : bitbucket test and deploying pipeline helper shell script.
* /wercker.yml : [Wercker](http://www.wercker.com/) test and deploying pipeline configuration.
* /buildspec.yml : AWS CodeBuild test and deploying pipeline configuration.
* /buildspec-heroku-pre-deploy.sh : AWS CodeBuild test and deploying pipeline helper shell script.
* /buildspec-heroku-deploy.sh : AWS CodeBuild test and deploying pipeline helper shell script.




# NPM scripts
* build : Build for production.
* rebuild : Clean all output and build for production.
* build:node:dev : Build Node module output (CommonJS) for develop.
* build:node:prod : Build Node module output (CommonJS) for production.
* build:dist:dev : Build distribution output (AMD) for develop.
* build:dist:prod : Build distribution output (AMD) for production.
* clean : Clean all output.
* test : Run unit tests.
* start : Run codes for debugging (bin/app.js).




# License
MIT
