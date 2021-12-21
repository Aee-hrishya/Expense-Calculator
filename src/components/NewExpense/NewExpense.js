import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //Here we use the spread operator to pick individual key value pairs from the earlier object and add them to this new object.
            id: Math.random().toString() //Adding a random id
        };
        
        props.onAddExpense(expenseData);// Calling the onAddExpense function here so that we can use it to transfer data to parent component
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/*adding our custom prop onSaveExpenseData to get the data from the child component */}
        </div>
    );

}

export default NewExpense;