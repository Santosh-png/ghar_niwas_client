import React, { useState } from "react";
import { Box, FormControl, Grid, TextField, Button, Dialog, DialogContent } from "@mui/material";
import RequestForm from '../icon_component/request_icon'

function DetailForm() {
  const [openRequestIcon, setOpenRequestIcon] = useState(false);
  const[detailform,setDetailForm]=useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRequestForm = (e) => {
    e.preventDefault();
    setOpenRequestIcon(true);
    setDetailForm(false)
    handleCloseNavMenu(); // Close the menu after opening the form
  };

  return (
    <>    
        <Box sx={{ margin: '10px' }} >
          <form style={{ borderRadius: '20px' }}>
            <Grid>
              <FormControl
                size="large"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px' }}
              >
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  sx={{ maxWidth: { xs: "100%", md: "25rem" } }}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                size="small"
                className="formControl"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px'}}
              >
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-basic"
                  type="email"
                  label="Email"
                  variant="outlined"
                  sx={{ maxWidth: { xs: "100%", md: "25rem" } }}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px' }}
              >
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Phone no"
                  type="number"
                  variant="outlined"
                  sx={{ maxWidth: { xs: "100%", md: "25rem" } }}
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding:'0 100px'
              }}
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
        open={openRequestIcon}
        onClose={() => { setOpenRequestIcon(false)}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
         <RequestForm/> {/* Render the form component */}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DetailForm;
