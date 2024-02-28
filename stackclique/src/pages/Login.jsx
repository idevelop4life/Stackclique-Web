import { useFormik } from "formik";
import { loginSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import { CheckButton, TextField } from "../components/form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthGraphics from "../components/Layout/AuthGraphics";
import "../styles/css/app_root.css";
import styles from "../styles/css/app.module.css";
import SocialRedirect from "../components/ui/SocialRedirect";
import MetaTags from "../components/seo/MetaTags";

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

            axios
                .post("http://localhost:8000/api/login", values)

                .then((response) => {
                    console.log(response);
                    if (
                        response.status === 200 &&
                        response.data.token != null
                    ) {
                        // pls anderson this particular page should not
                        // be accessed if the user has being successfully registered
                        // so you can place a kind of middileware to guard that, so he doesnt sign up multipl times thanks

                        // This contains info of the user that jus logged in and the login message
                        const loggedinMessage = JSON.stringify(response.data);
                        console.log(loggedinMessage.response);

                        navigate("/verification");
                    } else {
                        // Error message
                        const errorStat = JSON.stringify(response.status);
                        console.log(errorStat.error.status);
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
        },
    });

    return (
        <>
            <MetaTags
                title={`Log into your Stackclique account`}
            />
            <section
                className={`col_xxlg_5 col_xlg_5 col_lg_5 col_md_12 col_sm_12`}
            >
                <div className={styles.auth_form}>
                    <div className={styles.form_header}>
                        <h2 className="font-[600] text-[2rem]">Sign In</h2>
                        <p className="font-[600] text-[1.5rem]">
                            Welcome Back!
                        </p>
                        <p className="text-darkGrey">
                            Log in into your account
                        </p>
                    </div>

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
                            error={
                                formik.touched.password &&
                                formik.errors.password
                            }
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

                    <SocialRedirect
                        type="login"
                        divider={true}
                        dividerLabel={"or continue with"}
                    />

                    <div className={styles.form_redirect}>
                        <p>Don’t have an account? </p>
                        <Link to={"/sign-up"} className="redirect_link">
                            Register here !
                        </Link>
                    </div>
                </div>
            </section>
            <section
                className={`col_xxlg_5 col_xlg_5 col_lg_7 col_md_12 col_sm_12`}
            >
                <AuthGraphics type="login" />
            </section>
        </>
    );
}
