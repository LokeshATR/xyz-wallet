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
          environmentId: "1c52044f-69f1-437b-b8b3-05c42ab5307d",
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