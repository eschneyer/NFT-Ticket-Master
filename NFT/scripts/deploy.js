async function main() {
    const NFTTicket = await ethers.getContractFactory("NFTTicket")
  
    // Start deployment, returning a promise that resolves to a contract object
    const ticket = await NFTTicket.deploy()
    await ticket.deployed()
    console.log("Contract deployed to address:", ticket.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  
