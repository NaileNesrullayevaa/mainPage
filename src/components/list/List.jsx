import React, { useEffect, useState } from 'react'
import './list.scss'
import { Table, Tooltip } from 'antd'
import { Pagination } from 'antd';

import { getAllPageAsync } from '../redux/slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';

import map from '../../assets/svgs/map.svg'
const List = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.main.data)
    const total = useSelector(state => state.main.total)
    const [page, setPage] = useState(1)
    console.log(data)
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
            // render: (e) => (
            //     <>
            //         {
            //             e === 'Təmirli' ?
            //                 <div
            //                     style={{
            //                         width: 15,
            //                         height: 15,
            //                         borderRadius: "50%",
            //                         backgroundColor: "rgb(33, 150, 83)"
            //                     }}
            //                 ></div> :
            //                 e === 'Təmirsiz' ? <div
            //                     style={{
            //                         width: 15,
            //                         height: 15,
            //                         borderRadius: "50%",
            //                         backgroundColor: "rgb(242, 153, 74)"
            //                     }}
            //                 ></div> :
            //                     e === 'Qəzali' ? <div
            //                         style={{
            //                             width: 15,
            //                             height: 15,
            //                             borderRadius: "50%",
            //                             backgroundColor: "rgb(235, 87, 87)"
            //                         }}
            //                     ></div>
                        
            //         }


                    
             


            //     </>


            // )
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
        <div className='esas'>


            <div className="boxess">

                <Table className='table' dataSource={data} columns={columns} />
            </div>

            <Pagination onChange={(page) => setPage(page)} className='a' defaultCurrent={1} total={total.totalObjects} />
        </div>
    )
}

export default List