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
