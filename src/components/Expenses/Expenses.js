import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2022");
    const filterChangeHandler = (selectedYear) => {

        setFilteredYear(selectedYear);

    };

    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {/*Below we dynamically added the items from the expense array, so that whenever we add something to the expense array it gets allocated automatically to the ExpenseItem component. We do this using the map method of the array and we do this so that we dont have to manually assign for every expense added on the web app */}
            {props.items.map((expense) => {
                return <ExpenseItem
                    key={expense.id} /* We use the key(is a built in prop) prop to help react understand that each ExpenseItem is unique and has an ID so that it does not return bugs, we can use the key prop in any custom component or JSX element */
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </Card>

    );
}

export default Expenses;