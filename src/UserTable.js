import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UserTable = ({row}) => {
  return (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
        ID    
          </TableCell>

          <TableCell>
        Names   
          </TableCell>

          <TableCell>
        Actions    
          </TableCell>
    <TableCell>
        Actions    
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
         row.length>0? row.map((user,index)=>(
            <TableRow key={index} sx={{'&:lst-child td, &:last-child th':{border:0}}}>
            <TableCell component='th' scope="row" >{user.id}</TableCell>
            <TableCell component='th' scope="row" >{user.name}</TableCell>
            <TableCell component='th' scope="row" >
              <Button sx={{
                margin:'0px 20px',}} 
                onClick={()=>{}}>Update</Button>
            </TableCell>
            <TableCell component='th' scope="row" >
              <Button sx={{
                margin:'0px 20px',}} 
                onClick={()=>{}}>Delete</Button>
            </TableCell>
            </TableRow>
          )):
          <TableRow>
            <TableCell>
              NO DATA
            </TableCell>
          </TableRow>
        }
      </TableBody>
    </Table>
  </TableContainer>
   ) ;
};
export default UserTable;
