import {
    SigningStargateClient,
} from '@uptsmart/stargate'


const chainId = "uptick_7000-1";
const irisChainId = "gon-irishub-1";
const uptickUrl = "http://52.74.190.214:8081/uptick";
const irisUrl = "http://52.74.190.214:8081/iris";

export async function iris2Uptick(typeUrl,port,channel,classId,tokenIdsList,sender,receiver,memo) {

    //
    let account = await getAccountInfo("gon-irishub-1");
    console.log("account address is : ",account.bech32Address);

    let timespan = (Date.now() + 60000) * 1000000;
    let msg =  {
        typeUrl:typeUrl,
        value:[
            port,channel,classId,tokenIdsList,sender,receiver,[0,0],timespan,memo
        ]
    }

    console.log(msg);

    const result = await sendMsgsTx(sender, [msg], 1000000, "0x1234",true);
    if(result.code == 0){
        alert("successful ! ");
    }
    return result;

}


export async function convertCosmosNFT2ERC(typeUrl,classId,nftId,sender,receiver,contractAddress,tokenId) {

    //
    let account = await getAccountInfo();
    console.log("xxl convertCosmosNFT2ERC 00 ",account.bech32Address);
    console.log('wwww',typeUrl,classId,nftId,sender,receiver,contractAddress,tokenId);

    // classId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    // nftId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    // receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    // sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    // contractAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    // tokenId: jspb.Message.getFieldWithDefault(msg, 6, "")
    let msg =  {
        typeUrl: typeUrl,
        value:[
            classId,nftId,receiver,sender,contractAddress,tokenId]
    }
    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    if(result.code == 0){
        alert("successful ! ");
        const logInfo = JSON.parse(result.rawLog)
        document.getElementById('contractAddress2').value = logInfo[0].events[0].attributes[4].value
        document.getElementById('tokenId2').value = logInfo[0].events[0].attributes[5].value
    }
    return result;


}
// await convertCosmosNFT2ERC(classId,nftId,sender,receiver,contractAddress,tokenId);   
export async function convertERC2CosmosNFT(typeUrl,classId,nftId,sender,receiver,contractAddress,tokenId) {
   
    //
    let account = await getAccountInfo();
    console.log("xxl convertERC2CosmosNFT 01 ",account.address);

    // contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    // tokenId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    // receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    // sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    // classId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    // nftId: jspb.Message.getFieldWithDefault(msg, 6, "")
    let msg =  {
        typeUrl:typeUrl,
        value:[
            contractAddress,
            tokenId,receiver,sender, classId,nftId]
    }

    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    if(result.code == 0){
        alert("successful ! ");
        const logInfo = JSON.parse(result.rawLog)
        console.log(logInfo);

        document.getElementById('classId3').value = logInfo[0].events[0].attributes[2].value
        document.getElementById('nftId3').value = logInfo[0].events[0].attributes[3].value


    }
    return result;

}

export async function uptick2Iris(typeUrl,port,channel,classId,tokenIdsList,sender,receiver,memo) {

    let account = await getAccountInfo();
    console.log("uptick2Iris 02 ",account.bech32Address);

    // sourcePort: jspb.Message.getFieldWithDefault(msg, 1, ""),
    // sourceChannel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    // classId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    // tokenIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    // sender: jspb.Message.getFieldWithDefault(msg, 5, ""),
    // receiver: jspb.Message.getFieldWithDefault(msg, 6, ""),
    // timeoutHeight: (f = msg.getTimeoutHeight()) && ibc_core_client_v1_client_pb.Height.toObject(includeInstance, f),
    // timeoutTimestamp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    // memo: jspb.Message.getFieldWithDefault(msg, 9, ""
    let timespan = (Date.now() + 60000) * 1000000;
    let msg =  {
        typeUrl:typeUrl,
        value:[
            port,channel,classId,tokenIdsList,sender,receiver,[0,0],timespan,memo
        ]
    }

    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    if(result.code == 0){
        alert("successful ! ");
    }
    return result;

}


async function getAccountInfo(pChainId="uptick_7000-1") {

    console.log("xxl getAccountInfo ",pChainId);
    debugger

    try {
        // keplr 检测
        await window.keplr.enable(pChainId);
        // get account
        const account = await window.keplr.getKey(pChainId);
        return account;
    } catch (error) {

    }
}

async function sendMsgsTx(address, msgs, amount, data,isIris=false) {



    let client,fee;

    if(isIris == false){
        fee = {
            amount: [{
                denom: 'auptick',
                amount: amount,
            }],
            gas: '10000000',
        };
        const offlineSigner = await window.getOfflineSigner(chainId);  

        client = await SigningStargateClient.connectWithSigner(
            uptickUrl,
            offlineSigner
        )
    }else{
        fee = {
            amount: [{
                denom: 'uiris',
                amount: amount,
            }],
            gas: '10000000',
        };

        const offlineSigner = await window.getOfflineSigner(irisChainId);  

        client = await SigningStargateClient.connectWithSigner(
            irisUrl,
            offlineSigner
        )

    }

    console.log("###xxl sendMsgsTx",[address, msgs, fee, data]);
    const result = await client.sendMsgsTx(address, msgs, fee, data);
    console.log("###xxl result",result);
    return result;



}
