import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box, TextField } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { motion } from "framer-motion";
// import "./search_bar.css";
function SearchBar() {
  const [isGrowing, setIsGrowing] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const animationVariants = {
    grow: { scale: 1.2, transition: { duration: 1 } },
    shrink: { scale: 1, transition: { duration: 1 } },
  };
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const textVariants = {
    closed: { width: "0rem", opacity: 0 },
    open: { width: "15rem", opacity: 1 },
  };

  const toggleAnimation = () => {
    setIsGrowing((prevIsGrowing) => !prevIsGrowing);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleAnimation, 1000); // Toggle animation every 1 second
    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  const handleSearch = () => {
    console.log("Search Query", searchQuery);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "26px",
        left: "10px",
        zIndex: "100",
        transform: "translate(0, 50%)",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {isOpen ? (
          <IconButton onClick={toggleOpen}>
            <Clear />
          </IconButton>
        ) : (
          <motion.div
            className="search-icon"
            animate={isGrowing ? "grow" : "shrink"}
            variants={animationVariants}
            onClick={toggleOpen}
          >
            <IconButton>
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
          </motion.div>
        )}
        <motion.div
          className="text-field-container"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={textVariants}
        >
          {/* {isOpen && ( */}
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            autoComplete="off"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <SearchIcon
                  sx={{
                    cursor: "pointer",
                    transform: "scale(1.2)",
                    color: isFocus ? "primary.main" : "grey",
                  }}
                  onClick={handleSearch}
                />
              ),
              style: {
                borderRadius: "1rem",
              },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          {/* )} */}
        </motion.div>
      </Box>
    </Box>
  );
}

export default SearchBar;
