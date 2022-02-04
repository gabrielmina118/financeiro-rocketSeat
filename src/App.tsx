import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/newTransactionModal";
import ReactStateProvider from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";



export function App() {

  const [isNewTransctionModal, setIsNewTransctionModal] = useState(false)

  function handleOpenModalTransaction() {
    setIsNewTransctionModal(true)
  }

  function handleCloseModalTransaction() {
    setIsNewTransctionModal(false)
  }


  return (
    <ReactStateProvider>
      <Header
        onOpenModalTransaction={handleOpenModalTransaction}
      />
      <TransactionModal
        isNewTransctionModal={isNewTransctionModal}
        handleCloseModalTransaction={handleCloseModalTransaction}
      />
      <Dashboard />
      <GlobalStyle />
    </ReactStateProvider>
  );
}
