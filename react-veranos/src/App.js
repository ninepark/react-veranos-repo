import React, { Component } from 'react';
import { ThemeProvider } from '@rmwc/theme';
import { Typography } from 'rmwc/Typography';

import './App.css';
import './style/VeraMain.css';
import './style/VeraMedImg.css';
import './style/VeraFooter.css';

import VeraTopAppBar from './components/VeraTopAppBar';
import VeraIntro from './components/VeraIntro';
import VeraTech from './components/VeraTech';
import VeraTeam from './components/VeraTeam';
import VeraLast from './components/VeraLast';


class App extends Component {
    render() {
        return (
            <ThemeProvider options={{
              primary: '#2D3B44',
              secondary: '#78858D'
            }}>
                    <VeraTopAppBar />
                    <VeraMain />
                    <VeraIntro />
                    <VeraMedImg />
                    <VeraTech />
                    <VeraTeam />
                    <VeraLast />
                    <VeraFooter />
            </ThemeProvider>
        );
    }
}

function VeraMain () {
    return(
        <div className="v_main_div">
            <div className="v_main_img_overlay">
                <div className="v_main_img"></div>
            </div>
            <div className="v_main_txt">
                <Typography use="headline3" className="v_h3">기술로 사람의<br/> 꿈을 이루다</Typography>
                <Typography use="headline6" className="v_h5">고객 맞춤형 자산 관리 솔루션</Typography>
            </div>
        </div>
    )
}

function VeraMedImg () {
    return(
        <div className="v_med_div">
            <div className="v_med_img"></div>
        </div>
    )
}

function VeraFooter () {
    return (
        <div className="v_footer_div">
                <Typography use="caption" className="v_footer_copyright">Copyright © Veranos Technologies 2018. All Rights Reserved.</Typography>
        </div>
    )
}

export default App;
