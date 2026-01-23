import { TextField } from '@mui/material'
import './classes.css'

function Classes(){
    return(
        <>
        <h1>View Classes</h1>
        <form>
            <p>Subject Code</p>
            <div className="delete">
                <div className='id'>
                    <input type="text" placeholder="Code"/>
                </div>
                <button type="submit">Search</button>
                
            </div>
        </form>
        
        </>
    )
}


export default Classes