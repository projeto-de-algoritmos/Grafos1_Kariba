export class StorageService {

  constructor() {}

  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key) {  
    const data = localStorage.getItem(key);

    if (!data) return '';

    return JSON.parse(data);
  }

}