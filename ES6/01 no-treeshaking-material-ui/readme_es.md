# No tree shaking material ui

Este ejemplo comienza desde 00 Base. En este caso vamos a instalar un librería de ui muy popular (material ui) y vamos a importar los componentes de ahí de forma que no se aplique el tree shaking

# Pasos

Pasos para reproducir este ejemplo:

- Copiar el contenido de _00 base_

- Primero instalar los paquetes que necesitamos, ejecutando desde bash / cmd:

```bash
npm install
```

- Ahora vamos a instalar la librería _material_ui_ .

```
npm install material-ui@next --save
```

- Añadamos un componente simple (de forma que no se dispare el tree shaking):

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

- Segundo ejecutar el comando _run_ personalizado.

```bash
npm run build
```

Ahora podemos ver que tenemos un problema con la librería que hemos importado, añade 985Kb al tamaño de nuestro bundle :-(.

En el próximo ejemplo cambiaremos la forma de importar esta librería para que se aplique el tree shaking.
