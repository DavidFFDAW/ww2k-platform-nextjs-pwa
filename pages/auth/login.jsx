import Input from '@/components/Forms/Input';
import NativeLink from '@/components/NativeLink';

export default function Login(props) {
    const { setUserEmail, setUserPassword, submitLogin } = props;
    console.log(props.users);
    return (
        <>
            <div className="login-page">
                <div className="login-form">
                    <form
                        action="POST"
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
                            <NativeLink href={'/'} className="w-100 btn btn-form">
                                Cancelar
                            </NativeLink>
                            {/* <FormButton text={'Login'} className="w-100 btn-red" /> */}
                        </div>
                    </form>
                    <div className="flex center down">
                        <span
                            onClick={ev => console.log(ev)}
                            className="red pointer"
                        >
                            He olvidado mi contraseña
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
