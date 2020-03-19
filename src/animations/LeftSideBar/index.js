import React, { useState } from 'react';
import TopSection from './TopSection';
import LeftSection from './LeftSection';
import './style.scss';

export const LeftSideBarContext = React.createContext({})

const LeftSideBar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  return (
    <LeftSideBarContext.Provider
      value={{ isShowSidebar, setIsShowSidebar }}
    >
      <div className="LeftSideBar__container">
        <div
          className={`LeftSideBar__container__overlay LeftSideBar__container__overlay--${isShowSidebar ? 'show' : 'hide'}`}
          role="button"
          onClick={() => setIsShowSidebar(false)}
        ></div>
        <TopSection />      
        <LeftSection />
      </div>
    </LeftSideBarContext.Provider>
  );
};

export default LeftSideBar;
