import React from 'react';
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';
import {  AppBar, MuiThemeProvider }  from "material-ui";


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
        <MuiThemeProvider>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        <HelloComponent userName={this.state.userName} />
        <NameEditComponent
          userName={this.state.userName}
          onChange={this.setUsernameState}
        />
      </MuiThemeProvider>
      </div>
    );
  }
}