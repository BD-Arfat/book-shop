import React from 'react';

const Category = () => {
    return (
        <div>
            <h1 className='font-bold text-5xl mt-16 mb-24'>The category books from us are <br/> available for you</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-24'>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali story book</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali drama book</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali poetry book</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali novel book</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali literature book</h2>
                    </div>
                </div>
                <div style={{backgroundColor:'#E2CBC5'}} className="card text-black  transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Bengali independence book</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;