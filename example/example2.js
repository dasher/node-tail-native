var Tail = require("../tail").Tail;
var tail = new Tail();

tail.start("testfile", function(err, data) {
    if (err){
        console.log(err);
        return;
    }
    console.log("from js " + data);
});

t=setInterval(function(){
    if ( tail.stop() )
        console.log("stopped");
    else
        console.log("alredy stopped");
    //clearInterval(t);
}, 1000);
