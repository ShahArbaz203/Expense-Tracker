
import './App.css';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import { GlobalProvider } from './Components/GlobalState';
import Header from './Components/Header';
import IncomeExpens from './Components/IncomeExpens';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div className="App">
    <GlobalProvider>
   <Header/>
   <div className="container">
    <Balance/>
    <IncomeExpens/>
    <TransactionList/>
    <AddTransaction/>
     </div>
   </GlobalProvider>
    </div>
  );
}

export default App;
