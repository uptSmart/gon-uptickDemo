
// import {
//     SigningStargateClient,
// } from '../uptickjs/packages/stargate'
import {
    SigningStargateClient,
} from '@uptsmart/stargate'

import { 
    convertCosmosNFT2ERC,
    convertERC2CosmosNFT,
    uptick2Iris,
    iris2Uptick
  } from "./wallet";

const uptickUrl = "http://localhost:8081/uptick";

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
                    chainName: "uptck_01",
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

document.sendForm.sendCoin = () => {
    let recipient = "uptick103rx84uqa7n4mtmz8f88n4g9m7973rxutrtn7d";
    let amount = 1;
    // let memo = document.sendForm.memo.value;

    amount = parseFloat(amount);
    if (isNaN(amount)) {
        alert("Invalid amount");
        return false;
    }

    amount *= 1000000000000000000;
    amount = Math.floor(amount);

    (async () => {
        // See above.
        const chainId = "uptick_7000-1";
        await window.keplr.enable(chainId);
        const offlineSigner = window.getOfflineSigner(chainId);
        const accounts = await offlineSigner.getAccounts();

        const client = await SigningStargateClient.connectWithSigner(
            uptickUrl,
            offlineSigner
        )

        const amountFinal = {
            denom: 'auptick',
            amount: amount.toString(),
        }
        const fee = {
            amount: [{
                denom: 'auptick',
                amount: '5000',
            }, ],
            gas: '200000',
        }

        console.log("xxl sendTokens",[
            accounts[0].address, recipient, [amountFinal], fee, ""
        ]);

        const result = await client.sendTokens(accounts[0].address, recipient, [amountFinal], fee, "")
        console.log("xxl result ",result);
        // assertIsBroadcastTxSuccess(result)

        if (result.code !== undefined &&
            result.code !== 0) {
            console.log("Failed to send tx: " + result.log || result.rawLog);
        } else {
            console.log("Succeed to send tx:" + result.transactionHash);
        }


    })();

    return false;
};


document.sendForm.convertCosmosNFT2ERC = async () => {
   let classId =  document.getElementById('classId').value
   let nftId =  document.getElementById('nftId').value
   let sender =  document.getElementById('sender').value
   let receiver =  document.getElementById('receiver').value
   let contractAddress =  document.getElementById('contractAddress').value
   let tokenId =  document.getElementById('tokenId').value
    console.log("typeUrl",typeUrl);
    await convertCosmosNFT2ERC(classId,nftId,sender,receiver,contractAddress,tokenId);   
    console.log("xxl convertCosmosNFT2ERC 00");
    
};

document.sendForm.convertERC2CosmosNFT = async () => {
    let classId =  document.getElementById('classId').value
    let nftId =  document.getElementById('nftId').value
    let sender =  document.getElementById('sender').value
    let receiver =  document.getElementById('receiver').value
    let contractAddress =  document.getElementById('contractAddress').value
    let tokenId =  document.getElementById('tokenId').value

    await convertERC2CosmosNFT(classId,nftId,sender,receiver,contractAddress,tokenId);
    console.log("xxl convertERC2CosmosNFT 01");
      
};


document.sendForm.uptick2Iris = async () => {
    let tokenIdsList =[]
    let classId =  document.getElementById('classId').value
    let nftId =  document.getElementById('tokenIdsList').value
    let sender =  document.getElementById('sender').value
    let receiver =  document.getElementById('receiver').value
    let memo =  document.getElementById('memo').value
    tokenIdsList.push(nftId)

    await uptick2Iris(classId,tokenIdsList,sender,receiver,memo);   
    console.log("xxl uptick2Iris 02");
    
};

document.sendForm.iris2Uptick = async () => {
    let tokenIdsList =[]
    let classId =  document.getElementById('classId').value
    let nftId =  document.getElementById('tokenIdsList').value
    let sender =  document.getElementById('sender').value
    let receiver =  document.getElementById('receiver').value
    let memo =  document.getElementById('memo').value
    tokenIdsList.push(nftId)
    await iris2Uptick(classId,tokenIdsList,sender,receiver,memo);
    console.log("xxl iris2Uptick 03");
      
};



