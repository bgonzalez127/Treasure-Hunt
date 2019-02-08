$("#firstbutton").click(function(){
    $("#firstbutton").hide();
    $("#secondbutton").hide();
    $("#suprise-image").show(1200);
    $("body").css("background-color","pink");
});

$("#secondbutton").click(function(){
    $("#firstbutton").hide();
    $("#secondbutton").hide();
    $("#x-marks-the-spot").show(1200);
});

$("#oof").click(function(){
    $("body").css("background-color","orange");
    $("#suprise-image").css("display","none");
    $("#map").show();
});

$("#another-map").click(function(){
    $("#map").css("display","none");
    $("body").css("background-color","yellow");
    $("#dragon").show();
    $("h1").css("color","red");
});

$("#fire").click(function(){
    $("#dragon").hide();
    $("#escape").show();
    $("#ohno").css("color","#960000");
    $("body").css("background-color","orange");
});

$("#door").click(function(){
    $("#escape").hide();
    $("#ouu").show();
    $("body").css("background-color","pink");
    $("#DONE").css("color","#85d16a");
    alert("CONGRATS");
});

$("#treasureMap").click(function(){
    $("#x-marks-the-spot").hide();
    $("#road").show();
    $("body").css("background-color","#85d16a");
    $("#hmm").css("color","#f44259");
});

$("#bridge").click(function(){
    $("#road").hide();
    $("#bridge1").show();
    $("body").css("background-color","#deaeef");
    $("#quiz").css("color","#005e0c");
});

$("#quiz").click(function(){
    $("#bridge1").hide();
    $("#riddle").show();
    $("body").css("background-color","#42e2f4");
    $("#riddle1").css("color","#68017a");
});

$("#troll1").click(function(){
    $("#riddle2").show();
});

$("#button1").click(function(){
    alert("Correct!");
    $("#riddle").hide();
    $("#hands").show();
});

$("#button2").click(function(){
    alert("TRY AGAIN");
});

$("#almostThere").click(function(){
    $("#wonn").show();
});