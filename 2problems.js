function prime_position(x){
    var a=0;
    for(var e=0;e<=500000;e++){
        if(prime_number(e)==true){
            a+=1;
        }
        if(a==x){
            return e;
        }
    }

}
function prime_number(y){
    for (var e = y - 1; e >= 1; e--) {
        if (y % e == 0 && e > 1) {
            return false;
        }
        if (y % e == 0 && e == 1) {
            return true;
        }
    }
}

//prime number function part of code for prime position



function sort_subtract(num){
    var x = num.toString();
    var y = "";
    var digit1 = -1;
    var digit2 = -1;
    var digit3 = -1;
    var digit4 = -1;
    var digit5 = -1;
    if(x.length==4){
        digit5="";
    }
    if(x.length=3){
        digit5="";
        digit4="";
    }
    if(x.length=2){
        digit5="";
        digit4="";
        digit3="";
    }
    if(x.length=1) {
        digit5="";
        digit4="";
        digit3="";
        digit2 = "";
    }

    if(x[0]==x[1] && x[1]==x[2] && x[2]==x[3]){
        digit4=x[0];
        digit3=x[0];
        digit2=x[0];
        digit1=x[0];
    }

    for(var i=0;i<=x.length;i++) {
        if (x[i] >= digit1) {
            digit1 = x[i];
        }
    }
    y = y + digit1;

    for(var i=0;i<=x.length;i++) {
        if (x[i] >= digit2 && x[i] <digit1) {
            digit2 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit3 = x[i];
                }
            }
        }
    }
    y = y + digit2;

    for(var i=0;i<=x.length;i++) {
        if (x[i] >= digit3 && x[i] <digit2) {
            digit3 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit4 = x[i];
                }
            }
        }
    }
    y = y + digit3;

    for(var i=0;i<=x.length;i++) {
        if (x[i] >= digit4 && x[i] <digit3) {
            digit4 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit5 = x[i];
                }
            }
        }
    }
    y = y + digit4;

    for(var i=0;i<=x.length;i++) {
        if (x[i] >= digit5 && x[i] <digit4) {
            digit5 = x[i];
        }
    }
    y = y + digit5;

    var z = ""
    var digit21 = 10;
    var digit22 = 10;
    var digit23 = 10;
    var digit24 = 10;
    var digit25 = 10;

    if(x.length==4){
        digit25="";
    }
    if(x.length==3){
        digit25="";
        digit24="";
    }
    if(x.length==2){
        digit25="";
        digit24="";
        digit23="";
    }
    if(x.length==1) {
        digit25="";
        digit24="";
        digit23="";
        digit22="";
    }


    if(x[0]==x[1] && x[1]==x[2] && x[2]==x[3]){
        digit24=x[0];
        digit23=x[0];
        digit22=x[0];
        digit21=x[0];
    }


    for(var i=0;i<=x.length;i++) {
        if (x[i] <= digit21) {
            digit21 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit22 = x[i];
                }
            }
        }
    }
    z = z + digit21;

    for(var i=0;i<=x.length;i++) {
        if (x[i] < digit22 && x[i] >digit21) {
            digit22 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit23 = x[i];
                }
            }
        }
    }
    z = z + digit22;

    for(var i=0;i<=x.length;i++) {
        if (x[i] < digit23 && x[i] >digit22) {
            digit23 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit24 = x[i];
                }
            }
        }
    }
    z = z + digit23;

    for(var i=0;i<=x.length;i++) {
        if (x[i] < digit24 && x[i] >digit23) {
            digit24 = x[i];
            for(var e=i+1;e<=x.length;e++){
                if(x[e]==x[i]){
                    digit25 = x[i];
                }
            }
        }
    }
    z = z + digit24;

    for(var i=0;i<=x.length;i++) {
        if (x[i] < digit25 && x[i] >digit24) {
            digit25 = x[i];
        }
    }
    z = z + digit25;

    return y-z;


}
