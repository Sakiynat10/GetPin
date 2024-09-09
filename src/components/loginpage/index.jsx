"use client";
import "./style.scss";
import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const LoginPage = () => {
    const [hideLogin, setHideLogin] = useState(false);
    const formRef = useRef(null);

    // This effect adds a listener for clicks outside the form
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                // If the click happens outside the form, hide the form
                setHideLogin(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={`login-content ${hideLogin ? "hide-login" : ""}`}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form ref={formRef} className={"login-group"}>
                        <h3>Вход</h3>

                        <label htmlFor="login">
                            <span>E-mail для подтверждения аккаунта</span>
                            <Field
                                name="email"
                                id="login"
                                type="text"
                                placeholder="e-mail"
                                className={errors.email && touched.email ? "input-error" : ""}
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </label>

                        <label htmlFor="password">
                            <span className={"login-title"}>Логин</span>
                            <Field
                                name="password"
                                id="password"
                                type="password"
                                placeholder="******"
                                className={errors.password && touched.password ? "input-error" : ""}
                            />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </label>

                        <button className="forget-password">Забыли пароль?</button>
                        <button type="submit" className="confirm">Далее</button>

                        <div className="enter">
                            <button>У вас нет аккаунта?</button>
                            <button className="enter-btn-2">Войти</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginPage;
