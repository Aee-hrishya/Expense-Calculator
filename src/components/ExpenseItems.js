import "./ExpenseItem.css"; //Importing the css file

function ExpenseItem (){
    //Below is some basic javascript to demonstrate how data can be added dynamically
    const expenseDate = new Date();
    const expenseTitle = "Car Insurance";
    const expenseAmount = 14000;
    
    return(

        <div className="expense-item">
            {/* We can add data dynamically by using the curly braces */}
            <div>{expenseDate.toDateString(12-19-2021)}</div>  
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>

        </div>
    );
}

export default ExpenseItem; //We are exporting this so that we can use it in different files and not just this file