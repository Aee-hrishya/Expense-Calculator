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

    //Here we added the filter on the year so that only those expenses will be shown which were done on that year and others will be restricted we used the inbuilt filter method of arrays for this
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (

        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/*Below we dynamically added the items from the expense array, so that whenever we add something to the expense array it gets allocated automatically to the ExpenseItem component. We do this using the map method of the array and we do this so that we dont have to manually assign for every expense added on the web app, below we used the filteredExpenses to apply map as we want to map the filtered expenses*/}
            {/*Below we also added a conditional statement to check whether the expenses for the selected year are present or not and then we added what to do if not present, there are various ways to add conditionals this is one of them, also we use ternary operators as if statements and loops are not supported in JSX code */}
            {filteredExpenses.length === 0 ? <p>No expense here</p> : filteredExpenses.map((expense) => {

                return <ExpenseItem
                    key={expense.id} /* We use the key(is a built in prop) prop to help react understand that each ExpenseItem is unique and has an ID so that it does not return bugs, we can use the key prop in any custom component or JSX element (ALWAYS ADD THE KEY PROP WHEN MAPPING ELEMENTS SO THAT WE DONT GET BUGS) */
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}

        </Card>

    );
}

export default Expenses;