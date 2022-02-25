import React from 'react'
import "./BagNavbar.css"
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteBagData, getBagData, patchBagData, patchBagSizesData } from '../../redux/Bag/action';


export const BagProduct = () => {
    const bagData = useSelector(state => state.bag.bagData)
    console.log(bagData)
    const dispatch = useDispatch()
    let totalAmount = 0
    bagData?.map((e) => totalAmount += Math.floor(Number(e.off_price) * ((100 - Number(e.discount)) / 100)))
    // console.log(totalAmount);


    useEffect(() => {
        dispatch(getBagData())
        // setBagModel(false)

    }, [dispatch])
    const handleModelBagClose=(id)=>{dispatch(deleteBagData(id))}

    return (
        <div>
            {bagData.map((e, i) =>
                <div className='pr marginTop'>
                    <div><img src={e.images.image1} alt=""></img></div>
                    <div><p className='fontBold'>{e.title}</p>
                        <p className='font14'>{e.description}</p>
                        <div className="gridData" >
                            <div className="subGridDiv1 marginTop">Size:{e.selected_size}▼  </div>
                            <div className="subGridDiv2 marginTop}">Qty:{e.quantity}▼</div>
                        </div>
                        <div className='price'> <h3> ₹{Math.floor(Number(e.off_price) * ((100 - Number(e.discount)) / 100))}</h3><p className='off'>{e.off_price}</p><p className='disc'>{e.discount}% OFF</p></div>

                    </div>

                    {/* <div className="closeBagModel">
                        <div onClick={handleModelBagClose(e.id)} > × </div>
                    </div> */}
                </div>
            )}
        </div>
    )
}

// export default BagProduct