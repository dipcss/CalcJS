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
