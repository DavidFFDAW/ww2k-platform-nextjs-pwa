import React from 'react';
import LoginForm from './components/LoginForm';
import styles from './login.module.css'
import PageBackground from '../components/PageBackground/PageBackground';

export default function Login() {

    return (
        <PageBackground>
            <div className={styles.login_container}>
                <div className={`${styles.login} flex between a-center column`}>
                    <h1>
                        <img src="/icons/icon-96x96.png" alt="" />
                    </h1>

                    <h2>
                        <span className="dreadnotus" style={{ color: '#fff' }}>Acceder</span>
                    </h2>

                    <div className='down login-auth-form-container'>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </PageBackground>
    )
}
