import swal from "sweetalert";
export let isLoggedIn = () => {
  if (!localStorage.getItem("accessToken")) {
    Alert("User not logged in", "User have to be logged in to make this request", "error");
    return false;
  } else {
    return true;
  }
};
export const NewInputDesignOBJ = {
  notchedOutline: "stnotchedOutline",
  input: "stInput",
};
export const DoMMMYYYY = "Do MMM YYYY";
export const DDMMMYY = "DD MMM YY";

export const YYYYMMDD = "YYYY-MM-DD";

export let Alert = (title: string, msg: string, type: string, time = 5000) => {
  swal({
    title: title,
    text: msg,
    icon: type,
    // buttons: false,
    timer: time,
  });
};

export const InputProps = {
  classes: {
    focused: "st-input-focus",
  },
  autoComplete: "new-password",
};

export let svgProps = {
  cacheRequests: true,
  uniquifyIDs: true,
};

// export let kFormatter = (num: number): string => {
//   let string = (Math.abs(num) > 999) ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
//   return string;
// };

export let kFormatter = (num: number): any => {
  if (Math.abs(num) > 999) {
    let val: any = (Math.abs(num) / 1000).toFixed(1);
    let val2 = Math.sign(num);
    let number = val2 * val;
    return number.toString() + "k";
  } else {

    return (Math.sign(num) * Math.abs(num)).toString() + "k";
  }
};

export let between = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const HotelTitleNames = ["Mr", "Ms", "Mrs", "Mstr"];

export const removeSpace = (v: string) => v.replace(/\s/g, "");



export const titleBasedGender = (title: string) => {
  let gender = "";
  if (title === "Mr") {
    gender = "Male";
  } else if (title === "Ms" || title === "Mrs" || title === "Miss") {
    gender = "Female";
  } else {
    gender = "";
  }

  return gender;

}
export const genderBasedTitle = (gender: string) => {
  let Title = "";
  if (gender === "Male") {
    Title = "Mr";
  } else if (gender === "Female") {
    Title = "Ms";
  } else {
    Title = "";
  }

  return Title;

}

export const negativeToZero = (v: number) => {
  if (Math.sign(v) === -1) {
    v = 0;
  } else {
    v = v;
  }

  return v;
}