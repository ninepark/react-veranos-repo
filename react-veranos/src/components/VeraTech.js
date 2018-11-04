import React, { Component } from 'react';
import '../style/VeraTech.css';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from '@rmwc/grid';
import imgTech from '../images/vera_tech_img.png';


class VeraTech extends Component {
    state = {
        technology :[
            {
                id: "t_1",
                title: "투자자 분석",
                desc: "투자자의 재무 데이터(현재 및 미래 예상 소득, 저축, 투자 목표, 소비 패턴 등)와 비재무 데이터(나이, 가족, 직업 등) 분석을 통해 투자 목적과 상황을 도출합니다.",
                src: "https://veranostech.com/static/img/UC.svg",
            },
            {
                id: "t_2",
                title: "금융시장 분석",
                desc: "금융시장은 변동성이 크고 예측이 어렵습니다. 따라서, 시장의 불확실성을 모델링하여, 통계적 예측을 바탕으로 다양한 금융상품들의 시장 움직임을 모델링하는 기술이 필요합니다.",
                src: "https://veranostech.com/static/img/MMU.svg",
            },
            {
                id: "t_3",
                title: "포트폴리오 구성",
                desc: "투자 가능한 다양한 투자 상품들 중, 시장 상황과 투자자 상황에 가장 적합하여 개별 포트폴리오를 구성하게 될 투자 상품들을 고르는데 필요한 기술입니다.",
                src: "https://veranostech.com/static/img/PBB.svg",
            },
            {
                id: "t_4",
                title: "최적화 기반 의사 결정",
                desc: "투자자와 시장에 대한 분석을 바탕으로 최적의 자산 배분을 결정하는 기술입니다. 다양한 시장 시나리오 예측 분석을 기반으로 투자자의 목표와 상황에 적합한 최적의 투자 배분을 결정합니다. 생애 주기별로, 시장 상황의 변화를 지속적으로 반영하여 투자 배분을 재구성합니다.",
                src: "https://veranostech.com/static/img/MOD.svg",
            },
        ]
    };

    _renderTech = () => {
        const techs = this.state.technology.map(tech => {
            return (

                <GridCell span="3" className="v_tech_grid_cell" key={tech.id}>
                    <VeraTechContent
                    title={tech.title}
                    desc={tech.desc}
                    src={tech.src}
                    />
                </GridCell>

            );
        });
        return techs;
    };


    render() {
        // const { techs } = this.state;
        return(
            <div className="v_tech_div">
                <Typography use="headline4" className="v_h4 v_title">World-class technology to implement<br/> personalized financial planning services</Typography>
                <Typography use="body2" className="v_b2 v_desc">베라노스는 개인 맞춤형 자산관리의 구현을 위해 필요한 모든 기술 영역에서 세계적인 수준의 기술력을 보유하고 있습니다.</Typography>
                <div className="v_tech_img_div">
                    <img src={imgTech} alt="" className="v_tech_img"/>
                </div>
                <div className="v_tech_content_div">
                    <Grid className="v_tech_grid" align="left">
                        {this._renderTech()}
                    </Grid>
                </div>
            </div>
        );
    }
}

function VeraTechContent({title, desc, src}) {
    return (
        <div >
            <div className="v_tech_title">
                <Typography use="headline6" className="v_h6">{title}</Typography>
            </div>
            <div className="v_tech_desc">
                <Typography use="body2" className="v_b2">{desc}</Typography>
                <div>
                    <img src={src} alt={title} className="v_tech_desc_img"/>
                </div>
            </div>
        </div>
    )
}


export default VeraTech;
