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

export async function GET_PACKAGES(params) {
  try {
    if (sessionStorage.getItem("GET_PACKAGES_" + params) && JSON.parse(sessionStorage.getItem("GET_PACKAGES_" + params))) {
      return JSON.parse(sessionStorage.getItem("GET_PACKAGES_" + params));
    }
    let result = await axios.get("/v1/package/list" + params);
    sessionStorage.setItem("GET_PACKAGES_" + params, JSON.stringify(result.data.response));
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

export async function GET_PACKAGE(params) {
  try {
    let result = await axios.get("/v1/package/detail" + params);
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

    let result = await axios.post("/v1/package/booking", obj);
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

export async function PACKAGE_CANCEL_BOOKING_REQUEST(requestObj) {
  try {
    let result = await axios.post("/v1/package/booking/cancel", requestObj);
    if (!result.data.error) {
      return result.data;
    }
    console.log(result);
  } catch (error) {
    Alert("Oops!", error.response.data.message, "error");
    console.log(error);
  }
}

export async function GET_PACKAGE_BOOKING_HISTORY(params) {
  try {
    let result = await axios.get("/v1/package/booking/history?" + params);
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

export async function GET_PACKAGE_BOOKING_DETAIL(params) {
  try {
    let result = await axios.get("/v1/package/booking/detail?bookingCode=" + params);
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

export async function PACKAGE_GROUP_REQUEST(requestObj) {
  try {
    let result = await axios.post("/v1/group-request/holiday/create", requestObj);
    if (!result.data.error) {
      return result.data;
    }
    console.log(result);
  } catch (error) {
    Alert("Oops!", error.response.data.message, "error");
    console.log(error);
  }
}

export async function GET_PACKAGE_CITIES(params) {
  try {
    if (sessionStorage.getItem("GET_PACKAGE_CITIES_" + params.toUpperCase()) && JSON.parse(sessionStorage.getItem("GET_PACKAGE_CITIES_" + params.toUpperCase()))) {
      return JSON.parse(sessionStorage.getItem("GET_PACKAGE_CITIES_" + params.toUpperCase()));
    }
    let result = await axios.get("/v1/package/city/search?keyword=" + params);
    sessionStorage.setItem("GET_PACKAGE_CITIES_" + params.toUpperCase(), JSON.stringify(result.data.response));
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
export async function GET_PACKAGE_POPULAR_CITIES() {
  try {
    if (sessionStorage.getItem("GET_POPULAR_CITIES") && JSON.parse(sessionStorage.getItem("GET_POPULAR_CITIES"))) {
      return JSON.parse(sessionStorage.getItem("GET_POPULAR_CITIES"));
    }
    let result = await axios.get("/v1/package/city/popular");
    sessionStorage.setItem("GET_POPULAR_CITIES", JSON.stringify(result.data.response));
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

export async function GET_RECOMMENDED_TOURS() {
  try {
    if (sessionStorage.getItem("GET_RECOMMENDED_TOURS") && JSON.parse(sessionStorage.getItem("GET_RECOMMENDED_TOURS"))) {
      setTimeout(() => {
        return JSON.parse(sessionStorage.getItem("GET_RECOMMENDED_TOURS"));
      }, 500);
    }
    let result = await axios.get("/v1/package/list?&offset=0&limit=12");
    sessionStorage.setItem("GET_RECOMMENDED_TOURS", JSON.stringify(result.data.response));
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

export async function GET_LIGHTENING_DEALS() {
  try {
    if (sessionStorage.getItem("GET_LIGHTENING_DEALS") && JSON.parse(sessionStorage.getItem("GET_LIGHTENING_DEALS"))) {
      setTimeout(() => {
        return JSON.parse(sessionStorage.getItem("GET_LIGHTENING_DEALS"));
      }, 500);
    }
    let result = await axios.get("/v1/package/lighting-deals?offset=0&limit=10");
    sessionStorage.setItem("GET_LIGHTENING_DEALS", JSON.stringify(result.data.response));
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

export async function GET_POPULAR_DESTINATIONS() {
  try {
    if (sessionStorage.getItem("GET_POPULAR_DESTINATIONS") && JSON.parse(sessionStorage.getItem("GET_POPULAR_DESTINATIONS"))) {
      setTimeout(() => {
        return JSON.parse(sessionStorage.getItem("GET_POPULAR_DESTINATIONS"));
      }, 500);
    }
    let result = await axios.get("/v1/package/city/popular-destination?offset=0&limit=9");
    sessionStorage.setItem("GET_POPULAR_DESTINATIONS", JSON.stringify(result.data.response));
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

export async function GET_BEST_SELLING_TOURS() {
  try {
    if (sessionStorage.getItem("GET_BEST_SELLING_TOURS") && JSON.parse(sessionStorage.getItem("GET_BEST_SELLING_TOURS"))) {
      return JSON.parse(sessionStorage.getItem("GET_BEST_SELLING_TOURS"));
    }
    let result = await axios.get("/v1/package/list?&offset=1&limit=12");
    sessionStorage.setItem("GET_BEST_SELLING_TOURS", JSON.stringify(result.data.response));
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
