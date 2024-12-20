import { sendFaucet, askQuestion, readWallets } from "./utils/script.js";
import banner from "./utils/banner.js"
import log from "./utils/logger.js"

async function faucet() {
    log.warn(banner)
    const wallets = readWallets();
    log.info(`Found ${wallets.length} existing wallets...`);
    const faucetAmount = await askQuestion('How Many ETH You Want To Send to each address, example 0.0003 : ')
    const pvKey = await askQuestion('Please enter your private key that has ETH on Base Mainnet\nThis wallet will be used to send a fund to each address : ');

    for (let i = 0; i < wallets.length; i++) {
        const wallet = wallets[i];

        log.info(`=== Starting Sending Fund to wallet ${wallet.address} ===`);
        await sendFaucet(faucetAmount, wallet.address, pvKey);
    }
}

faucet()
