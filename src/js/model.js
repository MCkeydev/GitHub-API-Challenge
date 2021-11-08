export const state = {
  user: {},
  search: {
    query: "",
  },
};
export const getUser = async function (query) {
  try {
    const res = await fetch(`https://api.github.com/users/${query}`);
    // if (!res.ok) throw new Error("No results");
    const data = await res.json();
    state.user = data;
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
export const setLocalStorage = function () {
  localStorage.setItem("user", JSON.stringify(this.state));
};
export const getLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem("user"));

  if (!data) return;

  this.state.user = data.user;
};
