import Expenses from "./components/Expenses/Expenses";

function App() {

  //Below we have an array expense of the different types of expenses
  const expense = [
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

  return (
    <div>
      <h2>Let's get started!</h2> {/* So small starting letter indicate that these are the basic html elements */}

      {/* Below we have the expenses component which has other components inherited inside it*/}
      <Expenses items={expense} />

    </div>
  );
}

export default App;
