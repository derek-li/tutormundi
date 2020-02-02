import React, { PureComponent } from 'react';
import './App.css';
import {
  LeaveComment,
  RequestCompliment,
  SendCompliment,
  Footer,
} from './components';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      compliment: false,
    };

    this.handleCompliment = this.handleCompliment.bind(this);
  }

  handleCompliment() {
    this.setState({ compliment: true });
  }

  renderInputs() {
    const { compliment } = this.state;

    if (compliment) {
      return (
        <div>
          <SendCompliment />
          <LeaveComment />
        </div>
      );
    }

    return;
  }

  render() {
    const {
      compliment,
    } = this.state;

    return (
      <div className="app">
        <RequestCompliment
          handleCompliment={this.handleCompliment}
          compliment={compliment}
        />
        {this.renderInputs()}
        <Footer />
      </div>
    );
  }
}

export default App;
