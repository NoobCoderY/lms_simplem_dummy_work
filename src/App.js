import logo from './logo.svg';
import { Box, Button } from "@mui/material"
import { Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { brown } from '@mui/material/colors';
import Person2Icon from '@mui/icons-material/Person2';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import EventNoteIcon from '@mui/icons-material/EventNote';

function App() {
  let completed=30
  return (
    <Box style={{
      padding: "1rem", width: "25%", border: "11px solid #3B5999", borderTopLeftRadius: "11px",
      borderTopRightRadius: "11px", borderLeft: "none", borderBottom: "none", borderRight: "none"
    }}>
      <Stack direction="column" style={{ gap: "1rem", marginTop: "0.5rem" }}>
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontWeight: "600", fontSize: "20px", lineHeight: "30px" }}>Assignment-1</p>
          <Box><MoreHorizIcon style={{ color: "#6B6C6C" }} /></Box>
        </Box>
        <Stack direction="column" >
          <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", color: "#3F3F3F" }}>Course Duration - 60 Days
          </p>
          <p style={{ fontWeight: "400", fontSize: "14px", lineHeight: "24px", fontStyle: 'italic', color: "#6B6C6C" }}> by Anurag Tiwari</p>
        </Stack>
        <Stack spacing={2} direction="row" alignItems={'center'} style={{ marginTop: "0.4rem" }}>
          <Person2Icon style={{ color: "#6B6C6C", fontSize: "20px" }} />
          <p style={{ color: "#6B6C6C", fontSize: "16px", lineHeight: "28px" }} >Anurag Tiwari</p>
        </Stack>
        <Stack direction={'row'} gap={9} alignItems={'center'}>
          <Box style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#6B6C6C" }}>
            <EventNoteIcon style={{ color: "#6B6C6C", fontSize: "20px" }} />
            <p style={{ fontSize: "16px", lineHeight: "25px" }}>B Classes</p>
          </Box>
          <Box style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#6B6C6C" }}>
            <AccessAlarmsIcon style={{ fontSize: "20px" }} />
            <p style={{ fontSize: "16px", lineHeight: "25px" }}>3 hours</p>
          </Box>
        </Stack>
      
      <Stack style={{marginTop:"0.7rem"}}>
        <Box style={{
          height: "13px",
          width: '100%',
          borderRadius: "30px",
            backgroundColor:"#C0C9DE"
          
        }}>
          <Box style={{
            height: '100%',
            width: `${completed}%`,
            backgroundColor: " #3B5999",
            borderRadius: 'inherit',
            textAlign: 'right'
          }}>
          </Box>
        </Box>
        </Stack>
        </Stack>
    </Box>
  );
}

export default App;
