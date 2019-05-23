
class StorageService{

  getItem(key){
    //Pedir el Item, no olvidar su conversión.
    try {
      return JSON.parse(localStorage.getItem(key));
    }
    catch(e) {
      return null;
    }
  }

  setItem(key, value){
    //Setear su metodo, no olvidar su conversión
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export default StorageService;