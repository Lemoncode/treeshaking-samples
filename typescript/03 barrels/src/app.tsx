import { AppBar, Toolbar, Typography } from "material-ui";
import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

interface State {
  userName: string;
}

export class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = { userName: 'defaultUserName' };
  }

  setUsernameState = (event: React.ChangeEvent<any>) => {
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
