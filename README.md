**Abstract**

In this project, to overcome the issues of double-spending attacks in the existing
cryptocurrency blockchain systems, network observers are used that can track anomalous
transactions performed without authorization. Additionally, to notify the sender and receiver
blocks about the unauthorized transaction, a peer alert system is designed such that the
message is passed from the fraudulent node to the sender and receiver nodes, which are then
disconnected.

Keywords: Blockchain, Crypto, Network Observers, Peer Alert System

**Introduction**

Cryptocurrency Blockchains are one of the most popular technologies in use today. It has
revolutionized the digital payments industry owing to its easy accessibility and
management. Moreover, it also involves a significant deal of cloud computing as a
rendition of physical money that we use in the actual world.
However, with such cutting-edge technology comes the drawback of security assurance.
As user credentials are available on the fly, if the necessary authorization measures are not
implemented and fraudulent activities are not monitored, there may be huge monetary
losses. In the digital world, it becomes much easier to get access to information than would
normally be possible. Thus, third-party services and hackers can tap into such blockchain
networks and wreak havoc.
Many people are turning to digital modes of payment, which only makes them more
vulnerable to such attacks at the cost of ease of usage. Therefore, it is the need of the hour
to come up with techniques that can not only track such activities but potentially stop them,
such that users can feel confident in performing transactions via cryptocurrency.
Network Observers are systems that log the frequency of transactions occurring between
blocks, given a sender’s current balance. Through this they can conclude whether double
spending attacks are taking place within the network, and the involved transactions are
terminated, along with the sender being temporarily suspended. The network observers then
notify the peer alert systems, which disconnects neighbouring blocks from the blocks that
were participating in the transaction, while looking for alternate routes to complete the 
rest of the transactions. Using these two methods, a higher level of security can be adopted 
within the blockchain, which is the ultimate aim of this project.

**Motivation and Objective**
This paper is motivated by the goal to create a blockchain that can withstand double-spending
attacks. This way, honest miners will be able to safely and securely exchange
cryptocurrency. There currently lack valuable prevention methods in the network
therefore we designed a system with network observers and a peer alert system to combat
double spending attacks on the blockchain system and inform the sender as well as
receiver in the case.
The objective of this project is to create a blockchain system with network observers to
check if any double spending attack has occurred and if detected, to inform the both
parties of the same.

**Existing Systems**

Base Paper: Double-spending Prevention for zero-confirmation transactions

**Problem Addressed:**
Double spending, or using a currency token more than once to obtain any good and services.
Double spending is one of the major security problems that digital currencies ought to
manage. Double-spending occurs when a blockchain network is disrupted and cryptocurrency
is stolen. The attacker would try to send a replica of the currency transaction attempt to make
it look legitimate, or might erase the transaction altogether. Although it isn't common,
double-spending does occur.

**Methodology:**
The proposed mechanism discourages double-spending attackers by creating a special kind of
output that discloses the private key if by chance it’s a double-spending attempt. Any
network user may act as an observer and procure an award by detecting double- spending
attempts. The money the observer receives is that the fine that the attacker pays as
punishment for having tried to double-spend a transaction.

**Advantages:**
• The proposed scheme discourages double-spending attackers by making them pay a
fine for their attempts.
• Protects both the sender and receiver’s credentials.

**Limitation:**
• Risk identification of merchants with transactions is not yet done.
