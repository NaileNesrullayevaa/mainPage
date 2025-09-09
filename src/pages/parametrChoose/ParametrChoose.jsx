import React, { useEffect, useState } from 'react'
import './parametrChoose.scss'
import Department from '../../components/department/Department'
import add from '../../assets/svgs/add.svg'
import { Button, Flex, Form, Input, Modal, Pagination, Radio, Select, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategoryAsync } from '../../components/redux/slices/categoryParameterChoiceSlice'
import { getAllByPageAsync } from '../../components/redux/slices/categoryParameterChoiceSlice'
import { getAllAsync } from "../../components/redux/slices/categoryParameterChoiceSlice"
const ParametrChoose = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [page, setPage] = useState(1)
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const dispatch = useDispatch()
    const category = useSelector((state) => state.categoryParameterChoice.category)
    const parameterType = useSelector((state) => state.type.parameterType)
    const data = useSelector((state) => state.categoryParameterChoice.data)
    const totalCount = useSelector((state) => state.categoryParameterChoice.totalCount)
    const categoryParameter = useSelector((state) => state.categoryParameterChoice.categoryParameter)
    console.log(totalCount)
    console.log(category)
    console.log(data)
    console.log(categoryParameter)
    useEffect(() => {
        dispatch(getAllByPageAsync(
            {
                page: page
            }
        ))
    }, [page])
    useEffect(() => {
        dispatch(getAllCategoryAsync(
            {
                statusId: 0,
                orderByCountDesc: true
            }
        ))
    }, [])

    useEffect(() => {
        dispatch(getAllAsync(
            {
                categoryId: 0
            }
        ))
    }, [])

    const columns = [
        {
            title: '№',
            dataIndex: '№',
            key: '№',
            render: (i, record, index) => (
                <>{index + 1}</>
            )
        },
        {
            title: 'Ad',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Parameter',
            dataIndex: 'parameterName',
            key: 'age',
        },
    ];
    return (
        <div className='parametr-choose'>
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
                        className='mod'
                            title="Elave et"
                            closable={{ 'aria-label': 'Custom Close Button' }}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                layout="vertical"
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Ad"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Kategoriyalar">
                                    <Flex vertical gap="middle" className='select'>
                                        <Radio.Group block options={options} />
                                    </Flex>
                                </Form.Item>
                                <Form.Item label="Parameter">
                                    <Select placeholder="Seçin">
                                        {
                                            categoryParameter.map((item) => (
                                                <Select.Option key={item.id} value={item.id}>
                                                    {item.parameterName}
                                                </Select.Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label={null}>
                                    <Button type="primary" className='buttonn one' htmlType="submit" onClick={handleOk}>
                                        Elave et
                                    </Button>
                                    <Button type="primary" className='buttonn two' onClick={handleCancel}>
                                        Geri
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>

                </div>
                <div className="body">

                    <Table className='tab' columns={columns} dataSource={data} pagination={false} />
                </div>
                <Pagination onChange={(page) => setPage(page)} className='page' total={totalCount} pageSize={30} />

            </div>

        </div>
    )
}

export default ParametrChoose
