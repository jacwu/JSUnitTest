function InfoMgr(){};

InfoMgr.post = function (info) {
    jQuery.ajax({
        method:"POST",
        url:"/fakeurl",
        data:{"mydata": "hello world" }
    });
};