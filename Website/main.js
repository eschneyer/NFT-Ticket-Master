window.web3 = new Web3(window.ethereum);
let accounts;
web3.eth.getAccounts().then((e) => (accounts = e));
const purchaseButton = document.getElementById("purchase");
purchaseButton.addEventListener("click", async () => {
  if (window.ethereum) {
    window.ethereum.enable()
    const abi = await (await fetch("/abi.json")).json();
    const contractAddress = "0xd280FFb7e40B841AAB30FE2aB3DC24c32A4c6cdb";
    const contract = new web3.eth.Contract(abi.abi, contractAddress);
    const encodedABI = contract.methods.mintNFT(accounts[0]).encodeABI();
    const transaction = {
      from: accounts[0],
      to: contractAddress,
      value: 6000000000000000,
      gas: 2000000,
      data: encodedABI,
    };
    web3.eth.sendTransaction(transaction, (err, result) => {
      console.log(err, result);
    });
  }
});

const generateSignMsg = (domain, address, statement, uri, version, nonce) => {
  return `${domain} wants you to sign in with your Ethereum account:
${address}
${statement}
Issued At: ${new Date().toISOString()}`;
};

const walletButton = document.getElementById("wallet-send");
walletButton.addEventListener("click", async () => {
  const msg = generateSignMsg(window.location.href, accounts[0],"NFT Ticketing System")
  const signed = await web3.eth.personal.sign(msg,accounts[0]);
  window.open(`exp://exp.host/@emschneyer/stuyhacks-app+5Efd_dmrIN?title=NFT%20Ticket&desc=This%20is%20your%20Ticket&signed=${signed}&original=${btoa(msg)}`)
});
