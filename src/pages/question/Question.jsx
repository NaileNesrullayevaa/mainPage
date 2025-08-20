import React, { useEffect, useState } from 'react'
import './question.scss'
import Department from '../../components/department/Department'
import add from '../../assets/svgs/add.svg'
import { Button, Modal, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import getAllDepartment from '../../components/redux/getAllDepartment';
import { editDepartmentAsync, getAddDepartmentAsync, getAllDepartmentAsync, removeDepartmentAsync } from '../../components/redux/slices/mainSlice';
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
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch()
    const department = useSelector((state) => state.main.department)
    const totalDepartments = useSelector((state) => state.main.totalDepartments)
    const removeId = useSelector((state) => state.main.removeId)

    const [id, setId] = useState(null)
    console.log(removeId)
    console.log(totalDepartments)
    const addDepartment = useSelector((state) => state.main.addDepartment)



    console.log(addDepartment)
    useEffect(() => {
        dispatch(getAllDepartmentAsync({
            page: page
        }))
    }, [page])

    const showModal = () => {
        setIsModalOpen(true);
        dispatch(getByIdAsync(id))
        form.setFieldsValue(
            {
                name: values.name,
                description: values.description
            }
        )



    };
    console.log(id)

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);

    };

    const onFinish = values => {
        if (id) {
            dispatch(editDepartmentAsync(
                {
                    departments: [
                        {
                            id: id,
                            name: values.name,
                            description: values.description,
                            active: true
                        }
                    ]
                }
            ))

            form.resetFields()

            dispatch(getAllDepartmentAsync(
                {
                    page: page
                }
            ))


        }
        else {
            console.log(values)
            const data = {
                departments: [
                    {
                        name: values.name,
                        description: values.description,
                        active: true
                    }
                ]

            }
            dispatch(getAddDepartmentAsync(data))
            messageApi.open({
                type: 'success',
                content: 'Uğurla əlavə olundu',
            });

            form.resetFields()

            dispatch(getAllDepartmentAsync(
                {
                    page: page
                }
            ))
        }


    };


    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    const confirm = () => {
        dispatch(removeDepartmentAsync(
            {
                departmentId: id
            }
        ))

        dispatch(getAllDepartmentAsync(
            {
                page: page
            }
        ))

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
            dataIndex: "id",
            key: 'action',
            render: (i) => (
                <>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <a onClick={e => {
                            e.preventDefault()
                            setId(i)
                        }}>
                            <Space>
                                <img src={more} alt="" style={{ width: "24px", height: "24px" }} />
                            </Space>
                        </a>
                    </Dropdown>

                </>
            )

        },
    ];
    console.log(department)
    return (
        <div className='question'>
            {contextHolder}
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
                            className='add-modal'
                            title={
                                <>
                                    <div className="head">
                                        <img src={addCircle} /><span>{id ? "Düzəlt" : "Əlavə et"}</span>
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
                                    <Button className='buttonn one' htmlType="submit" onClick={handleOk}>
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

                    <Table className='tab' columns={columns} dataSource={department.data} pagination={false} />
                </div>
                <Pagination onChange={(page) => setPage(page)} className='page' total={totalDepartments} pageSize={30} />

            </div>
        </div>
    )
}

export default Question