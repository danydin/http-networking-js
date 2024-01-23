# MAKING A GET REQUEST USING THE FETCH API
In this course, we have been and will continue to use the Fetch API to make HTTP requests. The fetch() method accepts an optional init object parameter as its second argument that we can use to define things like:

method: The HTTP method of the request, like GET.
headers: The headers to send.
mode: Used for security, we'll talk about this in future courses.
body: The body of the request. Often encoded as JSON.
Example GET request using fetch:

await fetch(url, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'sec-ch-ua-platform': 'macOS'
  }
})

* HTTP methods (get,put,post,delete) map to crud actions (made by the backend deves) by convention
The bulk of the logic in most web applications is "CRUD" logic. The web interface allows users to create, read, update and delete various resources. Think of a social media site - users are basically creating, reading, updating and deleting their social posts. They are also creating, reading, updating and deleting their user accounts. It's CRUD all the way down!

* You need to know the basics, like "2XX is good", "4XX is a client error", and "5XX is a server error". That said, you don't need to memorize all the codes, they're easy to look up.

