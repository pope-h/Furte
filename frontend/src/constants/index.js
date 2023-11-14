import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-02",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-03",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-04",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@furte.com", link: "mailto:customer@furte.com" },
            { name: "+234 708 668 1344", link: "tel:+234 708 668 1344" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const hero = [
    {
        id: 1,
        src:"https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_640.jpg 1x, https://cdn.pixabay.com/photo/2016/09/22/11/55/kitchen-1687121_1280.jpg 2x",
        alt:"Kitchen Living Room illustration and picture",
        title:"Kitchen Living Room",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 2,
        src:"https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_640.jpg 1x, https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg 2x",
        alt:"Dining Room Living Room photo and picture",
        title:"Dining Room Living Room",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 3,
        src:"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_640.jpg 1x, https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg 2x",
        alt:"Living Room Victorian photo and picture",
        title:"Living Room Victorian",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 4,
        src:"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg 1x, https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg 2x",
        alt:"Furniture Living Room photo and picture",
        title:"Furniture Living Room",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 5,
        src:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg 1x, https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg 2x",
        alt:"Interior Living Room photo and picture",
        title:"Interior Living Room",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 6,
        src:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg 1x, https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg 2x",
        alt:"Bedroom Bed photo and picture",
        title:"Bedroom Bed",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 7,
        src:"https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg 1x, https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg 2x",
        alt:"Office Sitting Room photo and picture",
        title:"Office Sitting Room",
        style: { maxWidth: '100%', maxHeight: '100%' }
    }
];