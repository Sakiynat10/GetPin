"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
    nameCompany: Yup.string()
        .min(2, "Company name must be at least 2 characters")
        .required("Company name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

const RegisterPage = () => {
    const [isChecked, setIsChecked] = useState(true);
    const router = useRouter();
    const [login, setLogin] = useState(true);

    const handleChangeType1 = () => {
        setIsChecked(true);
    };

    const handleChangeType2 = () => {
        setIsChecked(false);
    };

    const handleLogin = () => {
        setLogin(false);
    };

    const closeRegister = () => {
        setLogin(false);
    };

    const stayRegister = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={closeRegister} className={login ? "register-content" : "register-content hide-register"}>
            <Formik
                initialValues={{ nameCompany: "", email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                    router.push("/profile/poster");
                }}
            >
                {({ errors, touched }) => (
                    <Form onClick={stayRegister} className={"register-group"}>
                        <h3>Регистрация</h3>

                        <div className={"register-check-content"}>
                            <h4>Укажите тип лица</h4>
                            <div className={"register-check-type"}>
                                <div
                                    onClick={handleChangeType1}
                                    className={isChecked ? "type-left active" : "type-left"}
                                >
                                    <img src="/check-1.svg" alt="check-1" />
                                    Юридический
                                </div>
                                <div
                                    onClick={handleChangeType2}
                                    className={isChecked ? "type-right" : "type-right active"}
                                >
                                    <img src="/check-2.svg" alt="check-2" />
                                    Физический
                                </div>
                            </div>
                        </div>

                        <label htmlFor="nameCompany">
                            <span>Названия компания</span>
                            <Field
                                id={"nameCompany"}
                                name="nameCompany"
                                type="text"
                                placeholder={"LLC Getter"}
                                className={errors.nameCompany && touched.nameCompany ? "input-error" : ""}
                            />
                            <ErrorMessage name="nameCompany" component="div" className="error-message" />
                        </label>

                        <label htmlFor="email">
                            <span className={"email-title"}>E-mail для подтвреждения аккаунта</span>
                            <Field
                                id={"email"}
                                name="email"
                                type="email"
                                placeholder={"e-mail"}
                                className={errors.email && touched.email ? "input-error" : ""}
                            />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </label>

                        <button type="submit" className={"confirm"}>Далее</button>

                        <button className={"google-confirm"}>
                            <img src="/google.svg" alt="img" />
                            Google
                        </button>

                        <div className={"enter"}>
                            <button>У вас нет аккаунта?</button>
                            <button className={"enter-btn-2"}>Войти</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterPage;
