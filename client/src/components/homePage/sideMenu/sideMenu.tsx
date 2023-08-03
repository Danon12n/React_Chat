import { FC } from 'react';
import './sideMenu.scss'
import { MenuIcon } from '../../ui/icons';

// interface homePageProps {
// }

const SideMenu:FC = () => {
    return (
        <div className='sideMenu'>
            <MenuIcon size='40' color='white'/>
        </div>
    )
}
export { SideMenu };