import { generateCode } from "./utils";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.sum = 0;
    this.count = 0;
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
    return this.sum;
  }

  /**
    * Получить количество товаров
    * @returns {Number}
  */
  getCount() {
    return this.count
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
    this.sum += item.price;
    if (carrent) {
      this.setState({
        ...this.state,
        basket: this.state.basket.map(item => {
          if (item.code == carrent.code) {
            return {
              ...item,
              count: item.count + 1
            }
          }
          return item
        })
      })
    } else {
      this.setState({
        ...this.state,
        basket: [...this.state.basket, {
          code: item.code, price: item.price, title: item.title, count: 1
        }]
      })
      // Увеличиваем колличество товаров в корзине
      // Сделал упрощенно, можно выполнить через length или перебором this.state.basket
      this.count += 1
    }
  };

  /**
   * Удаление из корзины по коду
   * @param code
  */
  deleteItem(value) {
    const [item] = this.state.basket.filter((item) => item.code === value.code);
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      basket: this.state.basket.filter(item => item.code !== value.code)
    })
    this.sum -= item.price * item.count;
    this.count -= 1
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
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
      })
    })
  }
}

export default Store;
