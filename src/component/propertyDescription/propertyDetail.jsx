import { Typography } from "@mui/material";
import PropertyPicList from './propertyPicList';
import SearchBar from './searchBar';
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
            <SearchBar/>
            <Typography className="responsive_fontsize32" sx={{textAlign:"center",margin:'0px',fontWeight:'600',color:'primary.main'}}>$12000 House for Sale in Lalitpur</Typography>
            <div>
                <div style={{display:"grid",justifyContent:"end",marginRight:{xs:'30px',md:'50px'}}}>
                    <ButtonShare/>
                </div>
                <div style={{marginTop:"0px"}}>
                    <Duplicate/>
                </div>
                
            <div style={{display:'flex',justifyContent:'space-between',margin:'0 10px 0 20px'}}>
                <div>
                    <BottomNavigationAction label="Bed" icon={<BedIcon/>} />
                    <Typography className="responsive_fontsize16" sx={{marginLeft:'25px',color:'primary.main'}}>Bed</Typography>
                </div>
                <div>
                    <BottomNavigationAction label="WashRoom" icon={<ShowerIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main'}}>WashRoom</Typography>
                </div>
                <div>
                    <BottomNavigationAction label="Kitchen" icon={<SoupKitchenIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main'}}>Kitchen</Typography>
                </div>
                <div>
                    <BottomNavigationAction label="CarParking" icon={<TimeToLeaveIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main'}}>CarParking</Typography>
                </div>
                <div>
                    <BottomNavigationAction style={{marginRight:'20px'}} label="Aanas" icon={<ScaleIcon />} />
                    <Typography className="responsive_fontsize16" sx={{color:'primary.main'}}>Aanas</Typography>
                </div>
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