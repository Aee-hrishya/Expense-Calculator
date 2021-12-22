import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//Below we have an array expense of the different types of expenses
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },

  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {


  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);//Passing the initial array DUMMY_EXPENSES as the intial state so that we can add items to it using the useState

  const addExpenseHandler = expense => {

    //Below we use the function inside the setExpenses as our new state is dependent on the previous state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Below we have the expenses component which has other components inherited inside it*/}
      <Expenses items={expenses} /> {/*Passing the expenses state as prop to the Expenses component */}

    </div>
  );
};

export default App;
