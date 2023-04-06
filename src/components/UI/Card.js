import './Card.css';
const Card=(props)=>{
    const classes='card' + props.className;
    return <div className={classes}>{props.className}</div>;
}
export default Card;