import BackgroundPage from '@/components/BackgroundPage';
import AppButton from '@/components/Button';
import Input from '@/components/Forms/Input';
import NativeLink from '@/components/NativeLink';
import useLogin from './useLogin';

export default function Login() {
    const { setUserEmail, setUserPassword, submitLogin } = useLogin();

    return (
        <>
            <BackgroundPage>
                <div className="flex center acenter">
                    <div className="flex center column acenter h1vh">
                        <div className="login-page">
                            <div className="login-form">
                                <form
                                    method="POST"
                                    onSubmit={submitLogin}
                                    className="flex center al-center column gap"
                                >
                                    <Input
                                        label={'Email:'}
                                        name={'email'}
                                        type={'email'}
                                        onChange={setUserEmail}
                                        placeholder={'example@gmail.com'}
                                        autocomplete={'email'}
                                    />

                                    <Input
                                        label={'Password:'}
                                        name={'password'}
                                        type={'password'}
                                        onChange={setUserPassword}
                                        placeholder={'********'}
                                        autocomplete={'current-password'}
                                    />

                                    <div className="w-100 flex between al-center gap">
                                        <NativeLink
                                            href={'/'}
                                            className="w1 custom-link uppercase"
                                        >
                                            Cancelar
                                        </NativeLink>

                                        <AppButton
                                            text={'Iniciar sesión'}
                                            type={'submit'}
                                            className="w1 uppercase"
                                        />
                                    </div>
                                </form>
                                {/* <div className="flex center down">
                                <span
                                onClick={ev => console.log(ev)}
                                className="red pointer"
                                >
                                    He olvidado mi contraseña
                                </span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundPage>
        </>
    );
}
