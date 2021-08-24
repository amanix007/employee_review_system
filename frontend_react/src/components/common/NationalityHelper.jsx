import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { FIND_COUNTRIES } from "../../Request/ProfileApi";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined" ? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) : isoCode;
}

export default class NationalityHelper extends React.Component {
  state = {
    single: {
      code: "",
      label: "",
    },
    countries: [],
  };

  setSingle = () => {
    function search(nameKey, myArray) {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].value === nameKey) {
          return myArray[i];
        }
      }
    }

    let single = search(this.props.value, this.state.countries);
    this.setState({ single });
  };

  handleChange = (e, value) => {
    if (value) {
      this.props.onChange(value.value);
    } else {
      this.props.onChange("");
    }
    this.setState({
      single: value,
    });
  };

  componentDidMount() {
    this.fetchAndSaveCountries();
    // if (this.props.value) {
    //     let search = (nameKey, myArray) => {
    //         console.log(nameKey, myArray);
    //         for (let i = 0; i < myArray.length; i++) {
    //             if (myArray[i].value === nameKey) {
    //                 return myArray[i];
    //             }
    //         }
    //     };
    //     let single = search(this.props.value, this.state.countries);
    //     this.setState({ single });
    // } else {
    //     this.setState({
    //         single: {
    //             value: "BD",
    //             label: "Bangladesh",
    //         }
    //     }, () => {
    //         this.props.onChange('BD');
    //     })
    // }
  }

  fetchAndSaveCountries = async () => {
    if (localStorage.getItem("countries")) {
      let countries = localStorage.getItem("countries");
      countries = JSON.parse(countries);

      let modiFiedCountries = countries.map((suggestion) => ({
        value: suggestion.code,
        label: suggestion.name,
      }));
      this.setState(
        {
          countries: modiFiedCountries,
        },
        () => {
          this.setSingle();
        }
      );
    } else {
      let countries = await FIND_COUNTRIES("");
      if (countries) {
        let modiFiedCountries = countries.map((suggestion) => ({
          value: suggestion.code,
          label: suggestion.name,
        }));
        this.setState(
          {
            countries: modiFiedCountries,
          },
          () => {
            this.setSingle();

            countries = JSON.stringify(countries);
            localStorage.setItem("countries", countries);
          }
        );
      }
    }
  };

  render() {
    // const classes = useStyles();
    let { countries } = this.state;
    return (
      <div className={" NationalityHelper"}>
        <Autocomplete
          id={"country-select-demo" + this.props.index}
          disableClearable={true}
          options={countries}
          // classes={{
          //     option: classes.option,
          // }}
          className=""
          value={this.state.single}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>
              <span className="mr-1">{countryToFlag(option.value)}</span>
              {option.label} ({option.value})
            </React.Fragment>
          )}
          onChange={this.handleChange}
          closeIcon={null}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Nationality"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
              error={this.props.error}
              helperText={this.props.helperText}
            />
          )}
        />
      </div>
    );
  }
}
