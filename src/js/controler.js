"strict mode";

import "core-js/stable";
import * as model from "./model.js";
import view from "./view/view.js";
import searchView from "./view/searchView.js";

const controlLoadResult = async function () {
  try {
    model.state.search.query = searchView._getquery();
    const query = model.state.search.query;
    const data = await model.getUser(query);

    if (data.message) throw Error("not Found");
    searchView._clearInput();
    searchView._clearError();
    view._renderResult(model.state.user);
    model.setLocalStorage();
  } catch (err) {
    if (!err) return;
    searchView._renderError();
  }
};
const controlToggleTheme = function (btn) {
  if (btn.dataset.theme === "light") {
    view._toggleDarkTheme();

    return;
  }

  if (btn.dataset.theme === "dark") {
    view._toggleLightTheme();
  }
};
// const controlPreferedTheme = function () {
//   if (window.matchMedia("(prefers-color-scheme : light)")) {
//     view._toggleLightTheme();
//   }
//   if (window.matchMedia("(prefers-color-scheme : dark)")) {
//     view._toggleDarkTheme();
//   }
// };

const init = function () {
  view.addHandlerToggleTheme(controlToggleTheme);
  searchView.addHandlerSearch(controlLoadResult);
  model.getLocalStorage();
  view._renderResult(model.state.user);
  // controlPreferedTheme();
};
const dat = window.matchMedia("(prefers-color-scheme : light)");
console.log(dat);
init();
