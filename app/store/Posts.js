Ext.define("ExtTraining.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "ExtTraining.model.Post",
  requires: ["ExtTraining.model.Post"],
  autoLoad: true,
});
