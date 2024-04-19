import React from 'react'
import Navbar from '../admin/navbar'


const Layout = ({ children }) => {
    return (
        <>
            <div className="grid grid-cols-10 gap-4">
                <div className='col-span-2'>
                    <Navbar />
                </div>
                <div className='col-span-8'>
                    {children}
                </div>
            </div>

        </>
    )
}

export default Layout