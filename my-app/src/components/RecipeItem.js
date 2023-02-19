function RecipeItem(props){
    return(
        <div>
            <div className = "RecipeItem">

                <div className = "itemDesc">
                <img className = "recipePicture" src={props.picture} alt="picture" />

                <h1>{props.name}</h1>

                <p>Cook Date: {props.date}</p>

                <div>
                    <p className = "dueDate"> {props.due}</p>
                </div>

                </div>
            </div>
        </div>
    )
}
export default RecipeItem;