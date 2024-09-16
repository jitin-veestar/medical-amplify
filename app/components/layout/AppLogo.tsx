import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import React from "react";
import Logo from "../../../public/Images/logo.jpeg";
import Link from "next/link";

function AppLogo() {
  return (
    <>
      <Link href={"/"}>
        <Chip
          avatar={<Avatar alt="Natacha" src={Logo.src} />}
          label="ASK"
          color="secondary"
          variant="outlined"
          sx={{ fontWeight: 700, ml: 2 }}
        />
      </Link>
    </>
  );
}

export default AppLogo;
