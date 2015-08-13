document.addEventListener('DOMContentLoaded', function() {
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
			d = document;

			var bookmarkTreeNodes = chrome.bookmarks.getTree(

			 // Source: http://stackoverflow.com/questions/5570760/chrome-bookmarks-api
			 function traverseBookmarks(bookmarkTreeNodes) {
			     for(var i=0;i<bookmarkTreeNodes.length;i++) {
				 console.log(bookmarkTreeNodes[i].title, bookmarkTreeNodes[i].url ? bookmarkTreeNodes[i].url : "[Folder]");
				 if(bookmarkTreeNodes[i].children) {
				     traverseBookmarks(bookmarkTreeNodes[i].children);
				 }
			     }
			 })
			    });
	    }, false);
    }, false);