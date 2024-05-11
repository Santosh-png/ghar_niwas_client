import React, { useState } from "react";
import { Box, FormControl, Grid, TextField, Button, Dialog, DialogContent } from "@mui/material";
import RequestForm from "./request_property";

function DetailForm() {
  const [openRequestForm, setOpenRequestForm] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRequestForm = () => {
    setOpenRequestForm(true);
    handleCloseNavMenu(); // Close the menu after opening the form
  };

  return (
    <>
      <Box sx={{ margin: '10px' }}>
        <form style={{ padding: '20px', borderRadius: '20px' }}>

          <Grid>
            <FormControl size="small"
              fullWidth
              sx={{ maxWidth: { xs: "100%", md: "15rem" }, margin: '10px 0px' }}>
              <TextField id="outlined-basic" label="Full Name" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small"
              fullWidth
              sx={{ maxWidth: { xs: "100%", md: "14rem" }, margin: '10px 0px' }}>
              <TextField id="outlined-basic" type="email" label="Email Address" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl size="small"
              fullWidth
              sx={{ maxWidth: { xs: "100%", md: "14rem" }, margin: '10px 0px' }}>
              <TextField id="outlined-basic" label="Phone No" type="number" variant="outlined" />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            // onClick={handleCloseNavMenu}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "secondary.main", color: "white" }}
              onClick={handleRequestForm}
             
            >
              Submit
            </Button>
          </Grid>

        </form>

      </Box>
      <Dialog
        open={openRequestForm}
        onClose={() =>{ setOpenRequestForm(false); handleCloseNavMenu()}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <DialogContent sx={{ backgroundColor: "transparent" }}>
          <RequestForm /> {/* Render the form component */}
        </DialogContent>
      </Dialog>
    </>
  );

}

export default DetailForm;
