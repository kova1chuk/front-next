import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import List from "@mui/material/List";

import InfoIcon from "@mui/icons-material/Info";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ContactsIcon from "@mui/icons-material/Contacts";
import router, { useRouter } from "next/router";
// TODO
const Navigation = () => {
  const router = useRouter();

  const handleChange = (_: any, label: number) => {
    switch (label) {
      case 0:
        router.push("/info");
        break;
      case 1:
        router.push("/feed");
        break;
      case 2:
        router.push("/user");
        break;
      // defaul: console.warn("Any handlers for this navigatin item");
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        //   value={router.query}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Info" icon={<InfoIcon />} />
        <BottomNavigationAction label="Feed" icon={<DynamicFeedIcon />} />
        <BottomNavigationAction label="User" icon={<ContactsIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;
