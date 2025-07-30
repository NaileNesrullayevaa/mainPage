import React from 'react'
import './login.scss'
import img1 from '../../assets/imgs/img1.png'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import icon1 from '../../assets/imgs/icon1.png'
import icon3 from '../../assets/imgs/icon3.png'
import bank from '../../assets/imgs/bank.png'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
  
    return (
        <div className='login'>
            <div className="top-box">
                <div className="left">
                    <img src={img1} alt="" />

                </div>
                <div className="right">
                    <img className='two' src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>
            </div>
            <div className="main">
                <Row className='boxes'>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Filmlərin Dövlət Reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Azərbaycan Respublikası ərazisində dövlət mühafizəsinə götürülmüş daşınmaz tarix və mədəniyyət abidələrinin reyestri </Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Azərbaycan Respublikasının milli mədəniyyət əmlakının Dövlət Siyahısı </Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to=''>Mədəni sərvətlərin mühafizə reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Azərbaycan qeyri-maddi mədəni irs nümunələrinin Dövlət Reyestri </Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to=''>Qalereya və muzey eksponatları reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <img src={icon1} alt="" /><Link to="/yaradici" >Yaradıcı Sənaye Reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <img src={bank} alt="" /><Link to="">Mədəniyyət müəssisələrinin reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to=''>Mədəniyyət və incəsənət xadimləri və yaradıcı şəxslərin reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Azərbaycan xalq, bəstəkar musiqisi və digər yazılı musiqinin not materialları reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">Elektron kataloqların, elektron kitabların və audiokitabların reyestri</Link>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="box">
                            <div className="text">
                                <Link to="">QR kod reyestri</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="bottom">
                <div className="button">
                    <img src={icon3} alt="" /> <p>Analitik tehlil</p>
                </div>
            </div>

        </div>
    )
}

export default Login