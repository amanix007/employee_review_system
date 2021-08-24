
import axios from "axios";
import swal from "sweetalert";
import _manifest from "../_manifest";

if (localStorage.getItem("accessToken")) {
    axios.defaults.headers.post["accessToken"] = localStorage.getItem("accessToken");
    axios.defaults.headers.get["accessToken"] = localStorage.getItem("accessToken");
    axios.defaults.headers.put["accessToken"] = localStorage.getItem("accessToken");
    axios.defaults.headers.patch["accessToken"] = localStorage.getItem("accessToken");
    axios.defaults.headers.common["accessToken"] = localStorage.getItem("accessToken");
}

axios.defaults.baseURL = _manifest.apiBaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Purpose of this,  if the api is down for time being,
//  and  we need to continue our development work

function Alert(title: string, msg: string, type: string, time: number = 5000) {
    swal({
        title: title,
        text: msg,
        icon: type,
        buttons: undefined,
        timer: time,
    });
}


async function VERIFY_YOUR_MAIL(params: any) {
    try {
        let result = await axios.post("/v1/auth/verify-email-address", params);
        return result.data.response;
    } catch (error) {
        if (error.response) {
            // that falls out of the range of 2xx
            console.log("Request Error:", error.response);
            // Alert("Oops!", error.response.data.message, "error");
        }
        console.log("Error", error);
    }
    return false;
}




export default {
    VERIFY_YOUR_MAIL
};