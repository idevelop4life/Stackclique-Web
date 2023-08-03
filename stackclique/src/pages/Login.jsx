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
                className="w-full lg:w-8/12 flex flex-col mt-6 gap-6"
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
                    <p className="text-xs ml-2">Remeber Me</p>
                    <p className="text-primary text-xs ml-auto">
                        Forgot Passowrd?
                    </p>
                </div>

                <div className="relative">
                    <Button
                        disabled={formik.errors.email || formik.errors.password}
                        type={"submit"}
                    >
                        Login
                    </Button>
                </div>
            </form>

            <div className="flex w-full justify-center gap-2 text-sm">
                <p>Don’t have an account ?</p>
                <Link to={"/sign-up"} className="text-primary hover:underline">
                    Register here !
                </Link>
            </div>
        </section>
    );
}
