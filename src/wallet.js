
import {
    SigningStargateClient
} from '../uptickjs/packages/stargate'

// import {
//     SigningStargateClient,
// } from '@uptsmart/stargate'

// import { getRanHex } from "./utils/helper";
// import { coins } from "@cosmjs/stargate";

// const BigNumber = require('big-number');
// const md5 = require('md5');

const chainId = "uptick_7000-1";
const irisChainId = "gon-irishub-1";
const uptickUrl = "http://localhost:8081/uptick";
const irisUrl = "http://localhost:8081/iris";

//--
export async function convertCosmosNFT2ERC() {

    //
    let account = await getAccountInfo();
    console.log("xxl convertCosmosNFT2ERC 00 ",account.bech32Address);


    // classId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    // nftId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    // receiver: jspb.Message.getFieldWithDefault(msg, 3, ""),
    // sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    // contractAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    // tokenId: jspb.Message.getFieldWithDefault(msg, 6, "")
    let msg =  {
        typeUrl: "/uptick.erc721.v1.MsgConvertNFT",
        value:[
            "ibc/9100BFEBA58442DCC91E3B4D89E5E8D18E94946E0E3B77A6E32988DDE3A2B6AE",
            "id001","0x7bE11204fF8f57ce30C53CB695Ad66112b9Cd368",account.bech32Address, "",""]
    }

    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    return result;


}

export async function convertERC2CosmosNFT() {

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
        typeUrl: "/uptick.erc721.v1.MsgConvertERC721",
        value:[
            "0xa92ca1f63C993F2DD1Ec18209579E3b263fdB09c",
            "0x6964303031",account.bech32Address,"0x7bE11204fF8f57ce30C53CB695Ad66112b9Cd368", "",""]
    }

    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    return result;

}

export async function uptick2Iris() {

    let account = await getAccountInfo();
    console.log("xxl uptick2Iris 02 ",account.bech32Address);

    // sourcePort: jspb.Message.getFieldWithDefault(msg, 1, ""),
    // sourceChannel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    // classId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    // tokenIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    // sender: jspb.Message.getFieldWithDefault(msg, 5, ""),
    // receiver: jspb.Message.getFieldWithDefault(msg, 6, ""),
    // timeoutHeight: (f = msg.getTimeoutHeight()) && ibc_core_client_v1_client_pb.Height.toObject(includeInstance, f),
    // timeoutTimestamp: jspb.Message.getFieldWithDefault(msg, 8, 0),
    // memo: jspb.Message.getFieldWithDefault(msg, 9, "")


    let msg =  {
        typeUrl: "/ibc.applications.nft_transfer.v1.MsgTransfer",
        value:[
            "nft-transfer","channel-0",
            "ibc/9100BFEBA58442DCC91E3B4D89E5E8D18E94946E0E3B77A6E32988DDE3A2B6AE",["id001"],
            account.bech32Address,"iaa1m9l358xunhhwds0568za49mzhvuxx9uxkm567u",[1000,0],0,"test"
            ]
    }
    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234");
    return result;

}

export async function iris2Uptick() {

    //
    let account = await getAccountInfo("gon-irishub-1");
    console.log("xxl iris2Uptick 03 ",account.bech32Address);

    let msg =  {
        typeUrl: "/ibc.applications.nft_transfer.v1.MsgTransfer",
        value:[
            "nft-transfer","channel-62",
            "irisDemon14",["id001"],
            account.bech32Address,"uptick1ehh5503n2rhpz8evfqpsa62kfqc58c5g02kjhd",[1000,0],0,"test"
            ]
    }

    const result = await sendMsgsTx(account.bech32Address, [msg], 1000000, "0x1234",true);
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