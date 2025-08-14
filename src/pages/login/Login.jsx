import React from 'react'
import './login.scss'
import svg1 from '../../assets/svgs/svg1.svg'
import svg2 from '../../assets/svgs/svg2.svg'
import svg3 from '../../assets/svgs/svg3.svg'
import svg4 from '../../assets/svgs/svg4.svg'
import svg5 from '../../assets/svgs/svg5.svg'
import svg6 from '../../assets/svgs/svg6.svg'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <div className='login'>
            <div className="top-box">
                <div className="left">
                    <img src={svg1} alt="" />
                </div>
                <div className="right">
                    <img className='two' src={svg2} alt="" />
                    <img src={svg3} alt="" />
                </div>
            </div>
            <div className="main">
                <Row className='boxes'>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Filmlərin Dövlət Reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Azərbaycan Respublikası ərazisində dövlət mühafizəsinə götürülmüş daşınmaz tarix və mədəniyyət abidələrinin reyestri </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Azərbaycan Respublikasının milli mədəniyyət əmlakının Dövlət Siyahısı </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Mədəni sərvətlərin mühafizə reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Azərbaycan qeyri-maddi mədəni irs nümunələrinin Dövlət Reyestri </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Qalereya və muzey eksponatları reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to="yaradici/home">
                            <div className="box">
                                <div className="text">
                                    <img src={svg4} alt="" /><p>Yaradıcı Sənaye Reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <img src={svg5} alt="" /><p>Mədəniyyət müəssisələrinin reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Mədəniyyət və incəsənət xadimləri və yaradıcı şəxslərin reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Azərbaycan xalq, bəstəkar musiqisi və digər yazılı musiqinin not materialları reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>Elektron kataloqların, elektron kitabların və audiokitabların reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col span={6}>
                        <Link to=''>
                            <div className="box">
                                <div className="text">
                                    <p>QR kod reyestri</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
            <div className="bottom">
                <div className="button">
                    <img src={svg6} alt="" /> <p>Analitik təhlil</p>
                </div>
            </div>

        </div>
    )
}

export default Login