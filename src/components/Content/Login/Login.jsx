import style from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {Redirect} from "react-router";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (<form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"email"}
                       component={Input}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       name={"password"}
                       component={Input}
                       validate={[required, maxLength30]}
                />
            </div>
            {error && <div className={style.login_form_error}>
                {error}
            </div>}
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({isAuth, id, login}) => {
    const onSubmit = ({email, password, rememberMe}) => {
        login(email, password, rememberMe);
    }
    if (isAuth) {
        return <Redirect to={"/user/" + id}/>
    }
    return (<div className={style.login}>
            <div className={style.login_name}>
                <h1>Login {id}</h1>
            </div>
            <div className={style.login_form}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

        </div>
    )
}

export default Login;