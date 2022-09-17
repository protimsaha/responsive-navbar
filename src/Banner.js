import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div class="hero min-h-[70vh] mt-16 bg-accent px-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div>
                        <div data-aos="fade-right" data-aos-delay="200"
                            data-aos-duration="1000 "
                            data-aos-easing="ease-in-out" data-aos-once="false"><h5 className='text-xl font-semibold'>BEST QUALITY</h5></div>
                        <div data-aos="fade-right" data-aos-delay="400"
                            data-aos-duration="900 "
                            data-aos-easing="ease-in-out" data-aos-once="false"> <h1 class="text-5xl font-bold">Professional Cleaning Service</h1></div>
                        <div data-aos="fade-right" data-aos-delay="600"
                            data-aos-duration="800 "
                            data-aos-easing="ease-in-out" data-aos-once="false"><p class="py-6 w-[70%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div>
                        <div><button class="btn btn-primary">Get Started</button></div>
                    </div>
                    <div className='shrink-0 h-[60vh]'>
                        <img src='https://raw.githubusercontent.com/mir-hussain/clean-co-live/main/src/assets/image/bucketgirl.png' alt='' class="h-full" />
                    </div>
                </div>
            </div>
            <div className='p-10 mx-auto bg-base-200 mt-[-50px] z-50 relative rounded-xl w-[90%] shadow-lg'>
                <h4 className='text-xl mb-2 font-semibold'>GET FREE ESTIMATE</h4>
                <div className='grid md:grid-cols-4 gap-3 grid-cols-1'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full " />
                </div>
            </div>
        </>
    );
};

export default Banner;