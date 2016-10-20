/**
 * Created by Amardeep on 19/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController",EditWidgetController)
    function EditWidgetController($routeParams,WidgetService,$location) {
        var vm=this;
        vm.pid=$routeParams.pid;
        vm.uid=$routeParams.uid;
        vm.wid=$routeParams.wid;
        vm.wgid=$routeParams.wgid;
        vm.deleteWidget=deleteWidget;
        function init() {
            vm.widget=WidgetService.findWidgetById(vm.wgid);
        }
        init();
        function deleteWidget() {
            vm.deleteWidget=WidgetService.deleteWidget(vm.wgid);
            console.log("deleted")
            $location.url("/user/" + vm.uid+ "/website/" + vm.wid + "/page/" + vm.pid + "/widget" );
        }
    }
})();
