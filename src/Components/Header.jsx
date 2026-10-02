import AppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Typography component="p" variant="h6">
          Gerges
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
