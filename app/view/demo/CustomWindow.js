Ext.define(
  "ExtTraining.view.demo.CustomWindow",
  {
    extend: "Ext.window.Window",
    xtype: "customwindow",
    title: "My Custom Title",
    height: 200,
    width: 520,
    autoShow: true,
    closable: true,
    maximizable: true,
    modal: true,
  },
  function () {
    // Ext.create("ExtTraining.view.demo.CustomWindow");
    var wd = Ext.create({
      xtype: "customwindow",
    });
    wd.show();
  }
);
