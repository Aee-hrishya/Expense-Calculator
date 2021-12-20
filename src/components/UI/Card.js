import "./Card.css";

const Card = (props) => {

    const classes = "card " + props.className; //Here we tweaked our classname a little bit as we wanted to also add the styling that the other components have so we concatenated it to our own class and made a custom class so that we can use it.

    return(
        <div className={classes}>{props.children}</div> // props.children is a special prop(It allows you to create wrapper components) that react has and it is used to create wrapper components and now we can use this component to to wrap some JSX code inside it.Basically props.children is everything that the component has inside its opening and closing tags, so we can use them without repeating ourselves here in this case we just apply common styles to them
    );
}

export default Card;