import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
    const products = [
        {
            id: 1,
            name: 'ALASKA NÂU ĐỎ BÉO Ú',
            href: '#',
            price: '18.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2021/01/138558962_1878620772285998_6055239838105162140_o-270x270.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'PUG SIEU YÊU SIÊU CƯNG',
            href: '#',
            price: '8.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2020/08/116791757_1725293660952044_1108601392815779091_o-270x270.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'MÈO TAI CỤP',
            href: '#',
            price: '20.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2020/06/104561903_1675245245956886_5106103639796273502_o-270x270.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'MÈO TRẮNG CHÂN LÙN ',
            href: '#',
            price: '25.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2023/03/941304940b16d6488f07-e1679378346100-270x270.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 1,
            name: 'ALASKA NÂU ĐỎ BÉO Ú',
            href: '#',
            price: '18.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2021/01/138558962_1878620772285998_6055239838105162140_o-270x270.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'PUG SIEU YÊU SIÊU CƯNG',
            href: '#',
            price: '8.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2020/08/116791757_1725293660952044_1108601392815779091_o-270x270.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'MÈO TAI CỤP',
            href: '#',
            price: '20.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2020/06/104561903_1675245245956886_5106103639796273502_o-270x270.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'MÈO TRẮNG CHÂN LÙN ',
            href: '#',
            price: '25.000.000 đ',
            imageSrc: 'https://matpetfamily.com/wp-content/uploads/2023/03/941304940b16d6488f07-e1679378346100-270x270.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
    ]

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold text-amber-300 mb-10">SẢN PHẨM NỔI BẬT</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product) => (

                        <Link key={product.id} href={product.slug} className="group shadow-md rounded-b-lg">
                            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={product.imageSrc}
                                    // alt={product.images}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                                <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button class="bg-amber-300 text-white py-2 px-5 rounded-lg">Add to cart</button>
                                </div>
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700 pl-3">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900 pb-6 pl-3">{product.price}</p>
                        </Link>

                    ))}

                </div>
            </div>
        </div>
    )
}

export default Product