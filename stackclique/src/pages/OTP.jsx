import { useRef, useEffect, useState } from "react";
import { Button } from "../components/ui";
import axios from "axios";

function Input({ id, inputRef }) {
    return (
        <input
            type="number"
            id={id}
            className="outline-none border  h-[2.5rem] w-[3rem] md:h-[3.5rem] md:w-[4.5625rem] text-center rounded-[0.5rem]  border-darkGrey disabled:bg-white disabled:border-darkGrey focus:border-green"
            ref={inputRef}
            maxLength="1"
        />
    );
}

export default function OTP() {
    const formRef = useRef(null);
    const input1Ref = useRef(null);
    const [errMessage, setErrMessage] = useState(false);
    const defaultOtp = "1234";

    const inputValues = [];
    useEffect(() => {
        const form = formRef?.current;
        const children = Array.from(form.children);
        children.forEach((child) => {
            child.value = "";
            child.disabled = true;
        });
        input1Ref.current.disabled = false;
        input1Ref.current?.focus();
    }, []);

    const handleOnKeyUp = (e) => {
        const keyCode = e.keyCode || e.which;

        const form = formRef?.current;
        const children = Array.from(form.children);
        const focusElement = document.activeElement;
        const index = children.findIndex((child) => child === focusElement);
        const currentIndexValue = children[index].value;

        if (children[index].value != "" && index < children.length - 1) {
            inputValues[index] = currentIndexValue;
            children[index + 1].disabled = false;
            children[index + 1].focus();
            children[index].disabled = true;
        }
        if (index == children.length - 1 && currentIndexValue != "") {
            inputValues[index] = currentIndexValue;
            children[index].disabled = true;
            submitOtp();
        }
        if (keyCode === 8 && index > 0 && index <= children.length) {
            // when backspace is clicked
            children[index].value = "";
            children[index].disabled = true;
            children[index - 1].disabled = false;
            children[index - 1].value = "";
            children[index - 1].focus();
        }


        // Area I modification pls correct where necessary
        function submitOtp() {

            const enteredOtp = inputValues.join('');

            //API call to validate the OTP
            axios
              .post('http://localhost:8000/api/verf-user', { otp: enteredOtp })
              .then((response) => {
                console.log(response.data.user);

                // Handle successfulresponse
                if (response.data.success) {
                  // redirecting the user here
                  setErrMessage(false);
                } else {
                  // Indicating incorrect OTP
                  setErrMessage(true);
                }

                // Reset input fields
                children.forEach((child) => {
                  child.value = '';
                  child.disabled = true;
                });

                children[0].disabled = false;
                children[0].focus();
              })
              .catch((error) => {
                console.error('API request failed:', error);

                // Handle APIfailure
                setErrMessage(true); // Seterromessage

                // Reset inputfields
                children.forEach((child) => {
                  child.value = '';
                  child.disabled = true;
                });

                children[0].disabled = false;
                children[0].focus();
              });

            // if (defaultOtp != inputValues.join("")) {
            //     setErrMessage(true);
            //     children.forEach((child) => {
            //         child.value = "";
            //         child.disabled = true;
            //     });
            //     children[0].disabled = false;
            //     children[0].focus();
            // } else {
            //     setErrMessage(false);
            // }
        }
    };

    return (
        <div className="font-poppins">
            <h1 className="text-primary text-[2.5rem] lg:text-[3rem] font-[600] mt-4">
                Verification Code
            </h1>
            <p className="text-black">
                A verification code has been sent to samuel6@gmail.com
            </p>
            <div className="">
                <form
                    ref={formRef}
                    onKeyUp={handleOnKeyUp}
                    className=" mx-auto relative flex gap-4 mt-[3.25rem]"
                >
                    <Input inputRef={input1Ref} />
                    <Input />
                    <Input />
                    <Input />
                </form>

                {errMessage && (
                    <p className=" mt-2 text-sm text-red-600">
                        OTP is not correct, Try Again
                    </p>
                )}
                <div className="flex gap-6 mt-[2.63rem]">
                    <p>Didn’t recieve any code ?</p>
                    <button type="button" className="text-primary">
                        Resend
                    </button>
                </div>
                <div className="flex md:w-[70%] gap-2 mt-[2.6rem]">
                    <Button type={"button"}>Verify</Button>
                    <Button type={"button"} bgWhite>
                        Cancel
                    </Button>
                </div>
            </div>
            <p className="mt-4">use 1234 for testing</p>
        </div>
    );
}
