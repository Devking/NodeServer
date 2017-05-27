# NodeServer Example

Be sure to follow the NodeTest example to understand the setup of a Node project first.

We're using Express as the web framework to power this server.

Start the server by running:

```
npm start
```

Then, in your browser, visit:

```
http://localhost:3000
```

## Steps of Setup

To set up the basic dependencies:

```
mkdir NodeServer
npm init
# Fill in everything as expected
# Use Mocha for testing
# Use index.js for the entry point
# Edit package.json to add a 'start'
mkdir test
npm install mocha --save-dev
npm install express --save
```

Then, start filling out `index.js` with your Node server.
You can use the Express Generator to initialize a file structure that may help:

```
# This installs the package globally, and only needs to be done once, ever
npm install express-generator -g
```

You can then run the generator:

```
express --view=pug myapp
```

This will create a file structure for a directory named `myapp`, using the `pug`
view engine.

This directory will have its own `package.json` and internal workings (so it's
an entire project of its own, so you don't need to go through the earlier
process of doing `npm init` yourself.)
