import { ethers } from "ethers";
import * as fs from "fs"

const swth_token_contract = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"

const filePath = "../problem4/swth.json"
const abiString = fs.readFileSync(filePath, 'utf8')
const abiData = JSON.parse(abiString)

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
const contract = new ethers.Contract(swth_token_contract, abiData, provider);
const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"
]

async function getAmount(address: string[]) {
    for (let i = 0; i < address.length; i++) {
        const balance = await contract.balanceOf(address[i])
        console.log(address[i], ethers.utils.formatUnits(balance, 0))
    }
}

getAmount(addresses)

