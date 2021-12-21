import {useState} from "react"; //Importing the  useState which is basically a react hook and it tells react that we want to consider the changes that are happening in our webpage. every react hook starts with the keyword "use"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"; //Importing the css file


//Now we pass props here as parameter so that we can access the key value pairs inside it and make use of them
const ExpenseItem = (props) => {

    //We declared the useState here as it is a function and its very important that the useState always needs to be mentioned in the component function directly not outside it or inside a nested function
    const [title, setTitle] = useState(props.title) //The useState always returns an array with 2 elements here the first element is the current state value and then setTitle which is the function that will be used to change the same

    //Below is the clickhandler function which is the function inside the onClick prop
    const clickHandler = () => {
        setTitle("Wohoo!!!"); //here we are calling the setTitle function to update the value after our state changes
        console.log("clicked!!!");
    };

    return (

        <Card className="expense-item"> {/* here Card is the custom component wrapper which is used to wrap the other components so that we can apply styles to them which are repetitive for some of them */}
            {/* We can add data dynamically by using the curly braces */}
            {/* Now we can separate this date divs and create a separate component for this and then use them here, so we created the ExpenseDate component */}
            <ExpenseDate date={props.date} /> {/* we can do this when the component we are using has no text between it */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click here</button> {/*every prop that starts with an on is an event in React and we can use it to add event listeners to our code */}
        </Card>
    );
}

export default ExpenseItem; //We are exporting this so that we can use it in different files and not just this file