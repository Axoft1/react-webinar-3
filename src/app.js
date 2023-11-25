import React from 'react';
import {createElement} from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}>
              <div className='Item-code'>{item.code}</div>
                <div className='Item-title' onClick={() => store.selectItem(item.code)}>
                  {item.title +
                    (item.timesSelected > 0
                      ? ' | Выделяли ' +
                      item.timesSelected +
                      (item.timesSelected % 10 >= 2 &&
                        item.timesSelected % 10 <= 4 &&
                        (item.timesSelected % 100 < 10 || item.timesSelected % 100 >= 20)
                        ? ' раза'
                        : ' раз')
                      : '')}
                </div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
