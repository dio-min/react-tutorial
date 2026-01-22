import './delete.css'

function DeleteStudent(){
    return(
        <>
        <h1>Delete Student</h1>
        <form>
            <p>ID Number</p>
            <div className="delete">
                <div className='id'>
                    <input type="text" placeholder="ID"/>
                </div>
                <button type="submit">Delete</button>
                
            </div>
        </form>
        
        </>
    )
}


export default DeleteStudent