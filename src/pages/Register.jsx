import * as React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { RegisterForm } from "../Components/RegisterForm"; 

export const Register = () => {
  //En state-variabel skapas. Den styr huruvida formuläret ska
  //vara "öppet" eller ej.
  const [open, setOpen] = React.useState(false);

  //Kursdatakontexten används här.
  const courses = useContext(DataContext);

  //Funktion som "öppnar" formuläret.
  const handleClickOpen = () => {
    setOpen(true);
  };

  //Funktion som stänger ner formuläret.
  const handleClose = () => {
    setOpen(false);
  };

  //Nedan skapar jag ett formulärobjekt.
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    course: "",
  });

  //När username, email, och kurs ändras i formuläret
  //så uppdateras värdena i formInput.
  function handleNameChange(event) {
    setFormInput((f) => ({ ...f, name: event.target.value }));
  }

  function handleEmailChange(event) {
    setFormInput((e) => ({ ...e, email: event.target.value }));
  }

  function handleCourseChange(event) {
    setFormInput((c) => ({ ...c, course: event.target.value }));
  }

  //En variabel skapas för att hantera fel.
  const [errors, setErrors] = React.useState({});

  //Den här funktionen körs när användaren trycker på
  //"Submit"-knappen.
  function handleSubmit() {
    //Om användaren inte skriver in nåt i input-fälten
    //visas felmeddelanden.
    const newErrors = {};
    if (!formInput.name) newErrors.name = "Please enter your username!";
    if (!formInput.email) newErrors.email = "Please enter your e-mail!";
    if (!formInput.course) newErrors.course = "Please select a course!";
    setErrors(newErrors);
    //Om något fel finns så stoppas "handleSubmit" här.
    if (Object.keys(newErrors).length > 0) return;

    //formInput-objektet skrivs ut i konsollen.
    console.log(formInput);
    //Informationen som användaren har angett i formuläret sparas i local storage.
    // Man skulle kunna visa den någon annanstans på webbplatsen.
    localStorage.setItem("formInput", JSON.stringify(formInput));

    //Ett popup-meddelande visas som bekräftelse på ansökan.
    alert("Tack för din ansökan!");

    //Rensar formuläret när datan skickats in.
    setFormInput({
      name: "",
      email: "",
      course: "",
    });

    //Formuläret stängs även ner efter att användaren skickat in
    //sina uppgifter.
    setOpen(false);
  }

  //En Material UI-dialog används. När man klickar på knappen öppnas formuläret.
  //RegisterForm-komponenten får alla nödvändiga props.
  return (
    <div>
      <React.Fragment>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "black", marginLeft: "auto" }}
          onClick={handleClickOpen}
        >
          Register
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Application</DialogTitle>
          <DialogContent>
            <RegisterForm
              formInput={formInput}
              handleCourseChange={handleCourseChange}
              handleEmailChange={handleEmailChange}
              handleNameChange={handleNameChange}
              courses={courses}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};
