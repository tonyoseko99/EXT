/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtTraining.Application',

    name: 'ExtTraining',

    requires: [
        // This will automatically load all classes in the ExtTraining namespace
        // so that application classes do not need to require each other.
        'ExtTraining.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtTraining.view.main.Main'
});
