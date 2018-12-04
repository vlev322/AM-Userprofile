import React, {Component, Fragment} from 'react';

import styles from './styles/main.sass';
import GeneralParameters from "./generalParameters/generalParameters";

const content = 'Hello world!';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GeneralParameters />
      </Fragment>
    );
  }
}

export default App;
