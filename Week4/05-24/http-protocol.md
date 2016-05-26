# HTTP Protocol

The WWW is transmitted using the HTTP protocol. This is the protocol your browser uses to communicate with all the web sites you use. HTTP is built on top of another network protocol called TCP. Conceptually, TCP is like a phone connection. You have to do something to make the connection, which may take a while, but once the connection is made, you have a two way communication.

The first version of the HTTP protocol only allow transferring HTML files. Now it can transfer any file time. The type of a file is encoded in a mime-type or [media type](https://en.wikipedia.org/wiki/Media_type), which is encoded as a Content-Type header.

## Parts of a

* host name
* port number
* method
  * GET
  * POST
  * PUT
  * DELETE
* headers
  * Content-Length
  * Content-Type
* request vs response
* query strings
* message body
* status codes
* redirects
