import React from 'react';
import settings from '../../images/setting.svg';
import './styles.scss';

let hrefLink = '#';
class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='main_head'>
                    <div className='main_head_content'>
                        <div className='logo_image' alt="brand logo">
                            <a href={hrefLink}>
                                Logo
                        </a>
                        </div>
                        <div className='header_contents'>
                            <p>
                                User Details List |  <img src={settings} alt="settings" />
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Header;