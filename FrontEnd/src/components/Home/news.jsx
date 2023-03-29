import React from 'react'

const news = () => {
    const callouts = [
        {
            name: 'Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?',
            description: 'Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe cổ xưa nhất trên thế ...',
            imageSrc: 'https://www.petmart.vn/wp-content/uploads/2019/07/giong-cho-alaskan-malamute-khong-lo-lieu-gia-co-re.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '#',
        },
        {
            name: 'Hãy dừng lại nếu bạn đang cho chó mèo ăn chay',
            description: 'Hãy dừng ngay lại việc cho chó mèo ăn chay hoặc rau củ quả với hàm lượng lớn trong một ...',
            imageSrc: 'https://www.petmart.vn/wp-content/uploads/2017/09/hay-dung-lai-neu-ban-dang-cho-cho-meo-an-chay-768x402.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '#',
        },
        {
            name: 'Chu kỳ kinh nguyệt của chó cái (sa lơ) bao nhiêu ngày?',
            description: ' Cứ nửa năm một lần là đến chu kỳ kinh nguyệt của chó. 1 năm 2 lần. Nếu như bạn ...',
            imageSrc: 'https://www.petmart.vn/wp-content/uploads/2015/12/chu-ky-kinh-nguyet-cua-cho-cai-sa-lo-bao-nhieu-ngay-768x402.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
        },
    ]
    return (

        <div className="bg-white-100 ">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  grid grid-cols-3 grid-flow-col gap-4 py-20">
                <div>
                    <h1></h1><img className='rounded-lg  hover:scale-110 ease-in duration-500' src="https://cdn.shopify.com/s/files/1/0309/7621/files/banner_4_590x789_crop_center.png?v=1620302128" alt="" /></div>

                <div>
                    <h1></h1><img className='rounded-lg  hover:scale-110 ease-in duration-500' src="https://cdn.shopify.com/s/files/1/0309/7621/files/banner_5_590x789_crop_center.png?v=1620302151" alt="" /></div>

                <div>
                    <h1></h1><img className='rounded-lg  hover:scale-110 ease-in duration-500' src="https://cdn.shopify.com/s/files/1/0309/7621/files/Rectangle_13_590x789_crop_center.png?v=1620310033" alt="" /></div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b ">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
                    <h2 className="text-2xl font-bold text-amber-300">Tin Tức</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0  ">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative ">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default news
