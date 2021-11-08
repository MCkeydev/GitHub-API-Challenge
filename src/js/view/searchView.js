class SearchView {
  _parentElement = document.querySelector(".search");

  _getquery() {
    const query = this._parentElement.querySelector(".search__field").value;

    return query;
  }
  _clearInput() {
    this._parentElement.querySelector(".search__field").value = "";
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
  _renderError() {
    if (document.querySelector(".search__error")) return;
    const searchField = this._parentElement.querySelector(".search__field");
    const markup = `
    <div class="search__error">No results</div>
    `;
    searchField.insertAdjacentHTML("afterend", markup);
  }
  _clearError() {
    const error = document.querySelector(".search__error");
    if (!error) return;
    error.remove();
  }
}

export default new SearchView();
