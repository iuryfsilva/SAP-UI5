//Text control
sap.ui.define([
    "sap/ui/core/mvc/XMLView"

], function(Text){
    "use strict";
    XMLView.create({
        viewName:"sap.ui.demo.walkthrough.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });
    //alert("UI5 is ready to go!");
}); 