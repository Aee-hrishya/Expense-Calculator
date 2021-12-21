import {useState} from "react";
import "./ExpenseForm.css";

//Creating the ExpenseForm component
const ExpenseForm = (props) => {

    //We can call multiple useStates in an component
    const [enteredTitle, setEnteredTitle] = useState("");//Initially the useState is empty

    const [enteredAmount, setEnteredAmount] = useState("");

    const [enteredDate, setEnteredDate] = useState("");

    //Now just like vanilla JS when we add the event listener, the function inside  it automatically gets the event(e) same thing happens in react
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    //submitHandler function to handle the onSubmit function
    const submitHandler = (e) => {

        //Now we want to gather all the different states that we have created and add them to an object
        const expenseData = {
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate) //creating a date object with the enteredDate

        };

        props.onSaveExpenseData(expenseData);//calling the onSaveExpenseData property here

        //Clearing the input fields after we receive the form submission
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        e.preventDefault();
    };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} /> {/*We use two way binding by settiing the value to entered value so that we can do some changes with it, two way binding is very useful whne working with form as it helps us to change the form inputs */}
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2021-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                    </div>
               </div>
               <div className="new-expense__actions">
                   <button type="submit">Add Expense</button>
               </div>
            </form>
        </div>
    );
};

export default ExpenseForm;