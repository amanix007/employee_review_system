import axios from "axios";
import swal from "sweetalert";
import _manifest from "../_manifest";

if (localStorage.getItem("accessToken")) {
  // axios.defaults.headers.post["accessToken"] = localStorage.getItem('accessToken');
  // axios.defaults.headers.get["accessToken"] = localStorage.getItem('accessToken');
  // axios.defaults.headers.put["accessToken"] = localStorage.getItem('accessToken');
  // axios.defaults.headers.patch["accessToken"] = localStorage.getItem('accessToken');
  axios.defaults.headers.common["accessToken"] = localStorage.getItem("accessToken");
}

axios.defaults.baseURL = _manifest.apiBaseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";

// Purpose of this,  if the api is down for time being,
//  and  we need to continue our development work

function Alert(title, msg, type, time = 5000) {
  swal({
    title: title,
    text: msg,
    icon: type,
    buttons: false,
    timer: time,
  });
}

export async function GET_VISA_GUIDE(param) {
  try {
    if (sessionStorage.getItem("GET_VISA_" + param) && JSON.parse(sessionStorage.getItem("GET_VISA_" + param))) {
      return JSON.parse(sessionStorage.getItem("GET_VISA_" + param));
    }
    let result = await axios.get("/v1/visa/visa-guide?name=" + param);
    sessionStorage.setItem("GET_VISA_" + param, JSON.stringify(result.data.response));
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
    }
    console.log("Error", error);
  }
}

export async function GET_VISA_COUNTRY() {
  try {
    if (sessionStorage.getItem("GET_VISA_COUNTRY") && JSON.parse(sessionStorage.getItem("GET_VISA_COUNTRY"))) {
      return JSON.parse(sessionStorage.getItem("GET_VISA_COUNTRY"));
    }
    let result = await axios.get("/v1/country");
    sessionStorage.setItem("GET_VISA_COUNTRY", JSON.stringify(result.data.response));
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
    }
    console.log("Error", error);
  }
}

export async function GET_VISA_SPECIFIC_COUNTRY(params) {
  try {
    if (sessionStorage.getItem("GET_VISA_SPECIFIC_COUNTRY" + params.toUpperCase()) && JSON.parse(sessionStorage.getItem("GET_VISA_SPECIFIC_COUNTRY" + params.toUpperCase()))) {
      return JSON.parse(sessionStorage.getItem("GET_VISA_SPECIFIC_COUNTRY" + params.toUpperCase()));
    }
    let result = await axios.get("v1/visa/country/search?keyword=" + params);
    sessionStorage.setItem("GET_VISA_SPECIFIC_COUNTRY" + params.toUpperCase(), JSON.stringify(result.data.response));
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function GET_VISA(param) {
  try {
    let result = await axios.get(`v1/visa/search${param}`);
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function BOOKING(obj) {
  try {
    /*if (localStorage.getItem('accessToken'))
            obj.accesstoken = localStorage.getItem("accessToken");*/

    let result = await axios.post("/v1/visa/booking", obj);
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function GET_VISA_BOOKING_HISTORY(params) {
  try {
    let result = await axios.get("/v1/visa/booking/history?" + params);
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      // Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function GET_VISA_BOOKING_DETAIL(params) {
  try {
    let result = await axios.get("/v1/visa/booking/detail?bookingCode=" + params);
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      // Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function VISA_CANCEL_BOOKING_REQUEST(requestObj) {
  try {
    let result = await axios.post("/v1/visa/booking/cancel", requestObj);
    if (!result.data.error) {
      return result.data;
    }
    console.log(result);
  } catch (error) {
    Alert("Oops!", error.response.data.message, "error");
    console.log(error);
  }
}

export async function POPULAR_COUNTRY_VISA_LIST(requestObj) {
  try {
    let result = await axios.get(`/v1/visa/popular?offset=${requestObj.offset}&limit=${requestObj.limit}&nationality=${requestObj.nationality}`);
    if (!result.data.error) {
      return result.data.response;
    }
    console.log(result);
  } catch (error) {
    Alert("Oops!", error.response.data.message, "error");
    console.log(error);
  }
}
