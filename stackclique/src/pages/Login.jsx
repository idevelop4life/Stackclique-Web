import { useFormik } from "formik";
import { loginSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import { CheckButton, TextField } from "../components/form";
import { Link } from "react-router-dom";

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            // handle form submition when submit button is clicked
            console.log(values);
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
                    <p className="ml-auto text-xs text-primary">
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
                    rounded="large"
                    width="full"
                >
                    Login
                </Button>
            </form>

            <div className="flex justify-center w-full gap-2 text-sm">
                <p>Don’t have an account ?</p>
                <Link to={"/sign-up"} className="text-primary hover:underline">
                    Register here !
                </Link>
            </div>
        </section>
    );
}
