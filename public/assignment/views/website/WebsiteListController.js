/**
 * Created by Amardeep on 13/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)

    function WebsiteListController(WebsiteService, $routeParams) {
        var vm = this;
        vm.id= $routeParams.uid;
        //console.log("Id is  " + id);
        vm.websiteList = websitesList() ;
        function websitesList() {
            var result = WebsiteService.findWebsitesByUser(vm.id);
            return result;
        }
        //console.log(vm.websiteList);
    }
})()