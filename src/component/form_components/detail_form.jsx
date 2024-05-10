import React from "react";
import { Box, FormControl, Grid,TextField ,Button} from "@mui/material";
function DetailForm(){
    return(
       <>
        <Box sx={{margin:'10px'}}>
          <form style={{padding:'20px',borderRadius:'20px'}}>
            
            <Grid>
                <FormControl size="small"
                             fullWidth
                            sx={{ maxWidth: { xs: "100%", md: "15rem" } ,margin:'10px 0px'}}>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" />
                </FormControl>
            </Grid>
            <Grid>
                <FormControl size="small"
                fullWidth
                sx={{ maxWidth: { xs: "100%", md: "14rem" } ,margin:'10px 0px'}}>
            <TextField id="outlined-basic" type="email" label="Email Address" variant="outlined" />
            </FormControl>
            </Grid>
            <Grid>
                <FormControl size="small"
                            fullWidth
                             sx={{ maxWidth: { xs: "100%", md: "14rem" },margin:'10px 0px' }}>
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
        </>
    );

}
export default DetailForm