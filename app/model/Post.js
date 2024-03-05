Ext.define("ExtTraining.model.Post", {
  extend: "Ext.data.Model",
  idProperty: "id",
  fields: ["id", "userId", "title", "body"],
  proxy: {
    type: 'rest',
    url: 'https://jsonplaceholder.typicode.com/posts',
    reader: {
      type: 'json',
    },
  },
});
