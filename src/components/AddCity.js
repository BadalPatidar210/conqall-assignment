import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addObject } from "../actions/objectActions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}));

export default function AddCity() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [stateName, setStateName] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [city, setCity] = React.useState("");

  const newList = useSelector((state) => state.newList);
  const { newObjectsList, loading, error } = newList;

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (stateName.length > 0 && district.length > 0 && city.length > 0)
      dispatch(addObject(stateName, district, city));
    setOpen(false);
  };

  const handleStateName = (e) => {
    let sName;
    if (e.target.value == 10) sName = "Rajasthan";
    if (e.target.value == 20) sName = "Madhya Pradesh";
    if (e.target.value == 30) sName = "Tamil Nadu";
    if (e.target.value == 40) sName = "Maharashtra";
    if (e.target.value == 50) sName = "Uttar Pradesh";
    setStateName(sName);
  };
  const handleDistrict = (e) => {
    let dName;
    if (e.target.value == 10) dName = "Coimbatore";
    if (e.target.value == 20) dName = "Valsad";
    if (e.target.value == 30) dName = "Khargone";
    if (e.target.value == 40) dName = "Ahmadnagar";
    if (e.target.value == 50) dName = "Mirzapur";
    setDistrict(dName);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Add City</Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">StateName</InputLabel>
              <Select
                native
                value={stateName}
                onChange={handleStateName}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Rajasthan</option>
                <option value={20}>Madhya Pradesh</option>
                <option value={30}>Tamil Nadu</option>
                <option value={40}>Maharashtra</option>
                <option value={50}>Uttar Pradesh</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">District</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={district}
                onChange={handleDistrict}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Coimbatore</MenuItem>
                <MenuItem value={20}>Valsad</MenuItem>
                <MenuItem value={30}>Khargone</MenuItem>
                <MenuItem value={40}>Ahmadnagar</MenuItem>
                <MenuItem value={50}>Mirzapur</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel onChange={handleCity} htmlFor="demo-dialog-native">
                City
              </InputLabel>
              <Input onChange={handleCity} value={city} />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
