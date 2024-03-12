Ext.define("ExtTraining.view.fmviews.ParentPanel", {
  extend: "Ext.panel.Panel",
  xtype: "parentpanel",
  items: [
    {
      xtype: "usergrid",
    },
    {
      xtype: "staticdatamanagementtabpanel",
      scrollable: true,
    },
  ],
});
