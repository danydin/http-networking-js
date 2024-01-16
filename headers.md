# WHAT ARE HTTP HEADERS?
An HTTP header allows clients and servers to pass additional information with each request or response. Headers are just case-insensitive key-value pairs that pass additional metadata about the request or response.

HTTP requests from a web browser carry with them many headers, including but not limited to:

The type of client (e.g. Google Chrome)
The Operating system (e.g. Windows)
The preferred language (e.g. US English)
As developers, we can also define custom headers in each request.

HEADERS API
The Headers API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the Request.headers and Response.headers properties.