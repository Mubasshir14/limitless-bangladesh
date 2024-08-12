import React from 'react';
import img1 from '../../assets/person/1.png';
import img2 from '../../assets/person/20.png';
import img3 from '../../assets/person/3.png';
import img4 from '../../assets/person/4.png';
import img5 from '../../assets/person/5.png';
import img6 from '../../assets/person/6.png';
import img7 from '../../assets/person/7.png';
import img8 from '../../assets/person/8.png';
import img9 from '../../assets/person/14.png';
import img10 from '../../assets/person/10.png';

const Gallery = () => {
    return (
        <div>
            <h1 className='font-cinzel text-lg md:text-2xl lg:text-3xl text-center font-bold'>Scenes from Bangladesh</h1>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img10} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img5} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img6} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img7} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " src={img8} />
                    <img src={img9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square transition-all duration-1000 transform hover:scale-105 " />
                </div>
            </section>
        </div>
    );
};

export default Gallery;
