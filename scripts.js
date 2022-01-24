function BgColorWheel(){
    //var elem = document.getElementByClassName("naslovnica");
    //var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("naslovnica").style.backgroundColor = "#D93600";
}

function search(){   ;
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    bringpage(input);
}

/*function RGB2Color(r,g,b){
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function byte2Hex(n){
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function SineRainbow(){
    var frequency = .3;
    var amplitude = 127;
    var center = 128;

    for (var i = 0; i < 32; ++i){
        wait(1000)
        v = Math.sin(frequency*i) * amplitude + center;
        // Note that &#9608; is a unicode character that makes a solid block
        document.getElementById('log').innerHTML ='<font style="color:' + RGB2Color(v,v,v) + '">&#9608;</font>';
        document.getElementById("naslovnica").style.backgroundColor = ' + RGB2Color(v,v,v) + ';
    }
}*/

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}

function bringpage(site){
    if(site=="astronomija"){
        window.location = '/quK7@5Dy.html'
    }
    if(site=="domov"){
        window.location = '/index.html'
    }
    if(site=="messier"){
      window.location = '/astronomija/messier.html'
    }
    else{
        ;
    }
}
