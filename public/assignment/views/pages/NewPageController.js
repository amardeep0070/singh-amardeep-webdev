/**
 * Created by Amardeep on 16/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController",NewPageController)
    
    function NewPageController(PageService,$routeParams) {
        var vm=this;
        vm.createPage=createPage;
        vm.id=$routeParams.uid;
        vm.websiteId=$routeParams.wid;
        function createPage(page) {
            //var newPage={"name":page.name};
            PageService.createPage(vm.websiteId,page);
        }
    }
})();
