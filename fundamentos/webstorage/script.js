window.onload = loadPersisted;

function loadPersisted() {
  loadDefaults();
  for (let ind = 0; ind < localStorage.length; ind += 1) {
    const key = localStorage.key(ind);
    const value = localStorage.getItem(key);
    changePropriety(key, value);
    document.getElementsByName(key)[0].value = value;
  }
}

function loadDefaults() {
  for (const iterator of document.getElementsByTagName("select")) {
    changePropriety(iterator.name, iterator.value);
  }
}

function persist(key, value) {
  localStorage.setItem(key, value);
}

function onChange(event) {
  let prop = event.target.name;
  let value = event.target.value;
  changePropriety(prop, value);
  persist(prop, value);
}

function changePropriety(prop, value) {
  document.getElementsByTagName("p")[0].style[prop] = value;
}
