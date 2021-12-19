import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"; //Importing the css file

//Now we pass props here as parameter so that we can access the key value pairs inside it and make use of them
function ExpenseItem(props) {

    return (

        <div className="expense-item">
            {/* We can add data dynamically by using the curly braces */}
            {/* Now we can separate this date divs and create a separate component for this and then use them here, so we created the ExpenseDate component */}
            <ExpenseDate date={props.date} /> {/* we can do this when the component we are using has no text between it */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>

        </div>
    );
}

export default ExpenseItem; //We are exporting this so that we can use it in different files and not just this file