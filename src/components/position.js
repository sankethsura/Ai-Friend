import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function PositionedMenu({ user, setUser, email, setEmail }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function handleLeetCode(e) {
      console.log(e.target.textContent);
      window.open(
              "https://leetcode.com/sanketh123/"
            )
        handleClose()
    }
    function handleGit(e) {
      console.log(e.target.textContent);
      window.open("https://github.com/sankethsura")
        handleClose()
    }
    function handleLinked(e) {
      console.log(e.target.textContent);
      window.open("https://www.linkedin.com/in/sanketh-sura-5b0b90178/")
        handleClose()
    }
  
    function handleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          console.log(result.user);
          setUser(result.user.displayName);
          setEmail(result.user.email);
        })
        .catch((error) => {
          console.log(error);
        });
        handleClose()
      
    }
  
    function handleLogout() {
      signOut(auth)
        .then(() => {
          console.log("logout successful");
        })
        .catch((error) => {
          console.log(error);
        });
      setUser("");
      handleClose()

    }

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <GiHamburgerMenu className="text-white"/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        
      >
        {user ? user : <MenuItem  onClick={handleLogin}>Login</MenuItem>}
        {user ? <MenuItem onClick={handleLogout}>Logout</MenuItem> :""}

        <MenuItem onClick={handleLeetCode}>Leetcode</MenuItem>
        <MenuItem onClick={handleGit}>Git-Hub</MenuItem>
        <MenuItem onClick={handleLinked}>Linked-in</MenuItem>
      </Menu>
    </div>
  );
}
