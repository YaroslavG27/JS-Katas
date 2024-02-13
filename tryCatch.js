// The function getResults() returns an error. Collect the error and log it in the console.

const search = async () => {
    try {
      let results = await getResults();
    } catch (error) {
      console.log('an error occurred', error.message);
    }
  };
  