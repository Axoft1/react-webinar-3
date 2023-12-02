import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния

  }
  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
  */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
  */
  getState() {
    return this.state;
  }

  /**
     * Получить итоговую цену
     * @returns {Number}
    */
  getPrice() {
    return Object.keys(this.state.basket).reduce((previos, key) => { return previos + this.state.basket[key].price * this.state.basket[key].count }, 0)
  }

  /**
   * Установка состояния
   * @param newState {Object}
  */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }]
    })
  };

  /**
   * Добавление в корзину
   * @param item
   */
  addBasket(item) {
    const carrent = this.state.basket.find(i => i.code === item.code)
    if (carrent) {
      this.setState({
        ...this.state,
        basket: this.state.basket.map(item => {
          if (item.code == carrent.code){    
            return {...item,         
            count: item.count+1}
          }
          return item
        } )        
      })
    } else {
      this.setState({
        ...this.state,
        basket: [...this.state.basket, {
          code: item.code, price: item.price, title: item.title, count: 1
        }]
      })
    }


  };

  /**
   * Удаление из корзины по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      basket: this.state.basket.filter(item => item.code !== code)
      // basket: this.state.basket.filter(item => item.count > 1 ?item.count -= 1 : item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
      })
    })
  }
}

export default Store;
