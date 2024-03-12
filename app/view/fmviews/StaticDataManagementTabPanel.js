Ext.define("ExtTraining.view.fmviews.StaticDataManagementTabPanel", {
  extend: "Ext.tab.Panel",
  xtype: "staticdatamanagementtabpanel",
  height: 300, // Set a specific height for the tab panel
  items: [
    {
      title: "Posts",
      items: [
        {
          xtype: "postsgrid",
        },
      ],
    },
    {
      title: "Todos",
      items: [
        {
          xtype: "todogrid",
        },
      ],
    },
  ],
});
// Path: app/view/fmviews/UserGrid.js
// Compare this snippet from app/view/todos/TodoForm.js:
// Ext.define("ExtTraining.view.todos.TodoForm", {
//   extend: "Ext.window.Window",
//   xtype: "todoform",
//   controller: "todoformcontroller",
//   height: 300,
//   width: 520,
//   autoShow: true,
//   closable: true,
//   modal: true,
//   layout: "fit",
//   viewModel: {
//     data: {
//       newTitle: null,
//       record: null,
//     },
//   },
//   bind: {
//     title: "{newTitle}",
//   },
//   items: [
//     {
//       xtype: "form",
//       layout: "form",
//       reference: "todoform",
//       jsonSubmit: true,
//       defaultType: "textfield",
//       items: [
//         {
//           fieldLabel: "Todo ID",
//           name: "_id",
//           reference: "todoIdField",
//           bind: {
//             value: "{record._id}",
//           },
//           readOnly: true,
//         },
//         {
//           fieldLabel: "Title",
//           name: "title",
//           allowBlank: false,
//           minLength: 10,
//           bind: {
//             value: "{record.title}",
//           },
//         },
//         {
//           fieldLabel: "Completed",
//           xtype: "checkbox",
//           boxLabel: "Completed",
//           name: "completed",
//           bind: {
//             value: "{record.completed}",
//           },
//         },
//         {
//           fieldLabel: "User ID",
//           name: "userId",
//           bind: {
//             value: "{record.userId}",
//           },
//         },
//         {
//           xtype: "button",
//           text: "Save",
//           formBind: true,
//           handler: "onSaveClick",
//         },
//       ],
//     },
//   ],
// });

