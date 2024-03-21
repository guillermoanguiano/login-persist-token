import { Login } from "@/components/Login";
import { Box, Card } from "@mui/material";

export default function Home() {

  return (
    <>
    username: kminchelle password: 0lelplR
    <Card sx={{padding: 3, position: 'absolute', top: '50%', left: '50%', transform: "translate(-50%, -50%)"}} >
      <Login/>
    </Card>
    </>
  );
}