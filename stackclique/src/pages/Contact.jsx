import { TextField } from "../components/form";
import { useFormik } from "formik";
import { ContactUsSchema } from "../components/form/validationRegex";
import { Button } from "../components/ui";
import MetaTags from "../components/seo/MetaTags";

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: ContactUsSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <MetaTags
                title={`Contact Us Now - Stackclique`}
                desc="Do you have an enquiry or offer? Contact us and well make things work out."
            />
            <section className="w-full min-h-screen mt-28">
                <div className="bg-gradient-to-r from-[#C326B3] via-[#5D1656] to-[#5C0052] w-full h-60 flex items-center justify-center">
                    <p className="text-white text-4xl">
                        Stackclique Help Centre{" "}
                    </p>
                </div>
                <div className="flex flex-col w-full gap-6 mt-6 xl:max-w-[30%] md:max-w-[50%] mx-auto px-6">
                    <h1 className="flex items-center justify-center md:text-3xl text-2xl">
                        Hello! How May We Help You
                    </h1>
                    <form
                        action=""
                        className="space-y-8 my-10"
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            label={"FirstName"}
                            placeholder={"Enter Your Firstname"}
                            id={"firstName"}
                            name={"firstName"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.firstName &&
                                formik.errors.firstName &&
                                formik.errors.firstName
                            }
                            type={"text"}
                        />
                        <TextField
                            label={"LastName"}
                            placeholder={"Enter Your Lastname"}
                            id={"lastName"}
                            name={"lastName"}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.lastName &&
                                formik.errors.lastName &&
                                formik.errors.lastName
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
                                formik.touched.phone &&
                                formik.errors.phone &&
                                formik.errors.phone
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
                        <textarea
                            name="message"
                            placeholder="Your message"
                            className={formik.errors.message ? "error" : null}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            rows="6"
                            cols={72}
                        />
                        {formik.errors.message ? (
                            <span className=" text-red">
                                {formik.errors.message}
                            </span>
                        ) : null}
                        <Button
                            className="bg-gradient-to-r from-[#C326B3] via-[#5D1656] to-[#5C0052] p-6 w-full flex items-center justify-center text-white text-2xl py-4 rounded-2xl"
                            // disabled={
                            //     Object.entries(formik.errors).length > 0 ||
                            //     !formik.values.email ||
                            //     !formik.values.firstName ||
                            //     !formik.values.lastName ||
                            //     !formik.values.phone ||
                            //     !formik.values.message
                            // }
                            type={"submit"}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </section>
        </>
    );
}
