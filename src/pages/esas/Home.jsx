import React, { useEffect, useState } from 'react'
import './home.scss'
import list from '../../assets/svgs/list.svg'
import search2 from '../../assets/svgs/search2.svg'
import esas1 from '../../assets/svgs/esas1.svg'
import esas2 from '../../assets/svgs/esas2.svg'
import esas3 from '../../assets/svgs/esas3.svg'
import esas03 from '../../assets/svgs/esas03.svg'

import esas4 from '../../assets/svgs/esas4.svg'
import esas5 from '../../assets/svgs/esas5.svg'
import passport from '../../assets/svgs/passport.svg'
import { getAllCategoryAsync, getAllPageAsync } from '../../components/redux/slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Input, Row, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import List from './list/List'
import Passport from './passport/Passport'
import { Modal } from 'antd';
import { Button, Form } from 'antd';
import { InputNumber } from 'antd';
import Category from '../../components/category/Category'
import { BsDisplay } from 'react-icons/bs'
const Esas = () => {
    const [dataType, setDataType] = useState('list')
    const [value, setValue] = useState(null)
    const [searchData, setSearchData] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formSearch, setFormSearch] = useState(null)

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dispatch = useDispatch()
    const data = useSelector(state => state.main.data)
    console.log(data)
    const total = useSelector(state => state.main.total)
    const [page, setPage] = useState(1)
    console.log(searchData)
    const [form] = Form.useForm();
    const columns = [
        {
            title: '№',
            dataIndex: '№',
            key: '№',
        },
        {
            title: 'İnventor nömrəsi',
            dataIndex: 'id',
            key: 'inventor nomresi',
        },
        {
            title: 'Obyekt adi',
            dataIndex: 'name',
            key: 'obyekt adi',
        },
        {
            title: 'Kateqoriya',
            dataIndex: 'category',
            key: 'kategoriya',
        },
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'İşçi sayı',
            dataIndex: 'employeeCount',
            key: 'isci sayi',
        },
        {
            title: '',
            dataIndex: 'googleMapsLink',
            key: 'googleMapsLink',
        },
    ];

    const categoryIds = useSelector(state => state.main.selectedCategoryIds)
    console.log(categoryIds)
    const handelChangeDataType = (type) => {
        setDataType(type)
    }
    useEffect(() => {
        dispatch(getAllPageAsync({
            Page: page,
            CategoryIds: categoryIds,
            Order: null,
            name: searchData,
            category: searchData,
            ...formSearch
        }))
    }, [page, searchData, categoryIds, formSearch])
    const showModal = () => {
        setIsModalOpen(true);
    };

    const onFinish = values => {
        setFormSearch(values)
        console.log(values)
        // dispatch(getAllPageAsync({
        //     Page: page,
        //     CategoryIds: [
        //     ],
        //     Order: null,
        //     name: searchData,
        //     category: searchData,
        //     ...values
        // }))
    };
    const onChange = value => {
        console.log('changed', value);
    };
    return (
        <div className='esas'>
            <div className="left">
                <Category />
            </div>
            <div className="right">
                <div className="text">
                    <h2>Əsas səhife</h2>
                    <div className="buttons">
                        <button onClick={() => handelChangeDataType('list')} className={`one ${dataType === 'list' ? "active" : ""}`}><img src={list} alt="" /><span>List</span></button>
                        <button onClick={() => handelChangeDataType('passport')} className={`one ${dataType !== 'list' ? "active" : ""}`}><img src={passport} alt="" /><span>Passport</span></button>
                    </div>
                </div>
                <div className="boxess">
                    <div className="topp">
                        <div className="one">
                            <button><h4>Cəmi müəssisə sayı</h4><h2>{total.totalObjects}</h2></button>
                            <button><h4>Cəmi istifadəçi sayı</h4><h2>{total.totalEmployeeCount}</h2></button>
                            <button><h4>Təmirli</h4><h2>{total.renovated}</h2></button>
                            <button><h4>Təmirsiz</h4><h2>{total.unrenovated}</h2></button>
                            <button><h4>Qəzalı</h4><h2>{total.damaged}</h2></button>
                        </div>
                        <div className="two">
                            <Input onChange={(e) => setValue(e.target.value)} className='btnn' placeholder="Axtarış" suffix={
                                <img
                                    src={search2}
                                    alt="icon"
                                    onClick={() => setSearchData(value)}
                                />
                            } />
                            <img src={esas1} alt="" />
                            <img src={esas2} alt="" onClick={showModal} />
                            <Modal
                                className='modal'
                                footer={null}
                                title={<img src={esas03} />}
                                closable={{ 'aria-label': 'Custom Close Button' }}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}

                            >
                                <hr />
                                <Form
                                    name="basic"
                                    form={form}
                                    onFinish={onFinish}
                                    className='form'
                                    layout='vertical'
                                >
                                    <Row gutter={6}>
                                        <Col span={12}>
                                            <Form.Item
                                                label="Inventor nomresi"
                                                name="id"
                                                rules={[{ required: true, message: 'Please input your username!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>

                                            <Form.Item
                                                label="Obyekt adi"
                                                name="name"
                                                rules={[{ required: true, message: 'Please input your username!' }]}
                                            >
                                                <Input />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <p>Isci sayi</p>
                                            <Space>
                                                <Form.Item
                                                    label=""
                                                    name="maxEmployeeCount"
                                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                                >
                                                    <InputNumber style={{ width: "110px" }} min={1} max={100} onChange={onChange} />
                                                </Form.Item>
                                                <Form.Item
                                                    label=""
                                                    name="minEmployeeCount"
                                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                                >
                                                    <InputNumber style={{ width: '110px' }} min={1} max={100} onChange={onChange} />
                                                </Form.Item>
                                            </Space>
                                        </Col>


                                    </Row>
                                    <Form.Item label={null}>
                                        <div className="buttons">
                                            <Button htmlType="reset">
                                                Temizle
                                            </Button>
                                            <Button type="primary" htmlType="submit">
                                                Axtar
                                            </Button>
                                        </div>

                                    </Form.Item>
                                </Form>
                            </Modal>
                            <img src={esas3} alt="" />
                            <img src={esas4} alt="" />
                            <img src={esas5} alt="" />
                        </div>
                    </div>
                    {/* <Table className='table' dataSource={data} columns={columns} /> */}
                </div>
                {dataType === 'list' && <List />}
                {dataType === 'passport' && <Passport />}
            </div>


        </div>


    )
}
export default Esas