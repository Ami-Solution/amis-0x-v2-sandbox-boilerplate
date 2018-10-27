import * as React from 'react';

interface Props {}

export class InstallMetamask extends React.Component<Props, {}> {
    public render(): React.ReactNode {
        return (
            <div>
                <h1> Please install Metamask or Trustwalletapp</h1>
                <a
                    href="https://metamask.io/"
                    target="_blank"
                    title="Metamask or TrustWalletApp is required to use the 0x Sandbox. Click to download."
                >
                    <img
                        src="https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png"
                        width="200px"
                        alt="Download Metamask"
                    />
                </a>
                <a
                    href="https://trustwalletapp.com/"
                    target="_blank"
                    title="TrustWalletApp or Metamask is required to use the 0x Sandbox. Click to download."
                >
                    <img
                        src="https://github.com/TrustWallet/dapps-browser/blob/master/public/logo_solid_square_blue.png"
                        width="200px"
                        alt="Download TrustWalletApp"
                    />
                </a>
                <p> Once metamask / TrustWalletApp is installed, please refresh this page </p>
            </div>
        );
    }
}
