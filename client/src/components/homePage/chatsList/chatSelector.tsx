import { FC } from 'react';
import './chatSelector.scss';
import { SearchBar } from './searchBar';
import { ChatsList } from './chatsList';

const ChatSelector: FC = () => {
    return (
        <div className="chatSelector">
            <SearchBar />
            <ChatsList />
        </div>
    );
};
export { ChatSelector };
