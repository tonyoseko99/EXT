Ext.define("ExtTraining.model.Todo", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: ["_id", "title", "completed", "userId"],
});
