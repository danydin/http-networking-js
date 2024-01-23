Q: is https being encrypted by the server or client and how it's done?
A: The encryption process involves both the server and the client, and it is achieved through the use of SSL/TLS protocols.

Here's a simplified overview of how HTTPS encryption works:

1. Client Hello: The client initiates a connection to the server by sending a "Client Hello" message. This message includes information about the SSL/TLS versions the client supports, supported cryptographic algorithms, and other parameters.
2. Server Hello: The server responds with a "Server Hello" message, selecting the highest SSL/TLS version and the best cryptographic algorithms supported by both the client and server.
3. SSL/TLS Handshake: The client and server perform a handshake to establish a secure connection. During this handshake, they agree on a shared secret (known as the pre-master secret) without exposing it to eavesdroppers.
4. Public Key Exchange: The server sends its public key to the client. The client verifies the server's identity using the server's digital certificate (issued by a trusted Certificate Authority).
5. Key Derivation: Both the client and server use the exchanged information to independently derive a shared secret (the master secret) that will be used to generate session keys for encryption and decryption.
6. Secure Data Exchange: The encrypted connection is established, and all data exchanged between the client and server is encrypted using the agreed-upon session keys. This includes the actual content of the web pages, form submissions, and any other data transmitted during the session.
The encryption process involves both the server and the client. The server's digital certificate helps the client verify the server's identity, and the key exchange and derivation process ensures that the communication remains confidential.

The SSL/TLS protocols ensure the confidentiality, integrity, and authenticity of the data being transmitted over the HTTPS connection. The encryption prevents eavesdroppers from intercepting and understanding the data exchanged between the client and server.

# HTTPS
Hypertext Transfer Protocol Secure or HTTPS is an extension of the HTTP protocol. HTTPS secures the data transfer between client and server by encrypting all of the communication.

HTTPS allows a client to safely share sensitive information with the server through an HTTP request, such as credit card information, passwords, or bank account numbers.

HTTPS requires that the client use SSL or TLS to protect requests and traffic by encrypting the information in the request. HTTPS is just HTTP with extra security!

HTTPS ENSURES THAT YOU'RE TALKING TO THE RIGHT PERSON (OR SERVER)
In addition to encrypting the information within a request, HTTPS uses digital signatures to prove that you're communicating with the server that you think you are. If a hacker were to intercept an HTTPS request by tapping into a network cable, they wouldn't be able to successfully pretend they are your bank's web server.

HTTPS KEEPS YOUR MESSAGES PRIVATE, BUT NOT YOUR IDENTITY


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