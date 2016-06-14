## Build a custom version

### Dependencies for building a custom version of iOSBadge:

* [Node.js](http://nodejs.org/) ( [Node version manager](https://github.com/creationix/nvm) )

### How to build & contribute

1. Clone project to your local machine.
2. In terminal move to iOSBadge folder and run `npm install` to install all dependencies.
3. Make all Javascript changes in Coffeescript file(s), CSS changes in SCSS file(s). Make your changes only to files located inside the `src` folder.
4. run `npm run build` to build iOSBadge
5. Make sure that all changes are valid and open a pull request

You can use the `iosbadge.scss` file located in `src/iosbadge/scss` folder to add your custom themes and sizes.

All Javascript changes should be written in Coffeescript to `iosbadge.coffee` file located in `src/iosbadge/coffee` folder.

Run `npm run build` after your changes to build your custom version.

### Building and running unit tests

Source files for jasmine tests can be found inside `src/test` folder.

You can build and run unit tests by running `npm test` in the plugin folder in terminal.

### API documentation

Plugin API documentation can be found inside the `docs` folder.
