console.log('Lection_21');




// console.log('before');

var asyncTimer = new Promise(function(resolve, reject){
    var randomVar = Math.floor(Math.random()*10 - 5 );
    // setTimeout(() => {
    //     if (randomVar >= 0) { resolve(randomVar); } 
    //     reject(randomVar);
    // }, 1000);
});

asyncTimer
    .then(
            (value) => { 
                console.log('resolve m1', value);

                return Promise.reject(value);
            }, 
            (value) => { 
                console.log('reject m01', value); 

                // return new Promise(function(resolve, reject){
                //     reject(value);
                // });
                return Promise.reject(value);
            }
        )
    .then(
            (value) => { console.log('resolve m2', value); }, 
            (value) => { console.log('reject m02', value); }
        )
    .catch((error) => { //  не имеет смысла при существующих обработчиках Promise.reject
        console.warn(error);
    });
// asyncTimer
//     .then(() => {
//         console.log('action m1')
//     })
//     .then(() => {
//         console.log('action m2')
//     });

// asyncTimer
//         .then(m1)
//         .then(m2)
//         .then(m3)
//         .catch((error) => {
//             console.warn(error);
//         });




// console.log('after');


function m1(){
    m3();
    console.log('action m1')
}

function m2(){
    console.log('action m2')
}

function m3(){
    m2();
    console.log('action m3')
}


// -----------------------------------------------


new Promise((resolve, reject) => {

    console.log(1);

    setTimeout(() => {
        resolve();
    }, 1000)
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2)

            resolve();
        }, 2000)
    });

    // return Promise.resolve();
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3)

            resolve();
        }, 1000)
    });
})
.then(() => {
    console.log(4)
})