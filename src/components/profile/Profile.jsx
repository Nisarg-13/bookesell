import { NavLink } from "react-router-dom";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import { styles } from "./style";

export const Profile = () => {
  const classes = styles();
  return (
    <h1 className={classes.wrapper}>
      Profile Component <NavLink to="/user"> User </NavLink>
      <Button variant="contained" color="primary" size="small" className="click-btn" classes={{}}> Click Me! </Button>
      <button> Normal </button>
      <TextField className="input-element" />
      <input />
      <Tabs>
        <Tab classes={{ selected: "selected:tab" }}> Hello </Tab>
        <Tab> Hello 2 </Tab>
      </Tabs>
    </h1>
  );
};
