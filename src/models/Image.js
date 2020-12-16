var m = require("mithril");
export const data = {
  list: [],
  fetch: function () {
    return m
      .request({
        method: "GET",
        url: "https://picsum.photos/v2/list",
        //withCredentials: true,
      })
      .then(function (items) {
        data.list = items;
      });
  },
};
