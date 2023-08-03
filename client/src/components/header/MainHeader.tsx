import { FC } from "react";

// interface MainHeaderProps {
// }

const MainHeader:FC = () => {
    return (
        <div className="">
            <label htmlFor="loginInput">Login</label>
            <input id="loginInput" type="text" />
            <label htmlFor="passwordInput">Password</label>
            <input id="password" type="password" />
        </div>
    )
}
export { MainHeader };