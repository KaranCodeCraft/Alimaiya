import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from "next/image"
import Link from "next/link"

export default async function Page({ params }) {
    const slug = (await params).slug

    const products = [
        {
            slug: "ashwagandha-churna",
            name: "Ashwagandha Churna",
            desc: "Boosts immunity and helps in stress relief naturally.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739512839YouvanGoldPlusTwoCaphomeimagenew.webp",
        },
        {
            slug: "aloe-vera-juice",
            name: "Aloe Vera Juice",
            desc: "Purifies blood and supports digestion for better health.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739513300Untitled-1.webp",
        },
        {
            slug: "amla-juice",
            name: "Amla Juice",
            desc: "Rich in Vitamin C, boosts immunity and hair health.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739508861womensuperfoodhome.png",
        },
        {
            slug: "giloy-juice",
            name: "Giloy Juice",
            desc: "Strengthens immunity and improves metabolism.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739940211orthogrithomeimage.webp",
        },
        {
            slug: "shatavari-churna",
            name: "Shatavari Churna",
            desc: "Supports women's health and boosts lactation.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1740046788aloeverajuicewithfibre.webp",
        },
        {
            slug: "neem-tablet",
            name: "Neem Tablet",
            desc: "Detoxifies blood and promotes clear skin naturally.",
            image: "https://www.patanjaliayurved.net/assets/product_images/400x400/1739963227madhugrit.webp",
        },
    ];

    return (
        <>
            <section className="container p-8 border bg-green-200 font-bold">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{slug}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {products.map((item, index) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                                <Link href={`/product/${item.slug}`}>
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <Image width={100} height={100} className="h-40 rounded w-full object-cover object-center mb-6" src={item.image} alt="content" />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{slug}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.name}</h2>
                                        <p className="leading-relaxed text-base">{item.desc}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}