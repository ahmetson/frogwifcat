import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.SEPOLIA_V2_TESTNET,
    contractName: 'WEF',
}

const lineaTestnetContract: OmniPointHardhat = {
    eid: EndpointId.LINEASEP_V2_TESTNET,
    contractName: 'WEF',
}

const baseTestnetContract: OmniPointHardhat = {
    eid: EndpointId.BASESEP_V2_TESTNET,
    contractName: 'WEF',
}

const ethereumContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'WEF',
}

const lineaContract: OmniPointHardhat = {
    eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
    contractName: 'WEF'
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: lineaTestnetContract,
        },
        {
            contract: baseTestnetContract,
        },
        {
            contract: sepoliaContract
        },
        {
            contract: ethereumContract,
        },
        {
            contract: lineaContract
        }
    ],
    connections: [
        {
            from: lineaTestnetContract,
            to: sepoliaContract,
        },
        {
            from: sepoliaContract,
            to: lineaTestnetContract,
        },
        {
            from: lineaTestnetContract,
            to: baseTestnetContract,
        },
        {
            from: sepoliaContract,
            to: baseTestnetContract,
        },
        {
            from: baseTestnetContract,
            to: sepoliaContract,
        },
        {
            from: baseTestnetContract,
            to: lineaTestnetContract,
        },
        //////////////////////////////////////
        // Mainnet
        /////////////////////////////////////
        {
            from: lineaContract,
            to: ethereumContract,
        },
        {
            from: ethereumContract,
            to: lineaContract
        }
    ],
}

export default config
