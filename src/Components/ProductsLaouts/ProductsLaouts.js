import React from 'react';
import AllProducts from './AllProducts/AllProducts';

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
                        <><a>Sidebar Item 1</a></>
                        <><a>Sidebar Item 2</a></>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductsLaouts;