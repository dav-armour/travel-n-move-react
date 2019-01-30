import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
import DashboardIcon from "@material-ui/icons/Dashboard";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import MailIcon from "@material-ui/icons/Mail";
import ViewListIcon from "@material-ui/icons/ViewList";
import LibraryAdd from "@material-ui/icons/LibraryAdd";

export const AdminMenuItems = (
  <div>
    <ListItem button component={Link} to="/admin/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/admin/quotes">
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText primary="Quotes" />
    </ListItem>
    <ListItem button component={Link} to="/admin/enquiries">
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Enquiries" />
    </ListItem>
    <ListItem button component={Link} to="/admin/tours">
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Tours" />
    </ListItem>
    <ListItem button component={Link} to="/admin/tours/new">
      <ListItemIcon>
        <LibraryAdd />
      </ListItemIcon>
      <ListItemText primary="Create Tour" />
    </ListItem>
    {/* <Divider />
    <ListItem button component={Link} to="/admin/create_admin">
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Create Admin" />
    </ListItem>
    <ListItem button component={Link} to="/admin/change_password">
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem> */}
  </div>
);
