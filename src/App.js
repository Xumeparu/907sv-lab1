import React, { useState } from 'react';
import './App.css';
import Timer from "./components/Timer";

export default function App(props) {
  const [isShowing, setIsShowing] = useState(false);
  const [delay, setDelay] = useState('');

  return (
      <div className="wrapper">
        <div>
            <h1>Лабораторная №1. Функциональные компоненты.</h1>
        </div>
        <div>
          Введите количество секунд&nbsp;
          <input
              type="text"
              value={delay}
              onChange={e => setDelay(e.target.value)} />
        </div>
        <div>
          Показать таймер
          <input
              type="checkbox"
              value={isShowing}
              onChange={e => setIsShowing(e.target.checked)} />
        </div>
        <div className="timer">
          {isShowing && <Timer delay={delay} />}
        </div>
      </div>
    );
}
