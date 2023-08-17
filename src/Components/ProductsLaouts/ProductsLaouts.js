import React from 'react';
import AllProducts from './AllProducts/AllProducts';
import Selected from './selected/Selected';
import Price from './Price/Price';

const ProductsLaouts = () => {
    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-24">
                    <AllProducts/>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-4 text-xl w-80 mx-auto h-full bg-base-200 text-base-content pt-28">
                        {/* Sidebar content here */}
                        <><Selected/></>
                        <><Price/></>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductsLaouts;