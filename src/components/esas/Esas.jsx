import React, { useEffect, useState } from 'react'
import './esas.scss'
import list from '../../assets/svgs/list.svg'
// import { Table } from 'antd'
// import { Pagination } from 'antd';
import search2 from '../../assets/svgs/search2.svg'
import esas1 from '../../assets/svgs/esas1.svg'
import esas2 from '../../assets/svgs/esas2.svg'
import esas3 from '../../assets/svgs/esas3.svg'
import esas4 from '../../assets/svgs/esas4.svg'
import esas5 from '../../assets/svgs/esas5.svg'
import passport from '../../assets/svgs/passport.svg'
import { getAllCategoryAsync, getAllPageAsync } from '../redux/slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import List from '../../components/list/List'
import Passport from '../passport/Passport'



const Esas = () => {

    const [dataType, setDataType] = useState('list')
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch()
    const data = useSelector(state => state.main.data)
    console.log(data)
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
            dataIndex: 'googleMapsLink',
            key: 'googleMapsLink',
        },
    ];

    const handeChangeDataType = (type) => {
        setDataType(type),
        setIsActive(!isActive)
    }

    useEffect(() => {
        dispatch(getAllPageAsync({
            Page: page,
            CategoryIds: [
            ],
            Order: null,
            name:data.name,
            category:data.category
        }))
    }, [page])

    return (
        <div className='esas'>
            <div className="text">
                <h2>Əsas səhife</h2>
                <div className="buttons">
                    <button onClick={() => handeChangeDataType('list')} className={`one ${isActive ? "active" : ""}`}><img src={list} alt="" /><span>List</span></button>
                    <button onClick={() => handeChangeDataType('passport')} className={`two ${isActive ? "active2" : ""}`}><img src={passport} alt="" /><span>Passport</span></button>
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
                        <Input className='btn' placeholder="Axtarış" suffix={
                            <img
                                src={search2}
                                alt="icon"

                            />
                        } />
                        <img src={esas1} alt="" />
                        <img src={esas2} alt="" />
                        <img src={esas3} alt="" />
                        <img src={esas4} alt="" />
                        <img src={esas5} alt="" />
                    </div>


                </div>
                {/* <Table className='table' dataSource={data} columns={columns} /> */}
            </div>
            {dataType === 'list' && <List />}
            {dataType === 'passport' && <Passport />}

            {/* <Pagination onChange={(page) => setPage(page)} className='a' defaultCurrent={1} total={total.totalObjects} /> */}
        </div>
    )
}

export default Esas