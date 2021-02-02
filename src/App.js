import React from 'react';
import './App.css';
import Timer from "./components/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
      delay: ''
    }
  }

  render() {
    const { isShowing, delay } = this.state;
    return (
      <div className="wrapper">
        <div>
            <h1>Лабораторная №1. Функциональные компоненты.</h1>
        </div>
        <div>
          Введите количество секунд:
          <input
              type="text"
              value={delay}
              onChange={e => this.setState({ delay: e.target.value })} />
        </div>
        <div>
          Показать таймер:
          <input
              type="checkbox"
              value={isShowing}
              onChange={e => this.setState({ isShowing: e.target.checked })} />
        </div>
        <div>
          {isShowing && <Timer delay={delay} />}
        </div>
      </div>
    );
  }
}

export default App;
