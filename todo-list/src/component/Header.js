import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Header = () => {
  return (
    <Tabs
      value={0}
      style={{ backgroundColor: "#f5f5f5" }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="TO DO LIST" />
    </Tabs>
  );
};

export default Header;
