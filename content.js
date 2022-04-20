let body = document.body;

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message,sender,sendResponse) {
    if(message){
        body.style.background = "rgb(32,33,36)"
        var all = document.getElementsByTagName("*");
        for (var i=0, max=all.length; i < max; i++) {
         all[i].style.color = "white";
        }
    }
}
