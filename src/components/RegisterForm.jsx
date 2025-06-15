import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

//Den här komponenten visar registreringsformulärets fält/inputs.
//Jag importerade fälten från Material UI.
//Funktionerna och datan hanteras i Register.jsx.
export const RegisterForm = ({
  formInput,
  handleNameChange,
  handleEmailChange,
  handleCourseChange,
  courses,
  handleSubmit,
  errors,
}) => {
  return (
    <div>
      <TextField
        margin="dense"
        fullWidth
        id="outlined-required"
        label="Username"
        value={formInput.name}
        onChange={handleNameChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <TextField
        margin="dense"
        fullWidth
        id="outlined-password-input"
        label="E-mail"
        type="email"
        value={formInput.email}
        onChange={handleEmailChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        select
        margin="dense"
        fullWidth
        name="course"
        label="Select course"
        value={formInput.course}
        onChange={handleCourseChange}
        error={!!errors.course}
        helperText={errors.course}
      >
        {courses.map((course) => (
          <MenuItem key={course.id} value={course.name}>
            {course.name}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="outlined" type="submit" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </div>
  );
};
