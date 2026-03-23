import React from 'react'

const Products = () => {
    const products = [
        { id: 1, img: "./product1.png", title: "Protein 100% Green", price: "$85" },
        { id: 2, img: "./product2.png", title: "Protein 100% Green", price: "$85" },
        { id: 3, img: "./product3.png", title: "Protein 100% Green", price: "$85" },
        { id: 4, img: "./product4.png", title: "Protein 100% Green", price: "$85" },
    ]

    return (
        <section className='bg-[#121212] text-white text-center py-12 md:py-20 px-4 sm:px-8 md:px-16'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                Protein Products
            </h1>
            <p className='text-[#808080] mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis Theme natoque
            </p>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div key={product.id} className="font-bold group">
                        <div className="relative overflow-hidden cursor-pointer rounded-lg">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="
                                absolute inset-0 bg-[#121212]/60
                                flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition duration-300
                            ">
                                <button className="bg-[#f24d3a] hover:bg-[#d43321] text-white px-5 py-2.5 text-sm font-semibold uppercase">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h2 className="text-lg sm:text-xl mt-4">{product.title}</h2>
                        <p className="text-[#f24d3a] mt-1">{product.price}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Products