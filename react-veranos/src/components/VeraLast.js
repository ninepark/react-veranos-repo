import React, { Component } from 'react';

import '../style/VeraLast.css';
import { Typography } from 'rmwc/Typography';
import {
  Map as NaverMap,
  // withNavermaps,
  // loadNavermapsScript,
} from 'react-naver-maps'
import { Marker } from 'react-naver-maps'

// const CLIENT_ID = 'cI4QbkRbWZayfAF7FfNQ';

class VeraLast extends Component {
    constructor (props) {
        super(props);
        const navermaps = window.naver.maps;
        this.state = {
          zoom: 12,
          center: new navermaps.LatLng(37.556919, 126.923112),
          size: new navermaps.Size(80, 30),
        }
    }


    render() {
        return(
            <div className="v_last_div">

                <div className="v_last_div_content">



                    <div className="v_last_div_column v_div_l">
                        <Typography use="headline5" className="v_h5 v_title">Contact</Typography>

                        <div className="v_desc_div">
                            <Typography use="body2" className="v_b2">FastFive in Hongdae</Typography>
                            <Typography use="body2" className="v_b2">161, Yanghwa-ro, Mapo-gu, Seoul</Typography>
                            <Typography use="body2" className="v_b2">Tel. 02-0000-0000</Typography>
                        </div>

                        <div className="v_email_div">
                            <Typography use="body2" className="v_b2">info@veranostech.com</Typography>
                        </div>

                        <div className="v_map_div">
                            <NaverMap
                                zoom={this.state.zoom}
                                onZoomChanged={(zoom) => { this.setState({ zoom })}}
                                center={this.state.center}
                                onCenterChanged={(center) => {this.setState({ center })}}
                                className="v_NaverMap"
                              >
                                <Marker
                                    position = {new window.naver.maps.LatLng(37.556919, 126.923112)}
                                />

                            </ NaverMap>
                        </div>
                    </div>


                    <div className="v_last_div_column v_div_r">
                        <Typography use="headline5" className="v_h5 v_title">Career</Typography>

                        <div className="v_desc_div">
                            <Typography use="body2" className="v_b2">학계와 업계 전문가들과 시장을 선도하고, 함께 성장의 기회를 찾는 전문가분들을 모집합니다. 금융 기술과 업계에 전문성과 열정을 지닌 분들이라면, 경력과 분야에 상관없이 지원을 받고 있습니다.</Typography>
                        </div>

                        <div className="v_email_div">
                            <Typography use="body2" className="v_b2">career@veranostech.com</Typography>
                        </div>
                    </div>




                </div>

            </div>
        )
    }

}

export default VeraLast;
