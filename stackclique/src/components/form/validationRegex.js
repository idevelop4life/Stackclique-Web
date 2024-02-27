import * as Yup from "yup";

export const loginSchema = Yup.object({
    email: Yup.string()
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "invalid email address",
        )
        .required("no email provided"),
    password: Yup.string()
        .required("No password provided")
        .min(4, "Password is too short - should be 4 chars minimum.")
        .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
});

export const SignUpSchema = Yup.object({
    username: Yup.string()
        .required("No username provided")
        .min(4, "username is too short - should be 4 chars minimum.")
        .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
    email: Yup.string()
        .required("No Email Provided")
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "invalid email address",
        ),

    password: Yup.string()
        .required("No password provided")
        .min(5, "Password is too short - should be 5 chars minimum.")
        .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
});

export const ContactUsSchema = Yup.object({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(25, "Too Long!")
        .required("Required"),
    lastName: Yup.string().min(2, "Too Short!").max(25, "Too Long!"),
    email: Yup.string().email("Invalid email addresss`").required("Required"),
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(
            /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
            "Invalid phone number",
        ),
    message: Yup.string().required(),
});
