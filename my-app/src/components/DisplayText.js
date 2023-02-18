function DisplayText(setText, text){

    return(
    <div>
        <textarea className="form-control w-100 mt-5" rows="30" value={text} onChange={(e) => setText(e.target.value)}></textarea>
    </div>
    )
}
export default DisplayText;