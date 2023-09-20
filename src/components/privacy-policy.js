import React, { useEffect } from 'react'
import Navbar from './navbar'
import NinthPage from './ninth-page';
import Policy from './policy';
const PrivacyPolicy = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>


            <div className="select-none ">
                <Navbar />

                <Policy />

                <NinthPage />
            </div>

        </>
    )
}

export default PrivacyPolicy