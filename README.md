# treeshaking-samples

Some sample about how to proper add tree shaking when using popular libraries like material-ui

# Samples

## Typescript

### 00 base

In this sample we are just creating a minimum code base (using just react and react-dom) and
adding the needed configuration to run webpack-analyzer.

Check typescript/00 base/readme.md for more details.

### 01 No Treeshaking material ui

This sample start from 00 Base, in this case we are going to install a popular ui library (material ui)
and we are going to import components from there in way that tree shaking is not enabled (we are not
importing in es6 modules mode)

### 02 Treeshaking material ui

In this sample we are going to use a fullpath import, to get tree shaking working.

```javascript
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
```

### 03 Barrels

This sample start from 01 no-treeshaking-material-ui, in this case we want to keep on using barrels imports.

We are going to install material-ui@next build that contains a es6 version folder, then create an alias on webpack.

# About Lemoncode

We are a team of long-term experienced freelance developers, established as a group in 2010.
We specialize in Front End technologies and .NET. [Click here](http://lemoncode.net/services/en/#en-home) to get more info about us.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
