import * as React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


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
        <MuiThemeProvider>
          <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <HelloComponent userName={this.state.userName} />
          <NameEditComponent userName={this.state.userName} onChange={this.setUsernameState} />
        </MuiThemeProvider>
      </>
    );
  }
}
