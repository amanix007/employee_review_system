import React, { Component } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

export default class ComboBox extends Component {
  render() {
    let { type, countryValue, dataList, label, renderOption, onInputChange, getOptionLabel, loading, loadingText } = this.props;
    type = type ? type : "generic";
    return (
      <div className="AutoCompleteInput">
        <div className="icon">
          <i className={`mdi mdi-${this.props.icon}`} />
        </div>
        <Autocomplete
          className="auto-complete-elem"
          id="country-select-demo"
          style={{ width: 300 }}
          options={dataList}
          freeSolo
          onChange={this.props.onChange}
          autoHighlight
          getOptionLabel={getOptionLabel}
          renderOption={renderOption}
          defaultValue={countryValue}
          value={countryValue}
          // {...this.props}
          disableClearable
          loading={loading}
          loadingText={loadingText}
          renderInput={(params) => (
            <TextField
              onChange={onInputChange}
              {...params}
              label={label}
              variant="filled"
              inputProps={{
                ...params.inputProps,
                // autocomplete: 'new-password', // disable autocomplete and autofill
                autoComplete: "off",
              }}
            />
          )}
        />
      </div>
    );
  }
}
