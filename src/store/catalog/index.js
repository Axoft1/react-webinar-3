import { codeGenerator } from "../../utils/utils";
import StoreModule from "../module";
import { getPageCount } from "../../utils/utils";

class Catalog extends StoreModule {

  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0)
  }

  initState() {
    return {
      list: []
    }
  }
  //http://example.front.ylab.io/api/v1/articles?limit=10&skip=20
  async load(limit = 520, skip = 0) {
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${skip}&fields=items(_id, title, price),count`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.result.items,
      count: json.result.count
    }, 'Загружены товары из АПИ');
  }
}

export default Catalog;
