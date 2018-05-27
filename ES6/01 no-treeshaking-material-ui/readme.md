# No tree shaking material ui

This sample start from 00 Base, in this case we are going to install a popular ui library (material ui)
and we are going to import components from there in way that tree shaking is not enabled

# Steps

Steps to recreate this sample:

- Copy the content from _00 base_

- First install the packages needed, run from the bash / cmd:

```bash
npm install
```

- Now let's install _material_ui_ library.

```
npm install material-ui@next --save
```

- Let's add a simple component (in a way that tree shaking is not triggered):

_app.jsx_

```diff

import React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
+ import {AppBar, MuiThemeProvider} from "material-ui";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'defaultUserName',
    };

    this.setUsernameState = this.setUsernameState.bind(this);
  }

  setUsernameState(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  render() {
    return (
      <div>
+       <MuiThemeProvider>
+         <AppBar
+           title="Title"
+           iconClassNameRight="muidocs-icon-navigation-expand-more"
+         />
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          userName={this.state.userName}
          onChange={this.setUsernameState}
        />
+       </MuiThemeProvider>
      </div>
    );
  }
}
```

- Second run the _run_ custom command.

```bash
npm run build
```

Now we can see we got an issue with the library we have imported, it adds just 985Kb to our bundle size :-(.

In the next sample we will change the way we import from this library so it uses the es6 modules and it tree shaking can be applied.
