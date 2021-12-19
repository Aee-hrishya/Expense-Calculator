import ExpenseItem from "./components/ExpenseItems";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2> {/* So small starting letter indicate that these are the basic html elements */}
      <ExpenseItem></ExpenseItem> {/* Capital letters indicate that we ae using the custom made react components */}
    </div>
  );
}

export default App;
