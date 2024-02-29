import "./App.css";

import {
  DynamicWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthersExtension } from "@dynamic-labs/ethers-v5";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { AlgorandWalletConnectors } from "@dynamic-labs/algorand";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { FlowWalletConnectors } from "@dynamic-labs/flow";
import { StarknetWalletConnectors } from "@dynamic-labs/starknet";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
import { MagicWalletConnectors } from "@dynamic-labs/magic";
import { BloctoEvmWalletConnectors } from "@dynamic-labs/blocto-evm";

function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
          walletConnectorExtensions: [EthersExtension],
          walletConnectors: [
            EthereumWalletConnectors,
            AlgorandWalletConnectors,
            SolanaWalletConnectors,
            FlowWalletConnectors,
            StarknetWalletConnectors,
            CosmosWalletConnectors,
            MagicWalletConnectors,
            BloctoEvmWalletConnectors,
          ],
        }}
      >
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
}

export default App;
