function returnPromise(data) {
    return new Promise((resolve, reject) => {
      if (data) {
        resolve("Data processed successfully");
      } else {
        reject("Error: No data found");
      }
    });
  }


  returnPromise("Hello World")
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  returnPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));