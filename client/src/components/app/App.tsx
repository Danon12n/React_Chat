import "./App.scss";
import { AuthPage } from "../../pages/auth/authPage";
import { HomePage } from "../../pages/home/homePage";

export const App = () => {
    return (
        <div className={"App"}>
            <div className={"contentWrapper"}>
                {/* <AuthPage/> */}
                <HomePage/> 
            </div>
        </div>
    );
};
