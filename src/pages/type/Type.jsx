import React, { useEffect, useState } from 'react'
import "./type.scss"
import Department from '../../components/department/Department'
import { Button, Form, Input, Modal, Pagination, Table, message, Space, Dropdown, Popconfirm } from 'antd'
import add from '../../assets/svgs/add.svg'
import addCircle from '../../assets/svgs/add-circle.svg'
import TextArea from 'antd/es/input/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { addParameterTypeAsync, editParameterTypeAsync, getAllByPageAsync, getByIdAsync, removeParameterTypeAsync } from '../../components/redux/slices/typeSlice'
import more from '../../assets/svgs/more.svg'
import edit from '../../assets/svgs/edit.svg'
import trash from '../../assets/svgs/trash.svg'
const Type = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const [id, setId] = useState(null)
  const getById = useSelector((state) => state.type.getById)

  const { data } = useSelector((state) => (state.type.data))
  const { totalPages } = useSelector((state) => state.type.data)
  const totalParameterTypes = useSelector((state) => state.type.totalParameterTypes)
  const editparameterType = useSelector((state) => state.type.editParameterType)
  const [page, setPage] = useState(1)
  const [messageApi, contextHolder] = message.useMessage();
  const showModal = () => {
    setIsModalOpen(true);
    dispatch(getByIdAsync(id))

  };
  useEffect(() => {
    if (id) {
      form.setFieldsValue(
        {
          name: getById[0]?.name,
          description: getById[0]?.description
        }
      )
    }

  }, [getById])

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);

  };

  const onFinish = values => {
    if (id) {
      dispatch(editParameterTypeAsync(
        {
          parameterTypes: [
            {
              id: id,
              name: values.name,
              description: values.description
            }
          ]
        }

      ))

      setTimeout(() => {
        dispatch(getAllByPageAsync({
          page: page
        }))
      }, 1000);

      setTimeout(() => {
        messageApi.open({
          type: 'success',
          content: 'Ugurla redakte edildi',
        });
      }, 1500);


    }
    else {
      dispatch(addParameterTypeAsync({
        parameterTypes: [
          {
            name: values.name,
            description: values.description
          }
        ]
      }))

      messageApi.open({
        type: 'success',
        content: 'Ugurla elave edildi',
      });

      form.resetFields()
      dispatch(getAllByPageAsync({
        page: page
      }))
    }

  };

  const confirm = e => {
    console.log(e);
    message.success('Click on Yes');
    dispatch(removeParameterTypeAsync(
      {
        id: id
      }
    ))

    dispatch(getAllByPageAsync(
      {
        page:page
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
            {contextHolder}
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
      dataIndex: '№',
      key: '№',
      render: (i, record, index) => (
        <>
          {index + 1}
        </>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'İzah',
      dataIndex: 'description',
      key: 'izah',
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

  useEffect(() => {
    dispatch(getAllByPageAsync(
      {
        page: page
      }
    ))
  }, [page])
  return (
    <div>
      <div className='type'>
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
                      <img src={addCircle} /><span>{id ? "Duzelis et" : "Elave et"}</span>
                    </div>
                    <hr />
                  </>
                }
                closable={{'aria-label': 'Custom Close Button'}}
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

            <Table className='tab' columns={columns} dataSource={data} pagination={false} />
          </div>
          <Pagination onChange={(page) => setPage(page)} className='page' total={totalParameterTypes} current={page} pageSize={totalParameterTypes / totalPages} />
        </div>
      </div>
    </div>
  )
}

export default Type