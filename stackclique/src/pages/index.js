export { default as Login } from "./Login";
export { default as SignUp } from "./SignUp";
export { default as OTP } from "./OTP";
export { default as Home } from "./Home";
export { default as AboutUs } from "./AboutUs";
import axios from "axios";

axios.get('http://localhost:8000/sanctum/csrf-cookie', {withCredentials: true});
