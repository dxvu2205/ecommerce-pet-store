import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carausel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (

    <Carousel responsive={responsive} ssr={true} swipeable={true}
      autoPlaySpeed={1000} infinite={true} showDots={false} dotListClass="text-amber-300 custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="relative overflow-hidden bg-white">
        {/* <img className=" absolute z-40 " width="100%" src="https://cdn.shopify.com/s/files/1/0309/7621/files/slide_1_1810x700_crop_center.png?v=1620302496" alt="" /> */}

        <div className=" pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2021/01/138558962_1878620772285998_6055239838105162140_o-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2023/03/3901074a498a94d4cd9b-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2022/11/e6a80fc278bda1e3f8ac-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2023/03/941304940b16d6488f07-e1679378346100-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2022/11/EE8C8DD8-C7BC-4E47-97B5-3B6F251E9975-270x270.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2022/02/273437012_472239601205150_3512259468476545658_n-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://matpetfamily.com/wp-content/uploads/2020/02/Pho%CC%81c-270x270.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-amber-300 py-3 px-8 text-center font-medium text-white hover:bg-red-600"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white">
        
        <img width="100%" src="https://cdn.shopify.com/s/files/1/0309/7621/files/slide_1_1810x700_crop_center.png?v=1620302496" alt="" />
        
      </div>
      <div className="relative overflow-hidden bg-white">

        <img width="100%" src="https://cdn.shopify.com/s/files/1/0309/7621/files/slide_2_1810x700_crop_center.png?v=1620302571" alt="" />
      </div>
      <div className="relative overflow-hidden bg-white">

        <img width="100%" src="https://cdn.shopify.com/s/files/1/0309/7621/files/slide_3_1810x700_crop_top.png?v=1620303005" alt="" />
      </div>

    </Carousel>
  )
}

export default Carausel;