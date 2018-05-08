import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import {AppBar, Toolbar, Typography, MuiThemeProvider} from "material-ui";

interface Props {
}

interface State {
  userName: string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { userName: 'defaultUserName' };
  }

  setUsernameState = (event) => {
    this.setState({ userName: event.target.value });
  }


  public render() {
    return (
      <>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent userName={this.state.userName} onChange={this.setUsernameState} />
      </>
    );
  }
}
