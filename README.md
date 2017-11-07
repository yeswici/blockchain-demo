# Blockchain Bootstrap Security (BBS) server with Quantum Key Security on AIHPC GovCloud
Blockchain Bootstrap Security (BBS) server on AIHPC cloud to secure sensitive/AI data with SHA256 hash and salt. See details in the Amazon training book at https://www.amazon.com/dp/1549688766. Contact: demo@deepcybe.com

## Setup on AIHPC GovCloud
Launch an AIHPC cloud instance:

For industrial users, you may go to the AWS marketplace at https://aws.amazon.com/marketplace/pp/B01JJ31R8C to launch an EC2 instance of the AIHPC cloud.
 
For GovCloud users, in the EC2 launch site of AWS GovCloud management console, you may search the GovCloud marketplace for “AIHPC” and launch an AIHPC server in the GovCloud (US) region. AIHPC is certified on regulated workload and sensitive data by AWS GovCloud for U.S. persons thus works best for U.S. government users.

Get the code after SSH into the AIHPC GovCloud instance:

```
git clone https://github.com/yeswici/blockchain-demo.git
```

Install dependencies from the GovCloud SSH terminal:

```
$ cd blockchain-demo/
$ sudo apt-get update
$ sudo apt-get install npm 
$ sudo apt-get install nodejs
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
$ npm install
```
Run the server from the GovCloud SSH terminal:

```
./bin/www
```

Point a web browser at the demo (replace localhost with IP of AIHPC GovCloud):

```
http://localhost:3000
```

## BBS Server for Blockchain SHA256 Security on AIHPC GovCloud

REST API by the BBS server - from the GovCloud SSH terminal:
```
~/blockchain-demo/public/javascripts $ vi www_hashsalt.js
REST API Usage: 
1 start API REST server: node www_hashsalt.js
2 web: http://localhost:3001/?data=123&salt=456
```

Console utility to secure sensitive data with hash and salt
```
~/blockchain-demo/public/javascripts $ vi call_hashsalt_api.js
Console Usage: node call_hashsalt_api.js data salt
```

## Setup using Docker

Get the code:

```
git clone https://github.com/yeswici/blockchain-demo.git
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

## Can AIHPC ML Algos break BBS Quantum Keys? 

Can the ML/AI predict the next quantum key to be generated?


## Send Thanks

![](public/images/qr.png)

Bitcoin greatfully accepted: `132aTbnUoSHQtew7vhQV4czrB2nSxcmfZo`

## Contact 
demo@deepcybe.com
