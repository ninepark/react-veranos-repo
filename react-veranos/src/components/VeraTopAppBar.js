import React from 'react';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  
  TopAppBarTitle
} from 'rmwc/TopAppBar';
import '../style/VeraTopAppBar.css';
import logo from '../svg/logo-white.svg';

function Vera__TopAppBar () {
    return(
        <TopAppBar className="v_TopAppBar">
          <TopAppBarRow>
            <TopAppBarSection alignStart>
                <TopAppBarTitle>
                    <a href="#"><img src={logo} alt="logo" className="v_TopAppBar_logo"/></a>
                </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>

    )
}

export default Vera__TopAppBar;
