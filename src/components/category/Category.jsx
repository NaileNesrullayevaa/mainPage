import React, { useEffect, useState } from 'react'
import './category.scss'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAsync, getAllPageAsync, setSelectedCategoryIds } from '../redux/slices/MainSlice';
const Category = () => {
    const dispatch = useDispatch()
    const categoryIds = useSelector(state => state.main.selectedCategoryIds)
    const [category, setCategory] = useState(false)

    const handleCategoryId = (id) => {
        if (categoryIds.includes(id)) {
            dispatch(setSelectedCategoryIds(categoryIds.filter((item) => item !== id)))
        }
        else {
            dispatch(setSelectedCategoryIds([...categoryIds, id]))
        }
    }
    console.log(categoryIds)

    const toggleCategory = () => {
        setCategory(prev => !prev);
    };
    const categories = useSelector(state => state.main.category)
    console.log(categories)

    useEffect(() => {
        dispatch(getAllCategoryAsync({
            statusId: 0,
            orderByCountDesc: true,
            decription: null,
            name: "Abşeron",
            regionId: 3,
        }))
    }, [])



    // useEffect(() => {
    //     dispatch(getCertificateAsync())
    // }, [])
    return (
        <>
            <div className={`category ${category ? "open" : ''}`}>
                <div className='category-div'>
                    {
                        categories.map((item) => (
                            <>
                                <div className={`boxes ${categoryIds.includes(item.id) ? "active" : ""}`} onClick={() => handleCategoryId(item.id)}>
                                    <div className="box">
                                        <div className="title">
                                            <img src="https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                            <span>{item.name}</span>
                                        </div>
                                        <span>{item.count}</span>
                                    </div>
                                </div>

                            </>
                        ))
                    }
                </div>
                {
                    category && (
                        <div onClick={toggleCategory} className='span'><MdKeyboardDoubleArrowRight /></div>

                    )
                }
                {
                    !category && (
                        <div className='span' onClick={toggleCategory}><MdKeyboardDoubleArrowLeft /></div>
                    )
                }
            </div>



        </>

    )
}

export default Category