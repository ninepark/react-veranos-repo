import React, { Component } from 'react';
import '../style/VeraTeam.css';
import { Typography } from 'rmwc/Typography';
import { Grid, GridCell } from '@rmwc/grid';
import { ImageListImage } from '@rmwc/image-list';
import { Button } from '@rmwc/button';
import {
  Dialog,
  DialogSurface,
  DialogHeader,
  DialogBody,
  DialogFooterButton,
  DialogBackdrop
} from '@rmwc/dialog';



class VeraTeam extends Component {
    state = {
        members : [
            {
                id: "m_1",
                name: "김우창/CEO",
                src: "https://veranostech.com/static/img/profile/woochangkim.jpg",
                info: "김우창 대표는 금융최적화, 포트폴리오 관리, 자산부채관리의 세계적인 전문가로 국제 학술 저널에 다수의 논문 발표 및 학술지의 편집장 및 편집위원으로 위촉되었으며 다양한 기관에서 자문위원으로 활동중이다.",
            },
            {
                id: "m_2",
                name: "이원종",
                src: "https://veranostech.com/static/img/profile/wonjongrhee.jpg",
                info: "이원종 박사는 베라노스에서 개인화 기술에 필요한 데이터과학 관련 국제적인 전문가로 수백여개의 국제특허가 출원/등록 단계에 있고, 약 4500여회의 논문 피인용 횟수 기록하고 있다.",
            },
            {
                id: "m_3",
                name: "김도형",
                src: "https://veranostech.com/static/img/profile/dohhyoungkim.jpg",
                info: "김도형 박사는 퀀트 개발, 최적 집행 시스템, High-frequency trading 등 다양한 개발 업무 수행 경험이 있는 금융 솔루션 개발 전문가이다.",
            },
            {
                id: "m_4",
                name: "장연식",
                src: "https://veranostech.com/static/img/profile/yeonsikjang.jpg",
                info: "장연식 박사는 자산배분 시스템 구축 및 투자 전략 관련 전문가로 베라노스에서 금융시장 요인분석 및 모델링 개발을 맡고 있다.",
            },
            {
                id: "m_5",
                name: "김장호",
                src: "https://veranostech.com/static/img/profile/janghokim.jpg",
                info: "김장호 박사는 개인화 자산관리의 핵심 기술 영역인 Portfolio Optimization 전문가이며, 관련해서 다양한 국제 학술 연구 활동을 통해 전문성을 인정받았다.",
            },
            {
                id: "m_6",
                name: "이용재",
                src: "https://veranostech.com/static/img/profile/yongjaelee.jpg",
                info: "이용재 박사는 Portfolio Optimization 관련 다양한 학술 활동을 해온 전문가이며, 금융 시장에서의 AI 활용에 대한 연구를 활발히 진행중이다.",
            },
            {
                id: "m_7",
                name: "송영래",
                src: "https://veranostech.com/static/img/profile/youngraesong.jpg",
                info: "송영래 박사는 알고리즘, 퀀트 트레이딩을 비롯해 시장에서 다양한 트레이딩 경험을 보유하고 있다.",
            },
        ],
        clicked_id: '',
    }

    _renderTeam = () => {
        const members = this.state.members.map(member => {
            return (
                <GridCell span="3" key={member.id}>
                <Button
                  ripple={false}
                  onClick={evt => this.setState({standardDialogOpen: true, clicked_id: member.id})}
                  className="v_team_modal_btn"
                >
                    <div className="v_team_img">
                        <ImageListImage src={member.src}/>
                        <div className="v_team_name_div">
                            <Typography use="headline6" className="v_team_name">{member.name}</Typography>
                        </div>
                    </div>
                    </Button>
                </GridCell>
            );
        });

        return members;
    };

    render () {
        // const { members } = this.state.members;
        // const { clicked_id } = this.state.clicked_id;
        var clicked_member = this.state.members.filter(member =>  member.id === this.state.clicked_id)[0];
        var clicked_member_name = '';
        var clicked_member_info = '';
        for (var key in clicked_member) {
            if (key === 'name') {
                clicked_member_name = clicked_member[key]
                // console.log(clicked_member_name);
            }
            if (key === 'info') {
                clicked_member_info = clicked_member[key]
                // console.log(clicked_member_info);
            }
        }

        return (
                <div className="v_team_div">
                    <Typography use="headline4" className="v_h4 v_title">Veranos Team</Typography>

                    <div className="v_team_img_div">
                            <Grid className="v_team_img_grid">
                                    {this._renderTeam()}
                            </Grid>
                    </div>

                    
                </div>
        )
    }
}



export default VeraTeam;
