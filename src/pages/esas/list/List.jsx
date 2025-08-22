import React, { useEffect, useState } from 'react'
import './list.scss'
import { Table, Tooltip } from 'antd'
import { Pagination } from 'antd';
import { getAllPageAsync } from '../../../components/redux/slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import map from '../../../assets/svgs/map.svg'
const List = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.main.data)
    const total = useSelector(state => state.main.total)
    const [page, setPage] = useState(1)
    console.log(data)
    const color = (i) => {
        if (i === 'Təmirli') {
            return '#219653'

        }
        else if (i === 'Təmirsiz') {
            return '#F2994A'
        }
        else {
            return '#EB5757'
        }
    }
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
            dataIndex: 'status',
            key: 'status',
            render: (i) => (
                <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: color(i) }}></div>
            )
        },
        {
            title: '',
            dataIndex: 'googleMapsLink',
            key: 'googleMapsLink',
            render: (i) => (
                <Tooltip title='Xəritədə bax' placement='topLeft'>
                    <a href={i} target='_blanket'>
                        <img src={map} alt="" />
                    </a>
                </Tooltip>
            )
        },
    ];
    useEffect(() => {
        dispatch(getAllPageAsync({
            Page: page,
            CategoryIds: [
            ],
            Order: null
        }))
    }, [page])

    return (
        <>

            <Table className='table' dataSource={data} columns={columns} pagination={false} />
            <Pagination onChange={(page) => setPage(page)} className='page' defaultCurrent={1} total={total.totalObjects} pageSize={30} />

        </>


    )
}

export default List