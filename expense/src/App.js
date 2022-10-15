
import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpens from './Components/IncomeExpens';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div className="App">
   <Header/>
   <div className="container">
    <Balance/>
    <IncomeExpens/>
    <TransactionList/>
   </div>
    </div>
  );
}

export default App;
