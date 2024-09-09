"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "First Name must be at least 2 characters")
        .required("First Name is required"),
    lastName: Yup.string()
        .min(2, "Last Name must be at least 2 characters")
        .required("Last Name is required"),
    login: Yup.string()
        .min(4, "Login must be at least 4 characters")
        .required("Login is required"),
});

const RegisterForm = () => {
    const router = useRouter();

    // Form submit handler
    const handleRegister = (values) => {
        console.log("Registration Data:", values);
        // Redirect to profile/poster after successful form submission
        router.push("/profile/poster");
    };

    return (
        <div className="register-form">
            <h1>Getpin Register</h1>
            <Formik
                initialValues={{ firstName: "", lastName: "", login: "" }}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className={errors.firstName && touched.firstName ? "input-error" : ""}
                            />
                            <ErrorMessage name="firstName" component="div" className="error-message" />
                        </div>

                        <div>
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className={errors.lastName && touched.lastName ? "input-error" : ""}
                            />
                            <ErrorMessage name="lastName" component="div" className="error-message" />
                        </div>

                        <div>
                            <Field
                                type="text"
                                name="login"
                                placeholder="Login"
                                className={errors.login && touched.login ? "input-error" : ""}
                            />
                            <ErrorMessage name="login" component="div" className="error-message" />
                        </div>

                        <button type="submit">Register</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;
