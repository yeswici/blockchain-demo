# Blockchain Bootstrap on AIHPC
Blockchain Bootstrap Server and APIs on AIHPC cloud to secure AI data with hash and salt. Details in the Amazon training book at https://www.amazon.com/dp/1549688766

## Setup
Launch an AIHPC cloud instance

For industrial users, you may go to the typical AWS marketplace at https://aws.amazon.com/marketplace/pp/B01JJ31R8C to launch an EC2 instance of the AIHPC cloud.
 
For GovCloud users, in the EC2 launch site of AWS GovCloud management console, you may search the GovCloud marketplace for “AIHPC” and launch an AIHPC server in the GovCloud (US) region. AIHPC is certified on regulated workload and sensitive data by AWS GovCloud for U.S. persons thus works best for U.S. government users.

Get the code:

```
git clone https://github.com/yeswici/blockchain-demo.git
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

## REST API and Console Util for AIHPC cloud

```
~/blockchain-demo/public/javascripts $ vi www_hashsalt.js
REST API Usage: 
1 start API REST server: node www_hashsalt.js
2 web: http://localhost:3001/?data=123&salt=456

~/blockchain-demo/public/javascripts $ vi call_hashsalt_api.js
Console Usage: node call_hashsalt_api.js data salt
```

## Send Thanks

![](public/images/qr.png)

Bitcoin greatfully accepted: `1K3NvcuZzVTueHW1qhkG2Cm3viRkh2EXJp`
