import React from 'react'
import 'flowbite';

const Gallery = () => {
    return (

        <div>
         
            <div className="flex items-center justify-center  py-4 md:py-8 flex-wrap ">
                
                <div className='mt-20'>
                <h3 className='text-center text-white font-bold text-3xl mb-10'>Beti and Bona Wedding momories 💍 </h3>
                <div>
                    <button type="button" className="text-blue-500 hover:text-white border border-blue-500 bg-gray-900 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3">All</button>
                    <button type="button" className="text-white border border-gray-900 bg-gray-900 hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3">Brides</button>
                    <button type="button" className="text-white border border-gray-900 bg-gray-900 hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3">Family</button>
                    <button type="button" className="text-white border border-gray-900 bg-gray-900 hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3">Random</button>
                    <button type="button" className="text-white border border-gray-900 bg-gray-900 hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-800 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3">Laughing</button>
                </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-5 lg:px-24 pb-10">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery