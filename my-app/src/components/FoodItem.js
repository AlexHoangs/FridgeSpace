function FoodItem(props){
    return(
    <div>
        <div className = "foodItem">

            <div className = "itemDesc">
            <img className = "foodPicture" src={props.picture} alt="picture" />

            <h1>{props.name}</h1>

            <p>Purchase Date: {props.date}</p>

            <div>
                <p className = "dueDate"> {props.due}</p>
            </div>

            </div>
        </div>
    </div>
    )
}
export default FoodItem;