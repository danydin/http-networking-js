# JSON REVIEW
JSON is a stringified representation of a JavaScript object, which makes it perfect for saving to a file or sending in an HTTP request. Remember, an actual JavaScript object is something that exists only within your program's variables. If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.

# IT'S NOT JUST USED IN JAVASCRIPT
Just because JSON is called JavaScript Object Notation doesn't mean it's only used by JavaScript! JSON is a common standard that is recognized and supported by every major programming language. For example, even though Boot.dev's backend is written in Go, we still use JSON as the communication format between the front-end and backend.

# COMMON USE-CASES
In HTTP request and response bodies
As formats for text files. .json files are often used as configuration files.
In NoSQL databases like MongoDB, ElasticSearch and Firestore

# SENDING JSON
JSON isn't just something we get from the server, we can also send JSON data!

In JavaScript, two of the main methods we have access to are JSON.parse(), and JSON.stringify().
JSON.STRINGIFY()
JSON.stringify() is particularly useful for sending JSON.

As you may expect the JSON stringify() method does the opposite of parse. It takes a JavaScript object or value as input and converts it into a string. This is useful when we need to serialize the objects into strings to send them to our server or store them in a database.


# XML
We can't talk about JSON without mentioning XML. Extensible Markup Language, or XML is a text-based format for representing structured information, just like JSON - it just looks a bit different.

# XML SYNTAX
XML is a markup language like HTML, but it's more generalized in that it does not use predefined tags. Just like how in a JSON object keys can be called anything, XML tags can also have any name.

# XML EXAMPLE
<root>
  <id>1</id>
  <genre>Action</genre>
  <title>Iron Man</title>
  <director>Jon Favreau</director>
</root>

THE SAME DATA BUT IN JSON FORM:
{
  "id": "1",
  "genre": "Action",
  "title": "Iron Man",
  "director": "Jon Favreau"
}

# WHY USE XML?
XML and JSON both accomplish similar tasks, so which should you use?

XML used to be used for the same things that today JSON is used for. Configuration files, HTTP bodies, and other data-transfer use cases can work just fine using JSON or XML. My advice is that generally speaking if JSON works, you should favor it over XML these days. JSON is lighter-weight, easier to read, and has better support in most modern programming languages.

There are some cases where XML might still be the better, or maybe even the necessary choice, but those cases will be rare.