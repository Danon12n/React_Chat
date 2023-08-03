import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./authPage.scss";

//interface AuthPageProps {}

const AuthPage: FC = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onInputChange = (e:ChangeEvent<HTMLInputElement>, setter:(value: string) => void) => {
        setter(e.target.value);
    }

    const onFormSubmit = (e:FormEvent) => {
        e.preventDefault();
        console.log(`submit login=${login} password=${password}`);
        fetch('http://localhost:3000', {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            console.log(res); 
            return res.json().catch(error => {
                console.log(error)
                console.log('!!Error!!');
            });
        })
        .then((res) => {console.log(res);})
        .catch((error) => {console.log(error);})
    }

    return (
        <div className="authPageWrapper">
            <form className="authForm" onSubmit={(e) => {onFormSubmit(e)}}>
                <label htmlFor="loginInput">Login</label>
                <input 
                    className="authForm__input"
                    id="loginInput"
                    type="email"
                    value={login}
                    onChange={(e) => {onInputChange(e, setLogin)}}
                />
                <label htmlFor="passwordInput">Password</label>
                <input 
                    className={"authForm__input"} 
                    id="passwordInput" 
                    type="password"
                    value={password}
                    onChange={(e) => {onInputChange(e, setPassword)}}
                />
                <button className={"authForm__button"} type="submit">Войти</button>
            </form>
            <div className="circle white small"></div>
        </div>
    );
};
export { AuthPage };
