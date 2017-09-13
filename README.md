# Blockchain Demo
A web-based demonstration of blockchain concepts.

[![Blockchain 101 - Demo](https://img.youtube.com/vi/_160oMzblY8/0.jpg)](https://www.youtube.com/watch?v=_160oMzblY8)

This is a very basic visual introduction to the concepts behind a blockchain. We introduce 
the idea of an immutable ledger using an interactive web demo that is available here:

http://anders.com/blockchain/

## Setup
Get the code:

```
git clone https://github.com/anders94/blockchain-demo.git
```

Install dependencies:

```
cd blockchain-demo
npm install
```
Run the server:

```
./bin/www
```

Point a web browser at the demo:

```
http://localhost:3000
```

## Setup using Docker

Get the code:

```
git clone https://github.com/anders94/blockchain-demo.git
```

Run the Docker setup:

```
cd blockchain-demo
docker-compose up -d
```

Point a web browser at the demo:

```
http://localhost:3000
```

REST API and Console Util for AIHPC cloud

...
~/blockchain-demo/public/javascripts $ vi www_hashsalt.js
//REST API Usage: 
//1 start API REST server: node www_hashsalt.js
//2 web: http://localhost:3001/?data=123&salt=456

~/blockchain-demo/public/javascripts $ vi call_hashsalt_api.js
//Console Usage: node call_hashsalt_api.js data salt
...


## Send Thanks

![](public/images/qr.png)

Bitcoin greatfully accepted: `1K3NvcuZzVTueHW1qhkG2Cm3viRkh2EXJp`
