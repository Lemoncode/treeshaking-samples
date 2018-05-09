# Tree shaking plus barrels

This sample start from 01 no-treeshaking-material-ui, in this case we want to keep on using barrels imports.

# Steps

Steps to recreate this sample:

- Copy the content from _01 no-treeshaking-material-ui_

- First install the packages needed, run from the bash / cmd:

```bash
npm install
```

- We are going to use the latest version from material-ui (@next) this version contains a es6 version under
the folder _nodemodules/material-ui/es_

```bash
npm install material-ui@next --save
```

- Let's uninstall the typings (@next already contains the typings in it)

```bash
npm uninstall @types/material-ui --save-dev
```

- Let's replace all the imports in our app.tsx

_app.tsx_

```diff
import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
- import {AppBar} from "material-ui";
- import {MuiThemeProvider} from "material-ui/styles";
+ import {AppBar, Toolbar, Typography, MuiThemeProvider} from "material-ui";
```

- In our webpack config let's create an alias to make material ui imports point to
it's es6 version.

_webpack.config.js_

```diff
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
+    alias: {
+      "material-ui": 'material-ui/es'
+    }
  },
```

- Let's add some updates on the tsx (new version has some breaking changes)

_app.tsx_

```diff
  public render() {
    return (
      <>
-        <MuiThemeProvider>
-          <AppBar
-              title="Title"
-              iconClassNameRight="muidocs-icon-navigation-expand-more"
-            />
+        <AppBar position="static" color="default">
+          <Toolbar>
+            <Typography variant="title" color="inherit">
+              Title
+            </Typography>
+          </Toolbar>
+        </AppBar>
          <HelloComponent userName={this.state.userName} />
          <NameEditComponent userName={this.state.userName} onChange={this.setUsernameState} />
-        </MuiThemeProvider>
      </>
    );
  }
```

- Second run the _run_ custom command.

```bash
npm run build
```

Now if we run the sample we got material-ui tree shaked, just only 56Kb !
