import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../components/form/validationRegex";
import { Backdrop, Button, Loader } from "../components/ui";
import { TextField } from "../components/form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppStore } from "../store/useAppStore";
import axios from "axios";
import axiosClient from "../axios-client";

export default function SignUp() {
    const navigate = useNavigate();
    const { setUser } = useAppStore();
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
            // handle form submition when submit button is clicked
            setLoading(true);
            axios
                .post("http://localhost:8000/api/signup", values)

                .then((response) => {
                    if (response.status === 200) {
                        // pls anderson this particular page should not
                        // be accessed if the user has being successfully registered
                        // so you can place a kind of middileware to guard that, so he doesnt sign up multipl times thanks

                        // This contains info of the user that jus registered and the login message
                        const {
                            user: { username, email },
                        } = response.data;

                        localStorage.setItem(
                            "loginToken",
                            JSON.stringify(response.data.token),
                        );
                        setUser({ username, email });
                        navigate("/");
                    } else {
                        // Error message
                        const errorStat = JSON.stringify(response.status);
                        console.log("request success error: ", errorStat);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                    // console.log(error);
                    // toast.error("Error trying to Sign Up!");
                    // Below are the information for errors in interacting with the database
                    // const data = JSON.stringify(error.response.data)
                    // const errorStatus = JSON.stringify(error.response.status);
                    // const errorMessage = JSON.stringify(
                    //     error.response.data.message,
                    // );
                    // const errorData = JSON.stringify(
                    //     error.response.data.errors,
                    // );
                    // console.log(
                    //     "API request failed with status code:",
                    //     errorStatus,
                    // );
                    // console.log("ERROR:: ", errorData);
                    // console.log("ERROR:: ", errorMessage);
                })
                .finally(() => setLoading(false));
        },
    });

    return (
        <section className="flex w-full relative flex-col items-center mt-[3rem] gap-2 font-poppins">
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
                    error={
                        formik.touched.username &&
                        formik.errors.username &&
                        formik.errors.username
                    }
                    type={"text"}
                />

                <TextField
                    label={"Email Address"}
                    placeholder={"Enter Your Email"}
                    id={"Email"}
                    name={"email"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.email &&
                        formik.errors.email &&
                        formik.errors.email
                    }
                    type={"email"}
                />

                <TextField
                    label={"Password"}
                    placeholder={"Enter Your Password"}
                    type={"password"}
                    name={"password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password &&
                        formik.errors.password &&
                        formik.errors.password
                    }
                />

                <Button
                    disabled={
                        Object.entries(formik.errors).length > 0 ||
                        !formik.values.email ||
                        !formik.values.password ||
                        !formik.values.username
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
            {loading && (
                <Backdrop>
                    <Loader />
                </Backdrop>
            )}
        </section>
    );
}
