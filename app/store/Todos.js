Ext.define("ExtTraining.store.Todos", {
  extend: "Ext.data.Store",
  alias: "store.todos",
  model: "ExtTraining.model.Todo",
  proxy: {
    type: "rest",
    url: "http://localhost:3000/todos",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
