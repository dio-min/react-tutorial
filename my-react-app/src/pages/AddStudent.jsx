import "./addStudent.css"


function AddStudent(){

    
    
    return(
        <>
        <h1>Add Student</h1>
        <div className="scrollable-component">
            
            <form>
                
                <div>
                    <p>Name</p>
                    <div className="name">
                        <input type="text" placeholder="Firstname" />
                        <input type="text" placeholder="Lastname" />
                    </div>                   
                </div>


                <div className="email-id">
                    <div>
                        <p>ID Number</p>
                        <input type="text" placeholder="ID" />
                    </div>
                    <div className="email">
                        <p>Corporate Email</p>
                        <input type="email" placeholder="Corporate Email"  />
                    </div>
                </div>


                <div className="school-course">
                    <p>School / Course</p>
                    <select name="school" id="school">
                        <option value="" disabled selected>Select</option>
                        <option value="sch1">School of Engineering, Architecture, and Information Technology</option>
                        <option value="sch2">School of Health and Natural Sciences</option>
                        <option value="sch3">School of Accountancy and Business</option>
                        <option value="sch4">School of Teacher Education and Humanities</option>
                        <option value="sch5">School of Graduate Studies</option>
                    </select>
                    <input type="text" placeholder="Course" className="course"/>
                </div>


                <button type="submit">Add Student</button>
            </form>
        </div>
            
        </>
    );
   
}


export default AddStudent
