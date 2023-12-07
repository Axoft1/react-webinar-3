import { codeGenerator } from "../../utils";
import StoreModule from "../module";

class Product extends StoreModule {

    // constructor(store, name) {
    //     super(store, name);
    //     this.generateCode = codeGenerator(0)
    // }

    initState() {
        return {
            item: {}
        }
    }
    /**
       * Получение товара по ID
       * @param _id Код товара
       */
    async getProduct(_id) {
        const response = await fetch(`/api/v1/articles/${_id}?fields=*,madeIn(title,code),category(title)`);
        const json = await response.json();
        this.setState({
            ...this.getState(),
            item: json.result
        }, 'Загружен товар по ID');
    }
}

export default Product;
