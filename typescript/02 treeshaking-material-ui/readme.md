# Tree shaking material ui

This sample start from 01 No tree shaking, in this case we are going to change the way we are making the import
so we can take benefit of webpack tree shaking.

# Steps

Steps to recreate this sample:

- Copy the content from _01 no tree shaking_

- First install the packages needed, run from the bash / cmd:

```bash
npm install
```

> Note down: before getting started take some minutes to evaluate our ts.config, we are using es6 modules:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
```

- Let's change the way we are importing our components so we get the exact path to the needed ES6 modules:

_app.tsx_

```diff
import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
- import {AppBar} from "material-ui";
- import {MuiThemeProvider} from "material-ui/styles";
+ import AppBar from 'material-ui/AppBar';
+ import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
```

- Second run the _run_ custom command.

```bash
npm run build
```
We have low down the bundle size from 985Kb to 160.5 Kb.

If you like to use barrels, in the next sample we will take a look to a babel plugin that can help us on this.
