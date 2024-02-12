import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../components/form/validationRegex";
import { Backdrop, Button, Loader } from "../components/ui";
import { CheckButton, TextField } from "../components/form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppStore } from "../store/useAppStore";
import axios from "axios";
import AuthGraphics from "../components/Layout/AuthGraphics";
import "../styles/css/app_root.css";
import styles from "../styles/css/app.module.css";
import SocialRedirect from "../components/ui/SocialRedirect";
// import axiosClient from "../axios-client";

export default function SignUp() {
    const navigate = useNavigate();
    const { setUser } = useAppStore();
    const [loading, setLoading] = useState(false);

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
                    if (
                        response.status === 200 &&
                        response.data.token != null
                    ) {
                        const {
                            user: { username, email },
                        } = response.data;

                        setUser({ username, email });
                        navigate("/verification");
                    } else {
                        const errorStat = JSON.stringify(response.status);
                        console.log("request success error: ", errorStat);
                    }
                })
                .catch((error) => {
                    toast.error(error.response.data.message);
                })
                .finally(() => setLoading(false));
        },
    });

    return (
        <>
            <section
                className={`col_xxlg_5 col_xlg_4 col_lg_5 col_md_12 col_sm_12`}
            >
                <div className={styles.auth_form}>
                    <div className={styles.form_header}>
                        <h2 className="font-[600] text-[2rem]">Sign Up</h2>
                        <p className="w-[80%] text-xs text-darkGrey">
                            You have zero regrets joining the best community in
                            the world, tailored for your personal growth
                        </p>
                    </div>
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
                            label={"Phone Number"}
                            placeholder={"Enter Your Mobile Number"}
                            id={"phone"}
                            name={"phone"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.username &&
                                formik.errors.username &&
                                formik.errors.username
                            }
                            type={"tel"}
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

                        <div className="flex items-center">
                            <CheckButton />
                            <p className="ml-2 text-xs">Remeber Me</p>
                        </div>

                        <Button
                            disabled={
                                Object.entries(formik.errors).length > 0 ||
                                !formik.values.email ||
                                !formik.values.password ||
                                !formik.values.username
                            }
                            type={"submit"}
                            rounded="lg"
                            size="fullwidth"
                        >
                            Sign Up
                        </Button>
                    </form>

                    <SocialRedirect
                        type="signup"
                        divider={true}
                        dividerLabel={"or continue with"}
                    />

                    <div className={styles.form_redirect}>
                        <p>Already have an account? </p>
                        <Link to={"/login"} className="redirect_link">
                            Login In !
                        </Link>
                    </div>
                    {loading && (
                        <Backdrop>
                            <Loader />
                        </Backdrop>
                    )}
                </div>
            </section>
            <section
                className={`col_xxlg_7 col_xlg_8 col_lg_7 col_md_12 col_sm_12`}
            >
                <AuthGraphics type="signup" />
            </section>
        </>
    );
}

