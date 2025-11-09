import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Marketplace2 = () => {
    const business = useSelector((state) => state.businessReducer.business);
    const dispatch = useDispatch()

  return (
    <div>
        {
            !cars ? <p>No cars found</p>
            :business.map((business))
        }
    </div>
  )
}

export default Marketplace2