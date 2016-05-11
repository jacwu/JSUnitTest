function ChangeContainerText(txt){
    if(txt == undefined){
        txt = "hello world";
    }
    $("#container").text(txt);
}

function ajaxRequest(myCallback){
       var xmlhttp  = new XMLHttpRequest();
       xmlhttp.onload = function(args) {
           myCallback(this.responseText);   
        };  
        xmlhttp.open("GET", "/site/test",true);
        xmlhttp.send();  
} 

function ajaxRequestWithJQuery(myCallback, showError){
    $.ajax({
        url: "/site/test",
        success: function(response){
            myCallback(response);
        },
        error: showError
    });
}
