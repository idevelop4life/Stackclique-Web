import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import OtpInput from "react-otp-input";
import { Backdrop, Button, Loader } from "../components/ui";
import AuthGraphics from "../components/Layout/AuthGraphics";
import "../styles/css/app_root.css";
import styles from "../styles/css/app.module.css";
import axios from "axios";

export default function OTP() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1);

    const [errMessage, setErrMessage] = useState(false);
    const [loading, setloading] = useState(false);

    function submitOtp() {
        //API call to validate the OTP
        setloading(true);
        axios
            .post("http://localhost:8000/api/verf-user", {
                otp,
            })
            .then((response) => {
                console.log(response.data.user);

                // Handle successfulresponse
                if (response.data.success) {
                    // redirecting the user here
                    setErrMessage(false);
                    setStep(2);
                } else {
                    // Indicating incorrect OTP
                    setOtp("");
                    setErrMessage(true);
                }
            })
            .catch((error) => {
                console.error("API request failed:", error);

                // Handle APIfailure
                setErrMessage(true); // Seterromessage
            })
            .finally(() => setloading(false));
    }

    return (
        <>
            <section
                className={`col_xxlg_5 col_xlg_5 col_lg_5 col_md_12 col_sm_12`}
            >
                {step === 1 ? (
                    <div className={styles.auth_form}>
                        <div className={styles.form_header}>
                            <h1 className="text-primary-500 text-[2.5rem] lg:text-[3rem] font-[600] mt-4">
                                Verification Code
                            </h1>
                            <p className="text-black">
                                A verification code has been sent to your email
                                account
                            </p>
                        </div>
                        <div className="">
                            <div className="text-center">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={
                                        <span className="mx-1"></span>
                                    }
                                    renderInput={(props) => (
                                        <input {...props} />
                                    )}
                                    inputStyle="otp-input"
                                    containerStyle="otp-container justify-evenly"
                                    inputType="tel"
                                    shouldAutoFocus
                                />
                            </div>

                            {errMessage && (
                                <p className=" mt-2 text-sm text-red">
                                    OTP is not correct, Try Again
                                </p>
                            )}
                            <div className="flex gap-6 mt-[2.63rem]">
                                <p>Didn’t recieve any code ?</p>
                                <button type="button" className="redirect_btn">
                                    Resend
                                </button>
                            </div>
                            <div className="flex  gap-2 mt-[2.6rem]">
                                <Button
                                    type={"button"}
                                    size="medium"
                                    rounded={"lg"}
                                    onClick={submitOtp}
                                >
                                    Verify
                                </Button>
                                <Button
                                    type={"button"}
                                    size="medium"
                                    rounded={"lg"}
                                    variant={"outlined"}
                                    onClick={() => navigate("/sign-up")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                        {loading && (
                            <Backdrop>
                                <Loader />
                            </Backdrop>
                        )}
                    </div>
                ) : (
                    <Success />
                )}
            </section>
            <section
                className={`col_xxlg_5 col_xlg_5 col_lg_7 col_md_12 col_sm_12`}
            >
                <AuthGraphics type="verify" />
            </section>
        </>
    );
}

// component to display success message

const pathVariants = {
    initial: { opacity: 0, pathLength: 0 },
    final: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut",
        },
    },
};
function Success() {
    return (
        <>
            <div className="relative flex flex-col items-center font-inter gap-4">
                <div className="w-[12rem] height-[12rem] mt-8 flex items-center justify-center">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#7E0772"
                            strokeWidth="5"
                            fill="white"
                            variants={pathVariants}
                            initial="initial"
                            animate="final"
                        />
                        <motion.path
                            d="M25 50 L45 70 L75 35"
                            stroke="#7E0772"
                            strokeWidth="5"
                            fill="none"
                            variants={pathVariants}
                            initial="initial"
                            animate="final"
                        />
                    </svg>
                </div>
                <p className="font-[600] text-center">
                    Email verified successfully
                </p>
                <Link
                    to="/login"
                    className="bg-primary text-primary-500 rounded-md py-2 px-4 font-[700] underline"
                >
                    login
                </Link>
            </div>
        </>
    );
}
