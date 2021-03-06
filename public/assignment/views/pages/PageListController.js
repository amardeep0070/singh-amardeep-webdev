/**
 * Created by Amardeep on 16/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController",PageListController)

    function PageListController(PageService,$routeParams) {
    var vm= this;
     vm.websiteId=$routeParams.wid;
     vm.id=$routeParams.uid;
    function init() {
        PageService
            .findPageByWebsiteId(vm.websiteId)
            .success(function (pages) {
                vm.pageList=pages;
            })
            .error(function (error) {
                console.log("Server Error");
            })
    }
    init();
    }

})();
