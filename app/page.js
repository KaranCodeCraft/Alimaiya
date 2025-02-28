"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {

  const scrollProducts = [
    {
      title: "Health Care",
      img: "https://www.patanjaliayurved.net/media/images/health-care.webp",
    },
    {
      title: "Personal Care",
      img: "https://www.patanjaliayurved.net/media/images/personal-care.webp",
    },
    {
      title: "Medicine",
      img: "https://www.patanjaliayurved.net/media/images/medicine.webp",
    },
    {
      title: "Nutraceuticals",
      img: "https://www.patanjaliayurved.net/media/images/nutraceuticals.webp",
    },
    {
      title: "Paridhan",
      img: "https://www.patanjaliayurved.net/media/images/paridhan-a.webp",
    },
    {
      title: "Hawan Samagri",
      img: "https://www.patanjaliayurved.net/media/images/Hawan_samagr_icon.webp",
    },
  ];

  const featuredProduct = [
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },
    {
      image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
      title: "Yuvan Gold Plus",
      desc: "Pearl yellow colour vegi capsule with dark brown colour powder, characteristic odour and taste",
      price: 160
    },

  ]
  return (
    <>
      {/* Banner Section */}
      <div className="container mx-auto">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="transition-opacity duration-500 ease-in-out">
              <Image
                src="/Images/image1.webp"
                alt="Image 1"
                width={1920}
                height={300}
                className="object-cover"
              />
            </CarouselItem>
            <CarouselItem className="transition-opacity duration-500 ease-in-out">
              <Image
                src="/Images/image2.webp"
                alt="Image 2"
                width={1920}
                height={300}
                className="object-cover"
              />
            </CarouselItem>
            <CarouselItem className="transition-opacity duration-500 ease-in-out">
              <Image
                src="/Images/image3.webp"
                alt="Image 3"
                width={1920}
                height={300}
                className="object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </div>
      {/* Moving Products */}
      <div className="relative w-full overflow-hidden py-8 p-4 md:px-12">
        <Marquee speed={50} pauseOnHover={true}>
          {scrollProducts.map((camp, index) => (
            <div
              key={index}
              className="mx-4 border border-green-500 rounded-lg shadow-lg w-60"
            >
              <Image
                src={camp.img}
                alt={camp.title}
                width={100}
                height={40}
                className="w-full h-40 object-contain overflow-hidden"
              />
              <div className="pb-4">
                <h3 className="text-green-500 font-semibold text-center">
                  {camp.title}
                </h3>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
      {/* Offer Banner */}
      <div className="flex m-8 space-x-2">

        <Image
          src="https://www.patanjaliayurved.net/media/images/new-user-A.webp"
          alt="Image 3"
          width={1920}
          height={300}
          className="object-cover rounded-md"
        />
        <Image
          src="https://www.patanjaliayurved.net/media/images/buy-medi.webp"
          alt="Image 3"
          width={1920}
          height={300}
          className="object-cover rounded-md"
        />
      </div>
      {/* Featured Products */}
      <section className="text-gray-600 body-font border bg-green-100">
        <h1 className="px-16 pt-4 text-black text-3xl font-bold">Featured Products</h1>
        <Marquee pauseOnHover={true} speed={20}>
          {featuredProduct.map((item, index) => (

            <div className="w-56 p-3 mx-4 my-8 bg-white rounded shadow-2xl" key={index}>
              <a className="relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" width={200} height={200} className="object-cover object-center shadow-2xs" src={item.image} />
              </a>
              <div className="mt-4">
                <p className="border border-green-500 rounded inline px-2 bg-green-200 text-black">Featured</p>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p className="text-sm">{item.desc}</p>
                <p className="mt-1">Rs.{item.price}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Offer Banner */}
      <section>
        <h1 className="text-2xl font-bold mt-4 pl-8">Daily & Seasonal Products</h1>
        <div className="flex m-8 space-x-2">
          <div>

          <Image
            src="https://www.patanjaliayurved.net/assets/home_slider/1737889498cleaning.webp"
            alt="Image 3"
            width={1920}
            height={300}
            className="object-cover rounded-md"
            />
            </div>
            <div>
            
          <Image
            src="https://www.patanjaliayurved.net/assets/home_slider/1738124342nutrelaA.webp"
            alt="Image 3"
            width={1920}
            height={300}
            className="object-cover rounded-md"
          />
            
            </div>
            <div>
          <Image
            src="https://www.patanjaliayurved.net/assets/home_slider/1737889479winter.webp"
            alt="Image 3"
            width={1920}
            height={300}
            className="object-cover rounded-md"
          />
          </div>
        </div>
      </section>

      {/* Festival Highlight */}
      <section className="text-gray-600 body-font border bg-green-100">
        <h1 className="px-16 pt-4 text-black text-3xl font-bold">Daily & Seasonal Products</h1>
        <Marquee>
          {featuredProduct.map((item, index) => (

            <div className="w-56 p-3 mx-4 my-8 bg-white rounded shadow-2xl" key={index}>
              <a className="relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" width={200} height={200} className="object-cover object-center shadow-2xs" src={item.image} />
              </a>
              <div className="mt-4">
                <p className="border border-green-500 rounded inline px-2 bg-green-200 text-black">Featured</p>
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                <p className="text-sm">{item.desc}</p>
                <p className="mt-1">Rs.{item.price}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}