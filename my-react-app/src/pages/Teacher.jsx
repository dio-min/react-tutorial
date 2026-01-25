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
    fontSize: 10,
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



function Teacher() {
  const [rows, setRows] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const fullname =document.getElementById("tfname").value +" " +document.getElementById("tlname").value;
    const idnumber = document.getElementById("teachid").value;
    const email = document.getElementById("teachemail").value;
    const school = document.getElementById("school").value;
    const subjectCode = document.getElementById("code").value;

    if (fullname === " " || idnumber === "" || email === "" || school === ""  || subjectCode === "") {
      alert("Please fill in all fields.");
      return;
    }

    const newRow = {
      sid: idnumber,
      sfullname: fullname,
      semail: email,
      sschool: school,
      subjectCode: subjectCode,
    };

    setRows([...rows, newRow]);
    alert(`Teacher ${fullname} has been added successfully!`);
    event.target.reset();
  }

  return (
    <>
      <h1>Add Teacher</h1>
      <div className="main">
            <div className="scrollable-component">
                <form onSubmit={handleSubmit}>
                
                <div className="name-container">
                    <p>Name</p>
                    <div className="name">
                       
                        <input type="text" placeholder="Firstname" id="tfname" />
                        <input type="text" placeholder="Lastname" id="tlname" /> 
                    </div>
                    
                </div>

                <div className="email-id-container">
                    <div>
                        <p>ID Number</p>
                        <input type="text" placeholder="ID" id="teachid" />
                    </div>
                    <div className="email">
                        <p>Corporate Email</p>
                        <input type="email" placeholder="Corporate Email" id="teachemail"  />
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
                            <p>Subject Code</p>
                            <input type="text" placeholder="Code" id="code" />
                        </div>            
                    </div>
                    

                    
                </div>
                <button type="submit">Add Teacher</button>
                
                </form>
            </div>
            <div>
                <p>Teacher Information</p>

                
                <TableContainer component={Paper}>
                    <Table sx={{ width: 650 }} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">School</StyledTableCell>                       
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

export default Teacher;
