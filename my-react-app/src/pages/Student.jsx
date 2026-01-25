import "./student.css";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#292974",
    color: theme.palette.common.white,
    fontSize: 12,
    fontFamily: "dotGothic16"

    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    fontFamily: "dotGothic16"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function Student() {
  const [rows, setRows] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const fullname =document.getElementById("studfname").value +" " +document.getElementById("studlname").value;
    const idnumber = document.getElementById("studid").value;
    const email = document.getElementById("studemail").value;
    const school = document.getElementById("school").value;
    const course = document.getElementById("studcourse").value;
    const subjectCode = document.getElementById("studcode").value;

    if (fullname === " " || idnumber === "" || email === "" || school === "" || course === "" || subjectCode === "") {
      alert("Please fill in all fields.");
      return;
    }

    const newRow = {
      sid: idnumber,
      sfullname: fullname,
      semail: email,
      sschool: school,
      scourse: course,
      subjectCode: subjectCode,
    };

    setRows([...rows, newRow]);
    alert(`Student ${fullname} has been added successfully!`);
    event.target.reset();
  }

  return (
    <>
      <h1>Add Student</h1>
      <div className="main">
            <div className="scrollable-component">
                <form onSubmit={handleSubmit}>
                
                <div className="name-container">
                    <p>Name</p>
                    <div className="name">
                       
                        <input type="text" placeholder="Firstname" id="studfname" />
                        <input type="text" placeholder="Lastname" id="studlname" /> 
                    </div>
                    
                </div>

                <div className="email-id-container">
                    <div>
                        <p>ID Number</p>
                        <input type="text" placeholder="ID" id="studid" />
                    </div>
                    <div className="email">
                        <p>Corporate Email</p>
                        <input type="email" placeholder="Corporate Email" id="studemail"  />
                    </div>
                </div>

                

                
                <div className="school-course-container">
                    <div>
                        <p>School</p>
                        <select id="school" defaultValue="">
                            <option value="" disabled>Select</option>
                            <option value="SEAIT">School of Engineering and Information Technology</option>
                            <option value="SHANS">School of Health and Nursing Sciences</option>
                            <option value="SAB">School of Accountancy and Business</option>
                            <option value="STEH">School of Teacher Education</option>
                            <option value="SGS">School of Graduate Studies</option>
                        </select>
                    </div>
                    <div className="course-subj">
                        <div>
                            <p>Course</p>
                            <input type="text" placeholder="Course" id="studcourse" />
                        </div>
                        <div>
                            <p>Subject Code</p>
                            <input type="text" placeholder="Code" id="studcode" />
                        </div>
                        

                        
                    </div>
                    

                    
                </div>
                <button type="submit">Add Student</button>
                
                </form>
            </div>
            <div className="table">
                <p>Student Information</p>

                
                <TableContainer component={Paper}>
                <Table sx={{ width: 650 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">School</StyledTableCell>
                        <StyledTableCell align="center">Course</StyledTableCell>
                        <StyledTableCell align="center">Subject Code</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.sid}>
                        <StyledTableCell component="th" scope="row">
                            {row.sid}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.sfullname}</StyledTableCell>
                        <StyledTableCell align="right">{row.semail}</StyledTableCell>
                        <StyledTableCell align="right">{row.sschool}</StyledTableCell>
                        <StyledTableCell align="right">{row.scourse}</StyledTableCell>
                        <StyledTableCell align="right">{row.subjectCode}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

            </div>
      </div>

      
    </>
  );
}

export default Student;
