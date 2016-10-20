/**
 * Created by Amardeep on 15/10/16.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);
    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" },
        { "_id": "544", "name": "Post 4", "websiteId": "789" }
    ];

    function PageService() {
        var api ={
            createPage:createPage,
            findPageByWebsiteId:findPageByWebsiteId,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage
        }
        return api;
        function createPage(websiteId, page) {
            var newPage={"_id": new Date().getTime()+"", "name": page.name,"websiteId": websiteId }
            pages.push(newPage);
        }
        function findPageByWebsiteId(websiteId) {
            var result= [];
            for (var w in pages){
                if(pages[w].websiteId===websiteId){
                    result.push(pages[w]);
                }
            }
            return result;
        }
        function findPageById(pageId) {
            for (var w in pages){
                if(pages[w]._id===pageId){
                    return pages[w]
                }
            }
            return null;
        }
        function updatePage(pageId, page) {
            for(var i in pages){
                if(pages[i]._id === pageId){
                    pages[i].name = page.name;
                    return true;
                }
            }
            return false;
        }
        function deletePage(pageId) {
            for (var w in pages){
                if(pages[w]._id===pageId){
                    pages.splice(w,1);
                    return true;
                }
            }
            return false;
        }
    }
})();
