Ext.define("ExtTraining.view.posts.PostsGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postsgrid",
  title: "Posts",
  store: {
    type: "posts",
  },
  columns: [
    {
      text: "ID",
      dataIndex: "id",
      flex: 1,
    },
    {
      text: "User ID",
      dataIndex: "userId",
      flex: 1,
    },
    {
      text: "Title",
      dataIndex: "title",
      flex: 2,
    },
    {
      text: "Body",
      dataIndex: "body",
      flex: 3,
    },
  ],
});
