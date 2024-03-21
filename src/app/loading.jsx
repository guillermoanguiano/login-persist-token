import { Box } from "@mui/material";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '90rem',
      maxWidth: '100%',
      height: '60rem',
      maxHeight: '100%'
    }}>
      <SyncLoader />
    </Box>
  );
}