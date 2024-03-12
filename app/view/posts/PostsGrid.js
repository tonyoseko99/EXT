Ext.define("ExtTraining.view.posts.PostsGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postsgrid",
  reference: "postsgrid",
  controller: "postgridviewcontroller",
  title: "Posts",
  store: {
    type: "posts",
  },
  tbar: [
    {
      text: "Add Post",
      listeners: {
        click: "onAddPostClicked",
      },
    },
    // {
    //   text: "Form fields",
    //   listeners: {
    //     click: "onFormFieldsClicked",
    //   },
    // },
    {
      text: "Layouts",
      listeners: {
        click: "onLayoutsClicked",
      },
    },
  ],
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
  selModel: {
    type: "checkboxmodel",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  height: 800,
});
