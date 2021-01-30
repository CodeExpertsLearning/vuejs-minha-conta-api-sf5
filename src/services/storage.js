export default {
  setData(key, value) {
    localStorage.setItem(key, value);
  },
  getData(key) {
    return localStorage.getItem(key);
  },
  removeData(key) {
    localStorage.removeItem(key);
  }
};
