import React from "react";
import LoginForm from "./components/LoginForm";
import BodyDeletableClass from "@/components/PageBackground/BodyDeletableClass";
import "./login.css";

export default function Login() {
    return (
        <>
            <BodyDeletableClass className="custom-totalpage-body-wallpaper custom-wallpaper login" />
            <div className="login-container">
                <div className="flex column acenter center">
                    <h1>
                        <img src="/icons/icon-96x96.png" alt="" />
                    </h1>

                    <h2>
                        <span className="dreadnotus">Acceder</span>
                    </h2>

                    <div className="down login-auth-form-container">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}
