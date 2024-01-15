# asymteric keys encyrption:
on server side they have 2 keys private and public, the public used to encrypt and the private to decrypt. the public is sent to the client so he can encrypt with it the content sent to the server, but what if the server needs to send private data back to the client? then symmetric encryption used:

# symteric keys encyrption:
steps:
0. sever generates public & private keys
1. client contact the server
2. server sendks public key to client
3. client encrypt a secret token for the symteric key with the public key sent by the server
4. server decrypt the secret token and now they both use this secret token / symteric key to decrypt and encrypt data
5. c sends encrypted http req
6. s decrypt the req
7. s encrypt response
8. c decrypt the response