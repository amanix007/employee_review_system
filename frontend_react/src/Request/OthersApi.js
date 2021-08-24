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

function Alert(title, msg, type, time = 5000) {
  swal({
    title: title,
    text: msg,
    icon: type,
    buttons: false,
    timer: time,
  });
}

export async function GET_CITIES(params) {
  try {
    if (sessionStorage.getItem("GET_CITIES_" + params.toUpperCase()) && JSON.parse(sessionStorage.getItem("GET_CITIES_" + params.toUpperCase()))) {
      return JSON.parse(sessionStorage.getItem("GET_CITIES_" + params.toUpperCase()));
    }
    let result = await axios.get("/v1/tour/city/search?keyword=" + params);
    sessionStorage.setItem("GET_CITIES_" + params.toUpperCase(), JSON.stringify(result.data.response));
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

export async function SAFE_TRAVEL_INFO(slug) {
  axios.defaults.headers.get["X-Access-Token"] = "99a8e32b-1938-4b9d-84af-685aae98b0d6";
  try {
    let result = await axios.get("https://api.traveladviceapi.com/search/" + slug);
    return result.data;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function LEADERBOARD_LIST() {
  axios.defaults.headers.get["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.get("/v1/wheel/leader-board");
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

export async function REWARDS_LIST() {
  axios.defaults.headers.get["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.get("/v1/wheel/rewards");
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

export async function UPLOAD_FILE(data) {
  try {
    let headers = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    };

    // Alert("Please wait", "", "warning");

    let result = await axios.post("/v1/upload-file", data, headers);
    if (!result.data.error) {
      Alert("Upload Success", result.data.message, "success");
      return result.data.response;
    }
    // Alert("Oops!", result.data.message, "error");
  } catch (error) {
    console.log(error);
    Alert("Oops!", "Seems like we couldn't fetch the info", "error");
  }
}

export async function UPLOAD_AVATAR(data) {
  try {
    axios.defaults.headers.post["accessToken"] = localStorage.getItem("accessToken");
    let headers = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      },
    };

    // Alert("Please wait", "", "warning");

    let result = await axios.post("/v1/user/update-avatar", data, headers);
    if (!result.data.error) {
      Alert("Upload Success", result.data.message, "success");
      return result.data.response;
    }
    // Alert("Oops!", result.data.message, "error");
  } catch (error) {
    console.log(error);
    Alert("Oops!", "Seems like we couldn't fetch the info", "error");
  }
}

export async function TRACK_VISA(data) {
  try {
    let result = await axios.post("/v1/visa/tracking", data);
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

export async function GET_SHARE_LINK(params) {
  try {
    let result = await axios.post("/v1/get-share-link", params);
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

export async function VERIFY_YOUR_MAIL(params) {
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

export async function GET_PROMOTION_MODAL() {
  try {
    if (sessionStorage.getItem("DASHBOARD_BANNER") && JSON.parse(sessionStorage.getItem("DASHBOARD_BANNER"))) {
      return JSON.parse(sessionStorage.getItem("DASHBOARD_BANNER"));
    }

    let result = await axios.get("/v1/dashboard-banner");
    sessionStorage.setItem("DASHBOARD_BANNER", JSON.stringify(result.data.response));
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

export async function GET_INVOICE_URL(key) {
  try {
    let result = await axios.post("/v1/invoice-payment", { key });
    console.log("result:", result);
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

export async function SUBSCRIBE_WEB_NOTIFICATION(token) {
  try {
    let result = await axios.post("/v1/notification/subscription", token);
    console.log("result:", result);
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

export async function GET_CONTENT(url) {
  try {
    let result = await axios.get(url);
    return result.data;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      // Alert("Oops!", error.response.data.message, "error");
    }
    console.log("Error", error);
  }
}

export async function GET_OFFERS() {
  try {
    let result = await axios.get("v1/promotion/category?offset=0&limit=100");
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

export async function GET_OFFER_DATA(slug) {
  try {
    let result = await axios.get("v1/promotion/detail?slugUrl=" + slug);
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

export async function VALIDATE_COUPON(obj) {
  try {
    let result = await axios.post("/v1/coupon/validate/", obj);
    console.log("result:", result);
    Alert("Coupon Validated", result.data.message, "success", 2000);

    // result.data = {
    //   "code": "SUCCESS",
    //   "message": "Coupon is valid",
    //   "response": {
    //     "discount": 5500,
    //     "discountType": "Percentage",
    //     "withDiscount": "No",
    //     "gateway": [],
    //     "platform": "ShareTrip"
    //   }
    // }

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

export async function GET_PROMOTION() {
  try {
    let result = await axios.get("/v1/flight/promotion");

    if (!result.data.error) {
      return result.data.response;
    }
    Alert("Oops!", result.data.message, "error");
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
}


export async function SEND_ERROR_IN_SLACK(obj) {
  try {
    let result = await axios.post("https://hooks.slack.com/services/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", obj, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);

    }
    console.log("Error", error);
  }
}
