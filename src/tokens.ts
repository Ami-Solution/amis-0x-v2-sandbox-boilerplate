export const TOKENS = {
    ZRX: {
        name: '0x Protocol Token',
        decimals: 18,
        symbol: 'ZRX',
        isTradeable: true,
        isMintable: true,
        image: 'https://0xproject.com/images/token_icons/ZRX.png',
    },
    AMIS: {
        name: 'AMIS',
        decimals: 9,
        symbol: 'AMIS',
        isTradeable: true,
        isMintable: false,
        image: 'https://raw.githubusercontent.com/amisolution/ERC20-AMIS/master/amis-logo3.png',
    },
    MKR: {
        name: 'Maker DAO',
        decimals: 18,
        symbol: 'MKR',
        isTradeable: true,
        isMintable: true,
        image: 'https://0xproject.com/images/token_icons/MKR.png',
    },
    GNT: {
        name: 'Golem Network Token',
        decimals: 18,
        symbol: 'GNT',
        isTradeable: true,
        isMintable: true,
        image: 'https://0xproject.com/images/token_icons/GNT.png',
    },
    REP: {
        name: 'Augur Reputation Token',
        decimals: 18,
        symbol: 'REP',
        isTradeable: true,
        isMintable: true,
        image: 'https://0xproject.com/images/token_icons/REP.png',
    },
    WETH: {
        name: 'Wrapped ETH',
        decimals: 18,
        symbol: 'WETH',
        isTradeable: true,
        isMintable: false,
        image: 'https://0xproject.com/images/token_icons/WETH.png',
    },
};
export const ETHER_TOKEN: Token = {
    name: 'Ether',
    address: '0x0',
    decimals: 18,
    symbol: 'ETH',
    isTradeable: false,
    isMintable: false,
    image: 'https://0xproject.com/images/ether.png',
};
export const TOKENS_BY_NETWORK: { [networkId: number]: { [tokenSymbol: string]: Token } } = {
    1: {
        ZRX: {
            ...TOKENS.ZRX,
            address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        },
        AMIS: {
            ...TOKENS.AMIS,
            address: '0x949bEd886c739f1A3273629b3320db0C5024c719',
        },
        MKR: {
            ...TOKENS.MKR,
            address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        },
        GNT: {
            ...TOKENS.GNT,
            address: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
        },
        REP: {
            ...TOKENS.REP,
            address: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
        },
        WETH: {
            ...TOKENS.WETH,
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        },
    },
    3: {
        ZRX: {
            ...TOKENS.ZRX,
            address: '0xff67881f8d12f372d91baae9752eb3631ff0ed00',
        },
        AMIS: {
            ...TOKENS.AMIS,
            address: '0x949bEd886c739f1A3273629b3320db0C5024c719',
        },
        MKR: {
            ...TOKENS.MKR,
            address: '0x06732516acd125b6e83c127752ed5f027e1b276e',
        },
        GNT: {
            ...TOKENS.GNT,
            address: '0x7f8acc55a359ca4517c30510566ac35b800f7cac',
        },
        REP: {
            ...TOKENS.REP,
            address: '0xb0b443fe0e8a04c4c85e8fda9c5c1ccc057d6653',
        },
        WETH: {
            ...TOKENS.WETH,
            address: '0xc778417e063141139fce010982780140aa0cd5ab',
        },
    },
    42: {
        ZRX: {
            ...TOKENS.ZRX,
            address: '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa',
        },
        AMIS: {
            ...TOKENS.AMIS,
            address: '0x7161f09a6ae81b546bebc04b24629c4f3dad746f',
        },
        MKR: {
            ...TOKENS.MKR,
            address: '0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3',
        },
        GNT: {
            ...TOKENS.GNT,
            address: '0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623',
        },
        REP: {
            ...TOKENS.REP,
            address: '0x8cb3971b8eb709c14616bd556ff6683019e90d9c',
        },
        WETH: {
            ...TOKENS.WETH,
            address: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        },
    },
};
