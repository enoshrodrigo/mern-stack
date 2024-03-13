import { Box, Grid } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
const user=
 [ {
    id:1,
    name:'Enosh',

  },
  {
    id:1,
    name:'Kamal',
  }

]
  const User =()=>{
return(
  <Box sx={{width:'calc(100% - 100px)',margin:'auto',marginTop:'100px'}}>
    <UserForm />
    <UserTable row={user} />

  </Box>
)
  }
  export default User;