window.onload = function(){
    
    function callback(val){
        console.log(val);
    }

    let fruits = [
        "banana", "apple", "pear",
    ];
    
    //fruits.forEach(function(val){
    //    console.log(val);
    //});
    fruits.forEach(callback);
    console.log("done");

    $.get("data/tweets.json", function(data){
        console.log(data);
    });

    //using the pre-made callback
    $.get("data/tweets.json", callback);

};