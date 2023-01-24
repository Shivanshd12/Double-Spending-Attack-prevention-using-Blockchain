const { Blockchain, Block, Transaction } = require('./Blockchain');
const { NetworkObserver } = require('./NetworkObserver');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('7fe38a7cd191b531376ed5db174624ff3a474b736d824d174677e32aeb703c29');
const Key1 = ec.keyFromPrivate('1c2e962350cbe889eeb39ab45728fa7e59624ad4d0b8af4f258a9dd439db3f8f');
const Key2 = ec.keyFromPrivate('af68820d23d0857f56aefba0382a631f6e4d54056cbf2ad8d2f64fcc7d34441d');
const myWalletAddress = myKey.getPublic('hex');
const address1 = Key1.getPublic('hex');
const address2 = Key2.getPublic('hex');

function fetchAddress() {
    const key = ec.genKeyPair();
    const publicKey = key.getPublic('hex');
    const privateKey = key.getPrivate('hex');
    const recvKey = ec.keyFromPrivate(privateKey);
    const recvWalletAddress = recvKey.getPublic('hex');
    return recvWalletAddress;
}
const recv_address = fetchAddress();
new_address = fetchAddress();
global.shivanshCoin = new Blockchain();
const sendAddr = [address2, myWalletAddress, myWalletAddress, address1];
const recvAddr = [fetchAddress(), recv_address, new_address, fetchAddress()];
const tx3 = new Transaction(address2, fetchAddress(), 3);
tx3.signTransaction(Key2);
global.shivanshCoin.addTransaction(tx3);
const tx1 = new Transaction(myWalletAddress, recv_address, 10);
tx1.signTransaction(myKey);
global.shivanshCoin.addTransaction(tx1);
const dsa_tx = new Transaction(myWalletAddress, new_address, 10);
dsa_tx.signTransaction(myKey);
global.shivanshCoin.addTransaction(dsa_tx);
const tx2 = new Transaction(address1, fetchAddress(), 5);
tx2.signTransaction(Key1);
global.shivanshCoin.addTransaction(tx2);
console.log("\nThe current blockchain is:");
console.log(global.shivanshCoin);
console.log("\nStarting the miner...");
for (const addr of sendAddr) {
    global.shivanshCoin.minePendingTransactions(addr);
}
const ne = new NetworkObserver(global.shivanshCoin.pendingTransactions, global.shivanshCoin);
ne.getRecords(sendAddr);
console.log("\nThe current blockchain is:");
console.log(global.shivanshCoin);
for (var block in global.shivanshCoin.blockchain) {
    if (block.precedingHash == null) {
        global.shivanshCoin.blockchain.splice(global.shivanshCoin.blockchain.indexOf(block), 1);
        let cb = new Block(0, Date.now(), "0");
        global.shivanshCoin.blockchain.push(cb);
    }
}
console.log("Current blockchain is:", global.shivanshCoin);
console.log("\nPerforming Transactions:");
console.log("Current balance of address ", address2, "is:" + shivanshCoin.getBalanceOfAddress(address2));
console.log("Current balance of address ", address1, "is:" + shivanshCoin.getBalanceOfAddress(address1));




