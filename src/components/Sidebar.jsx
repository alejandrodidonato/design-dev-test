import { useState } from 'react';
import '../styles/sidebar.css'

const Sidebar = ({ isConnected }) => {

const [activeIcon, setActiveIcon] = useState(0);

const handleClick = (index) => {
    setActiveIcon(index);
  };

  return (
        <>
        <div className='sidebar'>
            <div className="profile">
                <div className='profile__wrapper'>
                    <img src="assets/images/profile-img.jpg" alt="Profile Photo" className="profile__image"/>
                    <div className={`profile__status ${isConnected ? 'profile__status-connected' : 'profile__status-disconnected'}`}></div>
                </div>
                <p className="profile__name">Mike Pods</p>
                <button className="profile__button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='profile__icon'>
                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                </button>
            </div>

            <div className='nav'>
                <ul className='nav__list'>
                    <li className={`nav__item ${activeIcon === 0 ? 'nav__item-active' : ''}`}>
                        <button className='nav__button' onClick={() => handleClick(0)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={`nav__icon ${activeIcon === 0 ? 'nav__icon-active' : ''}`}>
                                <path d="M64 80c-8.8 0-16 7.2-16 16V258c5.1-1.3 10.5-2 16-2H448c5.5 0 10.9 .7 16 2V96c0-8.8-7.2-16-16-16H64zM48 320v96c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V320c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM0 320V96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V320v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320zm280 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg> 
                            <span className='nav__text'> My Drive</span>
                        </button>
                    </li>
                    <li className={`nav__item ${activeIcon === 1 ? 'nav__item-active' : ''}`}>
                        <button className='nav__button' onClick={() => handleClick(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={`nav__icon ${activeIcon === 1 ? 'nav__icon-active' : ''}`}>
                                <path d="M512 48H64c-8.8 0-16 7.2-16 16V256H528V64c0-8.8-7.2-16-16-16zm64 208v48 48c0 35.3-28.7 64-64 64H364.3l8 48H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H352 224 152c-13.3 0-24-10.7-24-24s10.7-24 24-24h51.7l8-48H64c-35.3 0-64-28.7-64-64V304 256 64C0 28.7 28.7 0 64 0H512c35.3 0 64 28.7 64 64V256zM48 304v48c0 8.8 7.2 16 16 16H239.5c.3 0 .6 0 .8 0h95.2c.3 0 .6 0 .8 0H512c8.8 0 16-7.2 16-16V304H48zM252.3 464h71.3l-8-48H260.3l-8 48z"/>
                            </svg> 
                            <span className='nav__text'> Devices</span>
                        </button>
                    </li>
                    <li className={`nav__item ${activeIcon === 2 ? 'nav__item-active' : ''}`}>
                        <button className='nav__button' onClick={() => handleClick(2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className={`nav__icon ${activeIcon === 2 ? 'nav__icon-active' : ''}`}>
                                <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM269.7 352c65.7 0 120.1 48.7 129 112H49.3c8.9-63.3 63.3-112 129-112h91.4zm-91.4-48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H224 178.3zM504 312c0 13.3 10.7 24 24 24s24-10.7 24-24V248h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H552V136c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H440c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"/>
                            </svg> 
                            <span className='nav__text'> Shared with me</span>
                        </button>
                    </li>
                    <li className={`nav__item ${activeIcon === 3 ? 'nav__item-active' : ''}`}>
                        <button className='nav__button' onClick={() => handleClick(3)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={`nav__icon ${activeIcon === 3 ? 'nav__icon-active' : ''}`}>
                                <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                            </svg> 
                            <span className='nav__text'> Favourites</span>
                        </button>
                    </li>
                    <li className={`nav__item ${activeIcon === 4 ? 'nav__item-active' : ''}`}>
                        <button className='nav__button' onClick={() => handleClick(4)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`nav__icon ${activeIcon === 4 ? 'nav__icon-active' : ''}`}>
                                <path d="M177.1 48h93.7c2.7 0 5.2 1.3 6.7 3.6l19 28.4h-145l19-28.4c1.5-2.2 4-3.6 6.7-3.6zM354.2 80L317.5 24.9C307.1 9.4 289.6 0 270.9 0H177.1c-18.7 0-36.2 9.4-46.6 24.9L93.8 80H80.1 32 24C10.7 80 0 90.7 0 104s10.7 24 24 24H35.6L59.6 452.7c2.5 33.4 30.3 59.3 63.8 59.3H324.6c33.5 0 61.3-25.9 63.8-59.3L412.4 128H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8H367.9 354.2zm10.1 48L340.5 449.2c-.6 8.4-7.6 14.8-16 14.8H123.4c-8.4 0-15.3-6.5-16-14.8L83.7 128H364.3z"/>
                            </svg> 
                            <span className='nav__text'> Deleted</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
            
        </>
  )
}

export default Sidebar