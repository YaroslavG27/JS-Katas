// The function getResults() returns an error. Collect the error and log it in the console.

/*const search = async () => {
    try {
      let results = await getResults();
    } catch (error) {
      console.log('an error occurred', error.message);
    }
  };*/


//   One of the 2 functions getResults() and getPages() returns an error. You don't know which one. Collect any of the 2 errors and log them in the console.

const search = async () => {
    try {
        let results = await getResults()
        let pages = await getPages()
    } catch (error){
        console.log('an error occurred', error.message)
    }
  }
