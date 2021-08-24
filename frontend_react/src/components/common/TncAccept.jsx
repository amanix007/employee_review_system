import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FormHelperText } from "@material-ui/core";

export default function TncAccept({ tnc, changeTnc, submitpressed }) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedB}
            checked={tnc}
            onChange={(e) => changeTnc(e.target.checked)}
            name="checkedB"
            color="primary"
          />
        }
        label={
          <>
            I agree to the{" "}
            <a href="/terms" target="_blank">
              Terms & Condition{" "}
            </a>{" "}
            and{" "}
            <a href="/privacy" target="_blank">
              Privacy Policy
            </a>
          </>
        }
      />
      {submitpressed && !tnc && <FormHelperText error={true}>Click to agree on the terms and conditions and privacy policy to continue with your booking.</FormHelperText>}
    </>
  );
}
