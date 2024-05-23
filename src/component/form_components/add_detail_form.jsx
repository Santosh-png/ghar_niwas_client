import React, { useState } from "react";
import { Box, FormControl, Grid, TextField, Button, Dialog, DialogContent } from "@mui/material";
import IconComponents from "../icon_component/icon_component";

function AddPropertyDetailForm({ onSubmit, handleCloseForm }) {
  const [openRequestForm, setOpenRequestForm] = useState(false);

  const handleRequestForm = (e) => {
    e.preventDefault();
    setOpenRequestForm(true);
    if (onSubmit) {
      onSubmit();
    }
    handleCloseForm(); // Call the parent component function to close the form
  };

  return (
    <>
      <Box sx={{ margin: '10px' }}>
        <form style={{ borderRadius: '20px' }} onSubmit={handleRequestForm}>
          <Grid >
            <FormControl
              size="large"
              fullWidth
              sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px' }}>
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
              sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px'}}>
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
              sx={{ maxWidth: { xs: "100%", md: "25rem" }, margin: '10px 0px' }}>
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
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
      <Dialog
        open={openRequestForm}
        onClose={() => setOpenRequestForm(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ backgroundColor: "transparent" }}>
            <IconComponents/>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddPropertyDetailForm;
