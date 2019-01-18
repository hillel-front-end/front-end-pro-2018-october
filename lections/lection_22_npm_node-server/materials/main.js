console.log('hi!');


// XHR - XML-HTTP-REQUEST

// http serve only


var async = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState != 4) return;
        
        // setTimeout(()=>{
            resolve(this.responseText);
        // }, 1000)
        // console.log(this.responseText);
    }

    xhr.open('GET', '/data.json');

    xhr.send();
})

let result;

// async
//     .then(resp => {
//         result = JSON.parse(resp);
//         console.log(result);
//     })

doAjax('POST', '/regist', "HELLO")
    .then(resp => {
        result = JSON.parse(resp);
        console.log(result);
    })



function doAjax(method, path, body){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(this.readyState != 4 || this.status != 200) return;

            resolve(this.responseText);
        }
        xhr.open(method, path);
        xhr.send(body);
    })
}


window.onload = function(){
    
    document.addEventListener('click', function(){
        console.log(result)
    })
}
