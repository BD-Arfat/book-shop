import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/03/32/05/99/360_F_332059997_pTIqpe37YPEADwKdVL0ZoAy1K1Qdm02R.jpg)' }}>
                <div className=""></div>
                <div className="w-11/12">
                    <div className="text-left text-black mt-20 ">
                        <h1 className="mb-5 text-6xl font-bold">You can take your <br /> favorite book</h1>
                        <p className="mb-5 w-1/2 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button style={{backgroundColor:'#D9C5C4', border:'none'}} className="btn px-16">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;