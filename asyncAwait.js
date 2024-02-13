// Turn the following into an "async" function:

const add = async (a, b) => { await a + b }
console.log(add(2,3))

// The function getMessages reads data from a different server. Write the correct code so that the function waits for it before continuing.

const search = async () => {
    let messages = await getMessages();
    return messages;
  };