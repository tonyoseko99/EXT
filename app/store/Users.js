Ext.define("ExtTraining.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "ExtTraining.model.User",
  proxy: {
    type: "rest",
    url: "http://localhost:3000/users",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
