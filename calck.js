var result = document.getElementById('result'); 

function myKeyPress(e){
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    var k=(String.fromCharCode(keynum));

   if (e.keyCode >= 65 && e.keyCode <= 90) {return false;}
     if (e.keyCode >= 33 && e.keyCode <= 40) {return false;}
     if (e.keyCode >= 219 && e.keyCode <= 220) {return false;}
    if (e.keyCode === 188) {return false;}
    if (e.keyCode === 186) {return false;}
    if (e.keyCode === 192) {return false;}
    if (e.keyCode === 17) {return false;}
    if (e.keyCode === 18) {return false;}

if (e.keyCode == 27){
        result.innerText = '0';
    } else if (e.keyCode === 187){
result.innerText = result.innerText + '+';
    } else if (e.keyCode === 56){
result.innerText = result.innerText + '*';
    }else if (e.keyCode === 189){
result.innerText = result.innerText + '-';
    } else if (e.keyCode === 191){
result.innerText = result.innerText + '/';
    } else if (e.keyCode === 190){
result.innerText = result.innerText + '.';
    } else if (e.keyCode === 13){
        result.innerText = parseFloat(eval(result.innerText).toFixed(2));
    } else if (e.keyCode === 16) {return false;
    }else if (e.keyCode === 8){
        result.innerText = result.innerText.replace(/.$/, "");
        if (result.innerText===''){
            result.innerText='0';
        } 
    }else if (result.innerText === '0') {
        result.innerText = k;
    } else{
    result.innerText = result.innerText + k;
    }
}
//////////////////////////////////////////
function clickButton(clicked_id) {
    var result = document.getElementById('result');
    var bt = clicked_id;
    if (bt === 'c') {
        result.style.fontSize='4em';
        result.innerText = '0';
    } else if (result.innerText === '0') {
        result.innerText = bt;
    } else if (bt === '=') {
        result.innerText = parseFloat(eval(result.innerText).toFixed(2));
        if(result.innerText.length>'7'){
            result.style.fontSize='2em';
        }
    } else if (bt === 'del') {
        result.innerText = result.innerText.replace(/.$/, "");
        if (result.innerText===''){
            result.innerText='0';
        }
        if(result.innerText.length<'7'){
            result.style.fontSize='4em';
        }
    } else {
        result.innerText = result.innerText + bt;
        if(result.innerText.length>'7'){
            result.style.fontSize='2em';
        }
    }
}
addEventListener("keydown", myKeyPress);