# PROMISES IN JAVASCRIPT
source: https://www.boot.dev/assignments/e9d87b33-df09-4d49-9c96-ce085b81ec92

A Promise in JavaScript is very similar to making a promise in the real world. When we make a promise we are making a commitment to something. For example, I promise to explain JavaScript promises to you, my promise to you has 2 potential outcomes: it is either fulfilled, meaning I eventually explained promises to you, or it is rejected meaning I failed to keep my promise.

The Promise Object represents the eventual fulfillment or rejection of our promise and holds the resulting values. In the meantime, while we're waiting for the promise to be fulfilled, our code continues executing. Promises are the most popular modern way to write asynchronous code in JavaScript.

DECLARING A PROMISE
Here is an example of a promise that will resolve and return the string "resolved!" or reject and return the string "rejected!" after 1 second.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved!")
    } else {
      reject("rejected!")
    }
  }, 1000)
})

function getRandomBool(){
  return Math.random() < .5
}

USING A PROMISE
Now that we've created a promise, how do we use it?

The Promise object has .then and .catch that make it easy to work with. Think of .then as the expected follow-up to a promise, and .catch as the "something went wrong" follow-up.

If a promise resolves, its .then function will execute. If the promise rejects its .catch method will execute.

Here's an example of using .then and .catch with the promise we made above:

promise.then((message) => {
    console.log(`The promise finally ${message}`)
}).catch((message) => {
    console.log(`The promise finally ${message}`)
})

// prints:
// The promise finally resolved!
// or
// the promise finally rejected!


-----
source: https://www.boot.dev/assignments/f7cd4a14-6271-4cd0-8949-78eae07aa113

.THEN() VS AWAIT
In the early days of web browsers, promises and the await keyword didn't exist, so the only way to do something asynchronously was to use callbacks.

A "callback function" is a function that you hand to another function. That function then calls your callback later on. The setTimeout function we've used in the past is a good example.

function callbackFunction(){
  console.log("calling back now!")
}
const milliseconds = 1000
setTimeout(callbackFunction, milliseconds)
Copy icon
While even the .then() syntax is generally easier to use than callbacks without the Promise API, the await syntax makes them even easier to use. You should use async and await over .then and New Promise() as a general rule.

To demonstrate, which of these is easier to understand?

fetchUser.then(function(user){
  return fetchLocationForUser(user)
}).then(function(location){
  return fetchServerForLocation(location)
}).then(function(server){
  console.log(`The server is ${server}`)
});

const user = await fetchUser()
const location = await fetchLocationForUser(user)
const server = await fetchServerForLocation(location)
console.log(`The server is ${server}`)
Copy icon
They both do the same thing, but the second example is so much easier to understand! The async and await keywords weren't released until after the .then API, which is why there is still a lot of legacy .then() code out there.

# ERROR HANDLING IN JAVASCRIPT
When something goes wrong while a program is running, JavaScript uses the try/catch paradigm for handling those errors. Try/catch is fairly common, Python uses a similar mechanism.

FIRST, AN ERROR IS THROWN
For example, let's say we try to access a property on an undefined variable. JavaScript will automatically "throw" an error.

const speed = car.speed
// The code crashes with the following error:
// "ReferenceError: car is not defined"
Copy icon
TRYING AND CATCHING ERRORS
By wrapping that code in a try/catch block, we can handle the case where car is not yet defined.

try {
  const speed = car.speed
} catch (err) {
  console.log(`An error was thrown: ${err}`)
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}

HANDLING A NEW ERROR OBJECT
When handling a thrown Error object, you must access the message property of the error object to display it correctly to the console.

let err = new Error('This is the error message');

try {
  // computation
} catch (err) {
  console.log(`An error was thrown: ${err.message}`)
  // the code cleanly logs:
  // "An error was thrown: This is the error message"
}


# ASYNC/AWAIT MAKES ERROR HANDLING EASIER
try and catch are the standard way to handle errors in JavaScript, the trouble is, the original Promise API with .then didn't allow us to make use of try and catch blocks.

Luckily, the async and await keywords do allow it, yet another reason to prefer the newer syntax.

.CATCH() CALLBACK ON PROMISES
The .catch() method works similarly to the .then() method, but it fires when a promise is rejected instead of resolved.

EXAMPLE WITH .THEN AND .CATCH CALLBACKS
fetchUser().then(function(user){
  console.log(`user fetched: ${user}`)
}).catch(function(err){
  console.log(`an error was thrown: ${err}`)
});

EXAMPLE OF AWAITING A PROMISE
try {
  const user = await fetchUser()
  console.log(`user fetched: ${user}`)
} catch (err) {
  console.log(`an error was thrown: ${err}`)
}

As you can see, the async/await version looks just like normal try/catch JavaScript!