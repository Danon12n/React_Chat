import { FC } from 'react';
import './homePage.scss';
import { SideMenu } from '../../components/homePage/sideMenu/sideMenu';
import { ChatSelector } from '../../components/homePage/chatsList/chatSelector';

// interface homePageProps {
// }

const HomePage: FC = () => {
    return (
        <div className="homePageWrapper">
            <SideMenu />
            <ChatSelector />
            <div className="chatContent">chat</div>
            <div className="additionalInfo">addititonal info</div>
        </div>
    );
};
export { HomePage };
