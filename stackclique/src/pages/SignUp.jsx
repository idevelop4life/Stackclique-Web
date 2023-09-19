import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import { TextField } from "../components/form";
import { Link } from "react-router-dom";

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
            console.log(values);
            navigate("/verification");
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
                className="w-full lg:w-8/12 flex flex-col mt-6 gap-6"
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

                <div className="relative">
                    <Button
                        disabled={
                            formik.errors.email ||
                            formik.errors.password ||
                            !formik.touched.email
                        }
                        type={"submit"}
                    >
                        Sign Up
                    </Button>
                </div>
            </form>

            <div className="flex w-full justify-center gap-2 text-sm">
                <p>Already have an account ?</p>
                <Link to={"/login"} className="text-primary hover:underline">
                    Login In !
                </Link>
            </div>
        </section>
    );
}
