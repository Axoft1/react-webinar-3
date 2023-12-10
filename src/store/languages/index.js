import StoreModule from "../module";
import strings_en  from "./strings_en";
import strings_ru from "./strings_ru";

class Languages extends StoreModule {

  initState() {
    return {
      translation: strings_ru,   
      language: 'ru'   
    }
  }

  switchRu() {
    this.setState({ translation: strings_ru, language: 'ru' }, `ru `);
  }

  switchEn() {
    this.setState({ translation: strings_en, language: 'en' }, `en`);
  }
}

export default Languages;
