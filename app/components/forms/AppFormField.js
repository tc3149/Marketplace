import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldValue, setFieldTouched, values, errors, touched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        //placeholder="Email"
        // icon="email"
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="email-address"
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)} // ensures the error messages dont appear until user has clicked out of email
        {...otherProps}
        // textContentType="emailAddress"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
