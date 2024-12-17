/*sat AM, PM*/
function check(i){
    if(i<10)
    {
        i = '0' + i;
    }
    return i;
}

function oClock(){
    const date  = new Date();
    let h24 = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = check(m);
    s = check(s);
    const h12 = h24%12 || 12;
    if(h24<12){
        document.getElementById('period').innerHTML = 'AM';    
    }
    else{
        document.getElementById('period').innerHTML = 'PM';    
    }
    document.getElementById('time').innerHTML =`${h12} : ${m} : ${s}`;
    setTimeout('oClock()',1000);
}

oClock();



