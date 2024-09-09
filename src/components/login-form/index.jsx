"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    login: Yup.string()
        .min(3, "Login must be at least 3 characters")
        .required("Login is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const LoginForm = () => {
    const router = useRouter();

    const handleLogin = (values) => {
        console.log("Login Data:", values);
        // You can add your login logic here, such as API calls
        router.push('/dashboard');  // Redirect to dashboard or any page on success
    };

    return (
        <div className="login-content">
            <h1>Getpin</h1>
            <Formik
                initialValues={{ login: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <Field
                                type="text"
                                name="login"
                                placeholder="Login"
                                className={errors.login && touched.login ? "input-error" : ""}
                            />
                            <ErrorMessage name="login" component="div" className="error-message" />
                        </div>

                        <div>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Parol"
                                className={errors.password && touched.password ? "input-error" : ""}
                            />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>

                        <button type="submit">Войти</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
