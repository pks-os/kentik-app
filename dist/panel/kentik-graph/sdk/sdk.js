System.register(['./panel_ctrl', './metrics_panel_ctrl', './query_ctrl', './alert_tab_ctrl', 'app/core/config'], function(exports_1) {
    var panel_ctrl_1, metrics_panel_ctrl_1, query_ctrl_1, alert_tab_ctrl_1, config_1;
    function loadPluginCss(options) {
        if (config_1.default.bootData.user.lightTheme) {
            System.import(options.light + '!css');
        }
        else {
            System.import(options.dark + '!css');
        }
    }
    exports_1("loadPluginCss", loadPluginCss);
    return {
        setters:[
            function (panel_ctrl_1_1) {
                panel_ctrl_1 = panel_ctrl_1_1;
            },
            function (metrics_panel_ctrl_1_1) {
                metrics_panel_ctrl_1 = metrics_panel_ctrl_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            },
            function (alert_tab_ctrl_1_1) {
                alert_tab_ctrl_1 = alert_tab_ctrl_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            exports_1("PanelCtrl", panel_ctrl_1.PanelCtrl);
            exports_1("MetricsPanelCtrl", metrics_panel_ctrl_1.MetricsPanelCtrl);
            exports_1("QueryCtrl", query_ctrl_1.QueryCtrl);
            exports_1("alertTab", alert_tab_ctrl_1.alertTab);
        }
    }
});
//# sourceMappingURL=sdk.js.map