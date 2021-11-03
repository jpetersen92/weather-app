const UserInput = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setUserInput(true)
    }


    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="city" name="city">What City would you like weather for?</label>
            <div className="inputContainer">
            <input type="text" name="city" onChange={(e) => props.setInput(e.target.value)}/>
            <button type="submit" value="Submit">Submit</button>
            </div>
        </form>
    )
}

export default UserInput