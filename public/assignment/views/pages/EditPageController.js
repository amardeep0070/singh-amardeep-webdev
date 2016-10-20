/**
 * Created by Amardeep on 17/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditPageController",EditPageController)
    
    function EditPageController(PageService,$routeParams,$location) {
        var vm= this;
        vm.uid=$routeParams.uid;
        vm.websiteId=$routeParams.wid;
        vm.pid=$routeParams.pid;
        vm.page=pagebyId();
        vm.deletePage=deletePage;
        vm.updatePage=updatePage;
        function pagebyId() {
           return PageService.findPageById(vm.pid)
        }
        function deletePage() {
            PageService.deletePage(vm.pid);
            $location.url("/user/"+  vm.uid +"/website/"+vm.websiteId +"/page");
        }
        function updatePage() {
            $location.url("/user/"+  vm.uid +"/website/"+vm.websiteId +"/page");
        }
    }
})();
