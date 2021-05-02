var navstatus = 0;

function openNav() {
    if (!navstatus) {
        $(".maindiv").animate({ width: "100%" }, 500 );
        $("li").css("display","block");
        $("button > i").css("color", "white");
        navstatus=1;
    } else {
        $(".maindiv").animate({ width: "0%" }, 500 );
        $("li").css("display","none");
        $("button > i").css("color", "black");
        navstatus=0;
    }
}



