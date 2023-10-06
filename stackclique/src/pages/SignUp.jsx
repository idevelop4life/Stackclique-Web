import { json, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import { TextField } from "../components/form";
import { Link } from "react-router-dom";
import axios from "axios";
import axiosClient from "../axios-client";

export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            // handle form submition when submit button is clicked

            axios
                .post("http://localhost:8000/api/signup", values)

                .then((response) => {
                    console.log(response);
                    if (response.status === 200 && response.data.token != null) {
                        // pls anderson this particular page should not
                        // be accessed if the user has being successfully registered
                        // so you can place a kind of middileware to guard that, so he doesnt sign up multipl times thanks

                        // This contains info of the user that jus registered and the login message
                        const registeredMessage = JSON.stringify(response.data);
                        navigate("/verification");
                    } else {
                        // Error message
                        const errorStat = JSON.stringify(response.data);
                    }
                })
                .catch((error) => {
                    // Below are the information for errors in interacting with the database
                    const errorStatus = JSON.stringify(error.response.status);
                    // const errorMessage = JSON.stringify(
                    //     error.response.data.message,
                    // );
                    const errorData = JSON.stringify(
                        error.response.data.errors,
                    );
                    console.log(
                        "API request failed with status code:",
                        errorStatus,
                    );
                    console.log("ERROR:: ", errorData);
                    // console.log("ERROR:: ", errorMessage);
                });
        },
    });
    return (
        <section className="flex w-full flex-col items-center mt-[3rem] gap-2 font-poppins">
            <h2 className="font-[600] text-[2rem]">Sign Up</h2>
            <p className="w-[80%] text-xs text-darkGrey">
                You have zero regrets joining the best community in the world,
                tailored for your personal growth
            </p>
            <form
                className="flex flex-col w-full gap-6 mt-6 lg:w-8/12"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    label={"Username"}
                    placeholder={"Enter Your Username"}
                    id={"username"}
                    name={"username"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && formik.errors.username}
                    type={"text"}
                />

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

                <Button
                    disabled={
                        formik.errors.email ||
                        formik.errors.password ||
                        !formik.touched.email
                    }
                    type={"submit"}
                    rounded="large"
                    width="full"
                >
                    Sign Up
                </Button>
            </form>

            <div className="flex justify-center w-full gap-2 text-sm">
                <p>Already have an account ?</p>
                <Link to={"/login"} className="text-primary hover:underline">
                    Login In !
                </Link>
            </div>
        </section>
    );
}
