const{Blockchain,Transaction}=require('./blockchain');
const EC =require('elliptic').ec;
const ec =new EC('secp256k1');
const myKey= ec.keyFromPrivate('19a2cfcbb385262cf0b3a164839d5108081f275e421b2a2af1023df001554160');
const myWalletAddress = myKey.getPublic('hex');
let smarthcoin=new Blockchain();
const tx1 = new Transaction(myWalletAddress,'public key',100);
tx1.signTransaction(myKey);
smarthcoin.addTransaction(tx1);
console.log('\n starting miner....');
smarthcoin.minePendingTransactions('sudhiksha-address');




