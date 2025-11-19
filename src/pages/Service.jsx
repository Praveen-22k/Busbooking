import React from 'react'
import SecurePaymentPage from '../component/Servicecomp/SecurePaymentPage'
import RefundPolicyPage from '../component/Servicecomp/RefundPolicyPage'
import CustomerSupport from '../component/Servicecomp/CustomerSupport'
import Footer from '../component/Footer/Footer'
const Service = () => {
  return (
    <div>
      <SecurePaymentPage/>
      <RefundPolicyPage/>
      <CustomerSupport/>
      <Footer/>
    </div>
  )
}

export default Service