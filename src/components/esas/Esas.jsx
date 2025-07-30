import React, { useEffect } from 'react'
import './esas.scss'
import list from '../../assets/imgs/list.png'
import { Table } from 'antd'
import { Pagination } from 'antd';
import search from '../../assets/imgs/search.png'
import group1 from '../../assets/imgs/group1.png'
import group2 from '../../assets/imgs/group2.png'
import group3 from '../../assets/imgs/group3.png'
import group4 from '../../assets/imgs/group4.png'
import group5 from '../../assets/imgs/group5.png'
import { getAllPageAsync } from '../redux/slices/mainSlice';
import { useDispatch, useSelector } from 'react-redux';

const Esas = () => {

    const dispatch = useDispatch()
    const data=useSelector(state=>state.main.getAllPage)
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: '№',
            dataIndex: '№',
            key: '№',
        },
        {
            title: 'Inventor nomresi',
            dataIndex: 'inventor nomresi',
            key: 'inventor nomresi',
        },
        {
            title: 'Obyekt adi',
            dataIndex: 'obyekt adi',
            key: 'obyekt adi',
        },
        {
            title: 'Kategoriya',
            dataIndex: 'kategoriya',
            key: 'kategoriya',
        },
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Isci sayi',
            dataIndex: 'isci sayi',
            key: 'isci sayi',
        },
        {
            title: 'Balans deyeri',
            dataIndex: 'balans deyeri',
            key: 'balans deyeri',
        },
    ];

    useEffect(()=>{
        dispatch(getAllPageAsync())
    },[])
    return (
        <div className='esas'>
            <div className="text">
                <h2>Esas sehife</h2>
                <button><img src={list} alt="" /><span>List</span></button>
            </div>

            <div className="boxess">
                <div className="topp">
                    <button><h4>Cari muessise sayi</h4><h2>32215</h2></button>
                    <button><h4>Cemi istifadeci sayi</h4><h2>2007</h2></button>
                    <button><h4>Temirli</h4><h2>2008</h2></button>
                    <button><h4>Temirsiz</h4><h2>2007</h2></button>
                    <button><h4>Qezali</h4><h2>2008</h2></button>
                    <button className='btn'><span>Axtaris</span><img src={search} alt="" /></button>
                    <img src={group1} alt="" />
                    <img src={group2} alt="" />
                    <img src={group3} alt="" />
                    <img src={group4} alt="" />
                    <img src={group5} alt="" />
                </div>
                <Table className='table' dataSource={dataSource} columns={columns} />
            </div>
            <Pagination className='a' defaultCurrent={1} total={50} />
        </div>
    )
}

export default Esas