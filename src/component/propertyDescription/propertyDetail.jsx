import { Grid, Typography } from "@mui/material";
import PropertyPicList from './propertyPicList';
import CardService from '../card/cardServices';
import {Box} from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import ScaleIcon from '@mui/icons-material/Scale';
import ButtonShare from "./botton";
import Detail from './facilities';
import Duplicate from './duplicate';

function PropertyDetail(){
    return(
        // main div
        <div>
            <Typography className="responsive_fontsize32" sx={{textAlign:"center",margin:'0px',fontWeight:'600',color:'primary.main'}}>$12000 House for Sale in Lalitpur</Typography>
            <div>
                <Box sx={{display:"grid",justifyContent:"end",marginRight:'50px'}}>
                    <ButtonShare/>
                </Box>
                <div style={{marginTop:"10px"}}>
                    <Duplicate/>
                </div>
                
            <div style={{display:'flex',flexWrap:"wrap",justifyContent:'space-between',margin:'0 10px 0 20px'}}>
                <Grid item>
                    <BottomNavigationAction label="Bed" icon={<BedIcon/>} />
                    <Typography className="responsive_fontsize16" sx={{textAlign:"center",color:'primary.main'}}>Bed</Typography>
                </Grid>
                <Grid item>
                    <BottomNavigationAction label="WashRoom" icon={<ShowerIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main',textAlign:"center"}}>WashRoom</Typography>
                </Grid>
                <Grid item>
                    <BottomNavigationAction label="Kitchen" icon={<SoupKitchenIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main',textAlign:"center"}}>Kitchen</Typography>
                </Grid>
                <Grid item>
                    <BottomNavigationAction label="CarParking" icon={<TimeToLeaveIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main',textAlign:"center"}}>CarParking</Typography>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ order: { xs: 1, sm: 0 } }}>
                        <Grid item xs={12} sm={2}>
                            <BottomNavigationAction style={{ marginRight: '20px' }} label="Aanas" icon={<ScaleIcon />} />
                            <Typography className="responsive_fontsize16" sx={{ color: 'primary.main', marginRight: '20px', textAlign: "center" }}>Aanas</Typography>
                        </Grid>
                </Grid>
            </div>
            </div>
            <div>
                <Detail/>
            </div>

            {/* search more part */}
            <Box>
            <Typography className="responsive_fontsize32"
                sx={{
                    fontWeight:"bold",
                    padding:"10px",
                    textAlign:"center",
                    letterSpacing:"1px",
                    color:'primary.main',
                
                }}
                >
            Continue Your Search </Typography>

            {/* Property List */}
            <Box sx={{ display: "flex", 
            width: "100%", flexDirection: "row",margin:"10px 0 25px 0",
            paddingBottom:'40px' }}>
                <CardService/>
            </Box>

            </Box>
            
            <Box sx={{marginTop:'20px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.93101036504!2d85.28195198644501!3d27.657538735483342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0xd10ec3d53656e18f!2sLalitpur!5e0!3m2!1sen!2snp!4v1715996525170!5m2!1sen!2snp" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>

            <Box>
            </Box>
        {/* end of search part */}
        </div>
        // end of main div
    )
}
export default PropertyDetail;