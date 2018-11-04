import React, { Component } from 'react';
import '../style/VeraIntro.css';
import imgCoreTech from '../svg/intro_core_tech.svg';
import imgAdvModel from '../svg/intro_advanced_model.svg';
import imgEngPlat from '../svg/intro_engine_platform.svg';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from '@rmwc/grid';

class VeraIntro extends Component {
    state = {
        expertises :[
            {
                id: "e_1",
                title: "자산관리를 위한 핵심 기술력",
                desc: "고객 분석, 시장 모델링, 의사결정 모델 등 다양한 영역에서의 문제해결을 위한 세계 최고 수준의 기술력을 보유",
                src: imgCoreTech,
            },
            {
                id: "e_2",
                title: "선진화된 금융 모델 구현",
                desc: "금융공학, 최적화 이론, 계량경제학, 인공지능 등 각 분야의 베라노스 연구진들이 선진화된 금융모형을 기술적으로 구현 가능",
                src: imgAdvModel,
            },
            {
                id: "e_3",
                title: "효율적 처리 엔진과 플랫폼",
                desc: "효율적인 시간으로 최적성을 보장하는 엔진을 사용자의 상황과 목적에 적합한 플랫폼을 통하여 전달 가능",
                src: imgEngPlat,
            },
        ]
    };

    _renderExpertise = () => {
        const experts = this.state.expertises.map(expert => {
            return (
                <GridCell span="4" className="v_intro_grid_cell" key={expert.id}>
                    <img src={expert.src} alt={expert.title} className="v_intro_grid_img"/>
                    <Typography use="headline6" className="v_h6">{expert.title}</Typography>
                    <Typography use="body2" className="v_b2">{expert.desc}</Typography>
                </GridCell>

            );
        });
        return experts;
    };

    render () {
        return(
            <div className="v_intro_div">
                <Typography use="headline4" className="v_h4 v_title">Enabling life-time financial planning<br/> for everyone</Typography>
                <Typography use="body2" className="v_b2 v_desc">개인 맞춤형 자산관리에 필요한 모든 영역에서 고도화된 기술을 사용자의 목적과 상황에 맞게 전달하여,<br/>모두가 인생의 목표를 이룰 수 있는 세상을 만들려고 합니다.</Typography>

                <div className="v_intro_grid_div">
                    <Grid className="v_intro_grid">
                        {this._renderExpertise()}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default VeraIntro;
