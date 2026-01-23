import "./Student.css"


function Student(){

    return(
        <>
        <h1>Add Student</h1>
        <div className="scrollable-component">
            
            <form>
                
                <div>
                    <p>Name</p>
                    <div className="name">
                        <input type="text" placeholder="Firstname" id="studfname"/>
                        <input type="text" placeholder="Lastname"  id="studlname"/>
                    </div>                   
                </div>


                <div className="email-id">
                    <div>
                        <p>ID Number</p>
                        <input type="text" placeholder="ID" id="studid"/>
                    </div>
                    <div className="email">
                        <p>Corporate Email</p>
                        <input type="email" placeholder="Corporate Email" id="studemail"/>
                    </div>
                </div>


                <div className="school-course">
                    <p>School / Course</p>
                    <select name="school" id="school">
                        <option value="" disabled selected>Select</option>
                        <option value="SEAIT">School of Engineering, Architecture, and Information Technology</option>
                        <option value="SHANS">School of Health and Natural Sciences</option>
                        <option value="SAB">School of Accountancy and Business</option>
                        <option value="STEH">School of Teacher Education and Humanities</option>
                        <option value="SGS">School of Graduate Studies</option>
                    </select>
                    <input type="text" placeholder="Course" className="course" id="studcourse"/>
                </div>
                
                <div>
                    <p>Subject Code</p>
                    <input type="text" placeholder="Code" id="studcode" />
                </div>


                <button type="submit" onClick={handleSubmit}>Add Student</button>
            </form>
        </div>
            
        </>
    );
}

    function handleSubmit(event){
        let fname = document.getElementById("studfname").value;
        let lname = document.getElementById("studlname").value;
        let fullname = fname + " " + lname;
        let id = document.getElementById("studid").value;
        let email = document.getElementById("studemail").value;
        let school = document.getElementById("school").value;
        let course = document.getElementById("studcourse").value;
        let code = document.getElementById("studcode").value;

        alert("Student Added:\n" +
              "Name: " +fullname + "\n" +
              "ID Number: " + id + "\n" +
              "Corporate Email: " + email +  "\n" +
              "School: " + school + "\n" +
              "Course: " + course + "\n" +
              "Subject Code: " + code
        );
}


export default Student
