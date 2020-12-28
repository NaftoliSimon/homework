
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: '0'
  }

  newInput = e => {
    this.setState({
      value: e.target.value
    });
  }

  onClick(button) {
    switch (button) {
      case '+':
        this.setState({
          lastValue: this.state.value,
          value: ''
        });
        break;

      case '=':
        this.setState({
          lastValue: '',
          value: Number(this.state.lastValue) + Number(this.state.value)
        });
        break;

      default:
        this.setState({
          value: (this.state.value !== '0' ? this.state.value : '') + button
        });
    }
  }
  render() {
    return (
      <>
        <div className="calculator">
          <input id="display" value={this.state.value} onChange={this.newInput}></input>

          {
            [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '+', '='].map(n => <button onClick={() => this.onClick(n)} key={n}>{n}</button>)
          }
        </div>
      </>
    );
  }
}

export default App;
