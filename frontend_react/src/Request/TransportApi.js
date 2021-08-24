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

export async function GET_TRANSPORTS(params) {
  try {
    if (sessionStorage.getItem("GET_TRANSFER_" + params) && JSON.parse(sessionStorage.getItem("GET_TRANSFER_" + params))) {
      return JSON.parse(sessionStorage.getItem("GET_TRANSFER_" + params));
    }
    let result = await axios.get("/v1/transfer/list" + params);
    sessionStorage.setItem("GET_TRANSFER_" + params, JSON.stringify(result.data.response));
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

export async function GET_TRANSPORT(params) {
  try {
    let result = await axios.get("/v1/transfer/detail" + params);
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

    obj.bookingCurrency = "BDT";

    let result = await axios.post("/v1/transfer/booking", obj);
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

export async function GET_TRANSPORT_BOOKING_HISTORY(params) {
  try {
    let result = await axios.get("/v1/transfer/booking/history?" + params);
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

export async function TRANPORT_CANCEL_BOOKING_REQUEST(requestObj) {
  try {
    let result = await axios.post("/v1/transfer/booking/cancel", requestObj);
    if (!result.data.error) {
      return result.data;
    }
    console.log(result);
  } catch (error) {
    Alert("Oops!", error.response.data.message, "error");
    console.log(error);
  }
}

export async function GET_TRANSPORT_BOOKING_DETAIL(params) {
  try {
    let result = await axios.get("/v1/transfer/booking/detail?code=" + params);
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

export async function GET_TRANSFER_CITIES(params) {
  try {
    if (sessionStorage.getItem("GET_TRANSFER_CITIES_" + params.toUpperCase()) && JSON.parse(sessionStorage.getItem("GET_TRANSFER_CITIES_" + params.toUpperCase()))) {
      return JSON.parse(sessionStorage.getItem("GET_TRANSFER_CITIES_" + params.toUpperCase()));
    }
    let result = await axios.get("/v1/transfer/city/search?keyword=" + params);
    sessionStorage.setItem("GET_TRANSFER_CITIES_" + params.toUpperCase(), JSON.stringify(result.data.response));
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
