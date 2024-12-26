let myPromise = new Promise((resolve,reject) => {
    let success = false;
    if(success) {
        resolve('True');
    }
    else {
        reject('False');
    }
})

let message =true;
myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})

// It will log 'False'