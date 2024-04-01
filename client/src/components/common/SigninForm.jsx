import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField,IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const SigninForm = ({ switchAuthState }) => {
    const dispatch = useDispatch();
  
    const [isLoginRequest, setIsLoginRequest] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};
    const signinForm = useFormik({
      initialValues: {
        password: "",
        username: ""
      },
      validationSchema: Yup.object({
        username: Yup.string()
          .min(8, "username minimum 8 characters")
          .required("username is required"),
        password: Yup.string()
          .min(8, "password minimum 8 characters")
          .required("password is required")
      }),
      onSubmit: async values => {
        setErrorMessage(undefined);
        setIsLoginRequest(true);
        console.log("asdasdasdasd");
        const { response, err } = await userApi.signin(values);
        setIsLoginRequest(false);
  
        if (response) {
          signinForm.resetForm();
          dispatch(setUser(response));
          dispatch(setAuthModalOpen(false));
          toast.success("Sign in success");
        }
  
        if (err) setErrorMessage(err.message);
      }
    });
  
    return (
      <Box component="form" onSubmit={signinForm.handleSubmit}>
        <Stack spacing={3}>
  <TextField
    type={showPassword ? "text" : "password"}
    placeholder="Your username"
    name="username"
    fullWidth
    value={signinForm.values.username}
    onChange={signinForm.handleChange}
    color="success"
    error={signinForm.touched.username && signinForm.errors.username !== undefined}
    helperText={signinForm.touched.username && signinForm.errors.username}
  />
  <TextField
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    name="password"
    fullWidth
    value={signinForm.values.password}
    onChange={signinForm.handleChange}
    color="success"
    error={signinForm.touched.password && signinForm.errors.password !== undefined}
    helperText={signinForm.touched.password && signinForm.errors.password}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={handleTogglePassword} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
</Stack>
  
        <LoadingButton
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          sx={{ marginTop: 4 }}
          loading={isLoginRequest}
        >
          Sign in
        </LoadingButton>
  
        <Button
  fullWidth
  sx={{ marginTop: 1, borderRadius: "10px", fontWeight: "1000" }}
  onClick={() => switchAuthState()}
>
  Sign up
</Button>
  
        {errorMessage && (
          <Box sx={{ marginTop: 2 }}>
            <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
          </Box>
        )}
      </Box>
    );
  };
  
  export default SigninForm;