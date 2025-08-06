import React, { useEffect, useState } from 'react'
import './category.scss'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryAsync } from '../redux/slices/MainSlice';
const Category = () => {
    const [category, setCategory] = useState(false)
    const toggleCategory = () => {
        
        setCategory(prev => !prev);
    };
    const categories = useSelector(state => state.main.category)
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getAllCategoryAsync({
            statusId: 0,
            orderByCountDesc: true,
            decription:null,
            name:"Abşeron",
            regionId:3
        }))
    }, [])


    return (
        <>
            <div className={`category ${category ? "open" : ''}`}>
                {
                    categories.map((item) => (
                        <>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>
                                    <span>{item.count}</span>
                                </div>
                            </div>

                            {/* <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div>
                            <div className="boxes">
                                <div className="box">
                                    <div className="title">
                                        <img src="	https://dev-reyestr.culture.az/assets/download-CTKFWduB.png" alt="" />
                                        <span>{item.name}</span>
                                    </div>

                                    <span>{item.count}</span>
                                </div>
                            </div> */}
                        </>
                    ))
                }

                {
                    category && (
                        <div onClick={toggleCategory} className='span'><MdKeyboardDoubleArrowRight /></div>

                    )
                }
                {
                    !category && (
                        <div className='span'  onClick={toggleCategory}><MdKeyboardDoubleArrowLeft /></div>
                    )
                }

            </div>


        </>

    )
}

export default Category