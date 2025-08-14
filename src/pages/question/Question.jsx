import React, { useEffect, useState } from 'react'
import './question.scss'
import Department from '../../components/department/Department'
import add from '../../assets/svgs/add.svg'
import { Button, Modal, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import getAllDepartment from '../../components/redux/getAllDepartment';
import { getAddDepartmentAsync, getAllDepartmentAsync } from '../../components/redux/slices/mainSlice';
import { Switch } from 'antd';
import more from '../../assets/svgs/more.svg'
import { Dropdown } from 'antd';
import edit from '../../assets/svgs/edit.svg'
import trash from '../../assets/svgs/trash.svg'
import { Pagination } from 'antd';
import getAddDepartment from '../../components/redux/getAddDepartment';
import addCircle from '../../assets/svgs/add-circle.svg'
import { message, Popconfirm } from 'antd';
const Question = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const department = useSelector((state) => state.main.department)
    const totalDepartments = useSelector((state) => state.main.totalDepartments)
    console.log(totalDepartments)
    console.log(department)
    const addDepartment = useSelector((state) => state.main.addDepartment)
    console.log(addDepartment)
    useEffect(() => {
        dispatch(getAllDepartmentAsync({
            page: page
        }))
    }, [page])
    useEffect(() => {
        dispatch(getAddDepartmentAsync({
            "departments": [
                {
                    "name": "string",
                    "description": "string",
                    "active": true
                }
            ]

        }))
    }, [])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);

    };

    const onFinish =values => {
    
        console.log(values)
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const confirm = e => {
        console.log(e);
        message.success('Click on Yes');
    };
    const cancel = e => {
        console.log(e);
        message.error('Click on No');
    };
    const items = [
        {
            label: (
                <>
                    <Button className='button btn' onClick={showModal}>
                        <img src={edit} alt="" />
                        <span>Duzelis et</span>
                    </Button>
                    <div className="edit">
                        <Modal
                            title={
                                <>
                                    <div className="head">
                                        <img src={addCircle} /><span>Duzelis et</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            closable={{ 'aria-label': 'Custom Close Button' }}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                layout='vertical'
                                onFinish={onFinish}
                                form={form}

                            >
                                <Form.Item
                                    label="Ad"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Izah"
                                    name="description"
                                    rules={[{ required: true, message: 'Please input your description!' }]}
                                >
                                    <TextArea />
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button className='buttonn one' htmlType="submit">
                                        Elave Et
                                    </Button>
                                    <Button onClick={handleCancel} className='buttonn two' htmlType="button">
                                        Geri
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>


                </>

            ),
            key: '0',
        },
        {
            label: (
                <>
                    <Popconfirm
                        description="Silmək istədiyinizdən əminsinizmi ?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Sil"
                        cancelText="Geri"
                    >
                        <Button className='btn trash' danger><img src={trash} alt="" /><span>Sil</span></Button>
                    </Popconfirm>
                </>
            ),
            key: '1',
        },

    ];

    const columns = [
        {
            title: '№',
            dataIndex: 'key',
            key: '№',
        },
        {
            title: 'Ad',
            dataIndex: 'name',
            key: 'ad',
        },
        {
            title: 'İzah',
            dataIndex: 'description',
            key: 'izah',
        },
        {
            title: 'Status',
            dataIndex: 'active',
            key: 'status',
            render: (i) => (
                <>
                    <Switch defaultChecked onChange={onChange} />
                </>
            )

        },
        {
            title: '',
            dataIndex: "",
            key: 'action',
            render: (i) => (
                <>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            <Space>
                                <img src={more} alt="" style={{ width: "24px", height: "24px" }} />
                            </Space>
                        </a>
                    </Dropdown>
                </>
            )

        },
    ];
    return (
        <div className='question'>
            <div className="left">
                <Department />
            </div>
            <div className="right">
                <div className="header">
                    <Button className='button' onClick={showModal}>
                        <img src={add} alt="" />
                        <span>Əlavə et</span>
                    </Button>
                    <div className="add">
                        <Modal
                            title={
                                <>
                                    <div className="head">
                                        <img src={addCircle} /><span>Elave et</span>
                                    </div>
                                    <hr />
                                </>
                            }
                            closable={{ 'aria-label': 'Custom Close Button' }}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                layout='vertical'
                                onFinish={onFinish}
                                form={form}

                            >
                                <Form.Item
                                    label="Ad"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Izah"
                                    name="description"
                                    rules={[{ required: true, message: 'Please input your description!' }]}
                                >
                                    <TextArea />
                                </Form.Item>

                                <Form.Item label={null}>
                                    <Button className='buttonn one' htmlType="submit">
                                        Elave Et
                                    </Button>
                                    <Button onClick={handleCancel} className='buttonn two' htmlType="button">
                                        Geri
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>

                </div>
                <div className="body">
                    <Table className='tab' columns={columns} dataSource={department} />
                </div>
                <Pagination onChange={(page) => setPage(page)} className='page' total={totalDepartments} />

            </div>
        </div>
    )
}

export default Question