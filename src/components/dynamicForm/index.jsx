/* eslint-disable no-unused-vars */
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const smallForm = Yup.object().shape({
  fname: Yup.string().required("First Name is required"),
  lname: Yup.string().required("Last Name is required"),
});

const fullFormValidationSchema = Yup.object().shape({
  fname: Yup.string().required("First Name is required"),
  lname: Yup.string().required("Last Name is required"),
  technology: Yup.string().required("Technology is required"),
  companyName: Yup.string().required("Company Name is required"),
});

const initialValues = {
  fname: "",
  lname: "",
  technology: "",
  companyName: "",
  isValidate: false,
};

const DynamicForm = () => {
  const navigate = useNavigate();
  const [isValidateFullForm, setIsValidateFullForm] = useState(false);

  useEffect(() => {}, [isValidateFullForm]);

  const handleSubmit = (values) => {
    if (values) {
      navigate("watch-page");
    }
  };

  return (
    <>
      <div className="bg-common-bg min-h-screen flex items-center justify-center">
        <div className="lg:w-1/3 sm:w-full md:w-full sm:p-4">
          <Paper elevation={3} className="p-5">
            <h1 className="text-center text-3xl font-bold">
              Fill up form to see luxury watches
            </h1>
            <div className="p-5">
              <Formik
                initialValues={initialValues}
                validationSchema={
                  isValidateFullForm ? fullFormValidationSchema : smallForm
                }
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => handleSubmit(values)}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  values,
                  setFieldValue,
                }) => {
                  return (
                    <Form className="flex flex-col gap-4">
                      <TextField
                        id="standard-basic"
                        label="First Name"
                        variant="standard"
                        name="fname"
                        value={values?.fname}
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched?.fname && errors?.fname}
                        helperText={
                          errors?.fname && touched?.fname ? errors?.fname : ""
                        }
                      />
                      <TextField
                        id="standard-basic"
                        label="Last Name"
                        variant="standard"
                        name="lname"
                        value={values?.lname}
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched?.lname && errors?.lname}
                        helperText={
                          errors?.lname && touched?.lname ? errors?.lname : ""
                        }
                      />
                      {console.log(touched, "touched")}
                      <FormControlLabel
                        control={<Checkbox checked={values.isValidate} />}
                        label="Is validate"
                        name="isValidate"
                        onChange={(e) => {
                          console.log(e.target.value, "values");
                          setFieldValue("isValidate", e.target.checked);
                          setIsValidateFullForm(e.target.checked);
                        }}
                      />
                      <div className="flex gap-3">
                        <TextField
                          id="standard-basic"
                          label="Technology"
                          variant="standard"
                          name="technology"
                          value={values?.technology}
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched?.technology && errors?.technology}
                          helperText={
                            errors?.technology && touched?.technology
                              ? errors?.technology
                              : ""
                          }
                        />
                        <TextField
                          id="standard-basic"
                          label="Company Name"
                          variant="standard"
                          name="companyName"
                          value={values?.companyName}
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched?.companyName && errors?.companyName}
                          helperText={
                            errors?.companyName && touched?.companyName
                              ? errors?.companyName
                              : ""
                          }
                        />
                      </div>
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};
export default DynamicForm;
