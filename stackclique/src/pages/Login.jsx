import { useFormik } from "formik";
import { loginSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import { CheckButton, TextField } from "../components/form";
import { Link } from "react-router-dom";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {

             // handle form submition when submit button is clicked

             axios.defaults.withCredentials = true;

             axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
             axios
             .post("http://localhost:8000/login", values)

             .then((response) => {
                 console.log(response);
                 if (response.status === 200 && response.data.token != null) {

                     // This contains info of the user that jus logged in and the login message
                     const loggedinMessage = JSON.stringify(response.data);

                     navigate("/verification");
                 } else {
                     // Error message
                     const errorStat = JSON.stringify(response.status);
                 }
             })
             .catch((error) => {
                 // Below are the information for errors in interacting with the database
                 const errorStatus = JSON.stringify(error.response.status);
                //  const errorMessage = JSON.stringify(
                //      error.response.data.message,
                //  );
                 const errorData = JSON.stringify(
                     error.response.data.errors,
                 );
                 console.log(
                     "API request failed with status code:",
                     errorStatus,
                 );
                //  console.log("ERROR:: ", errorData);
                 console.log("ERROR:: ", errorData);
             });
            // handle form submition when submit button is clicked
            // console.log(values);
          });
        },
    });
    return (
        <section className="flex flex-col items-center mt-[3rem] gap-2 font-poppins">
            <h2 className="font-[600] text-[2rem]">Sign In</h2>
            <p className="font-[600] text-[1.5rem]">Welcome Back!</p>
            <p className="text-darkGrey">Log in into your account</p>

            <form
                className="flex flex-col w-full gap-6 mt-6 lg:w-8/12"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    label={"Email Address"}
                    placeholder={"Enter Your Email"}
                    id={"Email"}
                    name={"email"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                    type={"email"}
                />

                <TextField
                    label={"Password"}
                    placeholder={"Enter Your Password"}
                    type={"password"}
                    name={"password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password}
                />
                <div className="flex items-center">
                    <CheckButton />
                    <p className="ml-2 text-xs">Remeber Me</p>
                    <p className="ml-auto text-xs text-primary-500">
                        Forgot Passowrd?
                    </p>
                </div>

                <Button
                    disabled={
                        formik.errors.email ||
                        formik.errors.password ||
                        !formik.touched.email
                    }
                    type={"submit"}
                    rounded="lg"
                    size="fullwidth"
                >
                    Login
                </Button>
            </form>

            <div className="flex justify-center w-full gap-2 text-sm">
                <p>Don’t have an account ?</p>
                <Link
                    to={"/sign-up"}
                    className="text-primary-500 hover:underline"
                >
                    Register here !
                </Link>
            </div>
        </section>
    );
}
