import { 
    convertCosmosNFT2ERC,
    convertERC2CosmosNFT,
    uptick2Iris,
    iris2Uptick
  } from "./wallet";

const uptickUrl = "http://52.74.190.214:8081/uptick";

window.onload = async () => {


    if (!window.getOfflineSigner || !window.keplr) {
        alert("Please install keplr extension");
    } else {
        if (window.keplr.experimentalSuggestChain) {
            try {

                let re = await window.keplr.experimentalSuggestChain(
                    {
                    // Chain-id of the Osmosis chain.
                    chainId: "uptick_7000-1",
                    chainName: "Uptick Testnet1",
                      rpc: uptickUrl,
                    rest: "http://52.74.190.214:1317",
                    stakeCurrency: {
                        coinDenom: "uptick",
                        coinMinimalDenom: "auptick",
                        coinDecimals: 18,
                    },
                    bip44: {
                        coinType: 60,
                    },
                    bech32Config: {
                        bech32PrefixAccAddr: 'uptick',
                        bech32PrefixAccPub: 'uptickpub',
                        bech32PrefixValAddr: 'uptickvaloper',
                        bech32PrefixValPub: 'uptickvaloperpub',
                        bech32PrefixConsAddr: 'uptickvalcons',
                        bech32PrefixConsPub: 'uptickvalconspub',
                    },
                    currencies: [{
                        coinDenom: "UPTICK",
                        coinMinimalDenom: "auptick",
                        coinDecimals: 18,
                    }],
                    feeCurrencies: [{
                        coinDenom: "UPTICK",
                        coinMinimalDenom: "auptick",
                        coinDecimals: 18,
                    }],
                    coinType: 60,
                     gasPriceStep: {
                        low: 10000000000,
                        average: 25000000000,
                        high: 40000000000
                    },
                    features:['ibc-transfer','ibc-go','eth-address-gen','eth-key-sign']
                });

                console.log("xxl 001 ",re);
            } catch {
                alert("Failed to suggest the chain");
            }
        } else {
            alert("Please use the recent version of keplr extension");
        }
    }

    const chainId = "uptick_7000-1";

    await window.keplr.enable(chainId);

    const offlineSigner = window.getOfflineSigner(chainId);
    const accounts = await offlineSigner.getAccounts();
    console.log("xxl : " + accounts.address);
    document.getElementById("address").append(accounts[0].address);
};


document.sendForm.iris2Uptick = async () => {

    debugger;
    let tokenIdsList =[]

    let typeUrl =  document.getElementById('typeUrl1').value
    let port =  document.getElementById('port1').value
    let channel =  document.getElementById('channel1').value

    let classId =  document.getElementById('classId1').value
    let nftId =  document.getElementById('tokenIdsList1').value
    let sender =  document.getElementById('sender1').value
    let receiver =  document.getElementById('receiver1').value
    let memo =  document.getElementById('memo1').value
    tokenIdsList.push(nftId)
    await iris2Uptick(typeUrl,port,channel,classId,tokenIdsList,sender,receiver,memo);
    console.log("iris2Uptick");
      
};


document.sendForm.convertCosmosNFT2ERC = async () => {
   let typeUrl =  document.getElementById('typeUrl2').value
   let classId =  document.getElementById('classId2').value
   let nftId =  document.getElementById('nftId2').value
   let sender =  document.getElementById('sender2').value
   let receiver =  document.getElementById('receiver2').value
   let contractAddress =  document.getElementById('contractAddress2').value
   let tokenId =  document.getElementById('tokenId2').value
    console.log("typeUrl",typeUrl);
    await convertCosmosNFT2ERC(typeUrl,classId,nftId,sender,receiver,contractAddress,tokenId);   
    console.log("xxl convertCosmosNFT2ERC 00");
    
};

document.sendForm.convertERC2CosmosNFT = async () => {
    debugger
    let typeUrl =  document.getElementById('typeUrl3').value
    let classId =  document.getElementById('classId3').value
    let nftId =  document.getElementById('nftId3').value
    let sender =  document.getElementById('sender3').value
    let receiver =  document.getElementById('receiver3').value
    let contractAddress =  document.getElementById('contractAddress3').value
    let tokenId =  document.getElementById('tokenId3').value

    await convertERC2CosmosNFT(typeUrl,classId,nftId,sender,receiver,contractAddress,tokenId);
    console.log("xxl convertERC2CosmosNFT 01");
      
};

document.sendForm.uptick2Iris = async () => {
    
    let tokenIdsList =[]
    let typeUrl =  document.getElementById('typeUrl4').value
    let port =  document.getElementById('port1').value
    let channel =  document.getElementById('channel4').value

    let classId =  document.getElementById('classId4').value
    let nftId =  document.getElementById('tokenIdsList4').value
    let sender =  document.getElementById('sender4').value
    let receiver =  document.getElementById('receiver4').value
    let memo =  document.getElementById('memo4').value
    tokenIdsList.push(nftId)

    await uptick2Iris(typeUrl,port,channel,classId,tokenIdsList,sender,receiver,memo);   
    console.log("xxl uptick2Iris 02");
    
};


