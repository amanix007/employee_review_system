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

function Alert(title, msg, type, time = 5000) {
  swal({
    title: title,
    text: msg,
    icon: type,
    buttons: false,
    timer: time,
  });
}

/* AUTH */

export async function REGISTRATION(data) {
  try {
    let result = await axios.post("/v1/auth/signup", data);
    // Alert("Success", result.data.message, "success");
    return result;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      // Alert("Oops!", error.response.data.message, "error");
      return error.response;
    }
    console.log("Error", error);
  }
}

export async function LOGIN(param) {
  try {
    let result = await axios.post("/v1/auth/login", param);
    // console.log(result);
    // Alert("Success", result.data.message, "success");
    // console.log(result);
    return result.data.response;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // that falls out of the range of 2xx
      console.log("Request Error:", error.response);
      // Alert("Oops!", error.response.data.message, "error");
      return error.response;
    }
    console.log("Error", error);
  }
}

export async function SOCIAL_LOGIN(param, type) {
  try {
    let result = type === "facebook" ? await axios.post("/v1/auth/facebook", param) : await axios.post("/v1/auth/google", param);
    if (!result.data.error) {
      Alert("Success", result.data.message, "success");
      return result.data.response;
    }
    Alert("Oops!", result.data.message, "error");
  } catch (error) {
    console.log(error);
    Alert("Oops!", "Seems like we couldn't fetch the info", "error");
  }
}

/* USER PROFILE */

export async function FORGET_PASSWORD(param) {
  try {
    let result = await axios.post("/v1/user/forgot-password", param);
    if (!result.data.error) {
      // Alert("Success", result.data.message, "success");
      return result.data;
    }
    // Alert("Oops!", result.data.message, "error");
  } catch (error) {
    return error;
  }
}

export async function CHANGE_PASSWORD(data) {
  axios.defaults.headers.put["accessToken"] = localStorage.getItem("accessToken");

  try {
    let result = await axios.put("/v1/user/change-password", data);
    if (!result.data.error) {
      Alert("Success", "Password Change Successfull, Log In Again", "success");
      localStorage.clear();
      sessionStorage.clear();
      setTimeout(() => {
        window.location = "/login";
      }, 1000);

      return result.data.response;
    } else {
      if (result.data.response.code === 498) {
        console.log(result.data);
        localStorage.clear();
        localStorage.setItem("prevURL", "/v1/profile");
      }
    }
    Alert("Oops!", result.data.message, "error");
  } catch (error) {
    console.log(error.response);
    Alert("Oops!", error.response.data.message, "error");
  }
}

export async function RESET_PASSWORD(data) {
  try {
    let result = await axios.post("/v1/user/reset-password", data);
    Alert("Success", result.data.message, "success");
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

export async function GET_PROFILE() {
  axios.defaults.headers.get["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.get("/v1/user/user-info");
    // console.log(result);
    if (result) {
      localStorage.setItem("profile", JSON.stringify(result.data.response));
      return result.data.response;
    }
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xxZZZZZZZ
      localStorage.removeItem("profile");
      localStorage.removeItem("accessToken");
      // window.location = "/login";
      console.log("Request Error:", error.response);

    }
    console.log("Error", error);
  }
}

export async function UPDATE_PROFILE(data) {
  axios.defaults.headers.patch["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.patch("/v1/user/update-profile", data);
    if (!result.data.error) {
      Alert("Success", result.data.message, "success");
      return result.data.response;
    } else {
      if (result.data.response.code === 498) {
        // console.log(result.data);
        localStorage.clear();
        localStorage.setItem("prevURL", "/v1/profile");
      }
    }
    Alert("Oops!", result.data.message, "error");
  } catch (error) {
    console.log(error);

    Alert("Oops!", "Seems like we couldn't fetch the info", "error");
  }
}

export async function UPDATE_AVATAR(avatar) {
  axios.defaults.headers.put["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.put("/v1/user/update-avatar?avatar=" + avatar);
    // console.log(result);
    localStorage.setItem("profile", JSON.stringify(result.data.response));
    return result.data.response;
  } catch (error) {
    if (error.response) {
      // that falls out of the range of 2xx
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
      }
      localStorage.clear();
      console.log("Request Error:", error.response);
    }
    console.log("Error", error);
  }
}

export async function ADD_NEW_TRAVELLER(data) {
  axios.defaults.headers.post["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.post("/v1/travel-details/add-new-traveler", data);
    Alert("Success", result.data.message, "success");
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

export async function UDATE_TRAVELLER(data) {
  axios.defaults.headers.put["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.put("/v1/user/update-quick-pick", data);
    Alert("Success", result.data.message, "success");
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

export async function TRIPCOIN_HISTORY() {
  axios.defaults.headers.get["accessToken"] = localStorage.getItem("accessToken");
  try {
    let result = await axios.get("/v1/rewards/tripcoin-summary");
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

export async function FIND_COUNTRIES(country) {
  try {
    let result = await axios.get("/v1/country?name=" + country);
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
