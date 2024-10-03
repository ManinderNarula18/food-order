import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext'
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();
    console.log(success,orderId);

    const verifyPayment = async () => {
      const reponse = await axios.post(url+"/api/order/verify",{success,orderId});
      if (reponse.data.success) {
        navigate("/myorders");
      } else {
        navigate("/")
      }
    }

    useEffect(()=>{
      verifyPayment();
    },[])

  return (
    <div className='verfiy'>
      <div className="sppiner"></div>
    </div>
  )
}

export default Verify