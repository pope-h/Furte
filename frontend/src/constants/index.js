import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, couch2, table, stool, vintageBedframe, wardrobe, workplace } from "../assets/images";

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

export const thumbnails = [
    {
        id: 4324,
        product_thumbnail: couch2,
        product_name: "Couch",
        product_price: "$200.20",
        product_stock: 8,
    },
    {
        id: 1546,
        product_thumbnail: table,
        product_name: "Table",
        product_price: "$200.20",
        product_stock: 26,
    },
    {
        id: 1092,
        product_thumbnail: stool,
        product_name: "Stool",
        product_price: "$200.20",
        product_stock: 43,
    },
    {
        id: 2103,
        product_thumbnail: vintageBedframe,
        product_name: "Vintage Bedframe",
        product_price: "$200.20",
        product_stock: 0,
    },
    {
        id: 2007,
        product_thumbnail: wardrobe,
        product_name: "Wardrobe",
        product_price: "$200.20",
        product_stock: 18,
    },
    {
        id: 5241,
        product_thumbnail: workplace,
        product_name: "Workplace",
        product_price: "$200.20",
        product_stock: 9,
    }
]

export const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

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
            { name: "Living Room", link: "/products/livingroom" },
            { name: "Bedroom", link: "/products/bedroom" },
            { name: "Dining", link: "/products/dining" },
            { name: "Kitchen", link: "/products/kitchen" },
            { name: "Workplace", link: "/products/workplace" },
            { name: "Outdoor", link: "/products/outdoor" },
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
        alt:"Kitchen illustration and picture",
        title:"Kitchen",
        text:"A functional and stylish space designed for cooking, dining, and socializing. Modern kitchens often feature sleek appliances, ample storage, and contemporary design elements.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 2,
        src:"https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_640.jpg 1x, https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_1280.jpg 2x",
        alt:"Dining Room photo and picture",
        title:"Dining Room",
        text:"A designated area for enjoying meals with family and friends. Dining rooms typically include a table and chairs, creating a welcoming environment for shared meals and special occasions.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 3,
        src:"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_640.jpg 1x, https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg 2x",
        alt:"Living Room Victorian photo and picture",
        title:"Living Room Victorian",
        text:"A living room inspired by the Victorian era, characterized by ornate details, rich colors, and elegant furnishings. Victorian living rooms often showcase intricate patterns, plush upholstery, and antique furniture.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 4,
        src:"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg 1x, https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg 2x",
        alt:"Furniture Living Room photo and picture",
        title:"Furniture Living Room",
        text:"A collection of furniture pieces curated for the living room. This may include sofas, chairs, coffee tables, and entertainment units designed to enhance comfort and style in the central space of the home.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 5,
        src:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg 1x, https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg 2x",
        alt:"Interior Living Room photo and picture",
        title:"Interior Living Room",
        text:"The overall aesthetic and arrangement of the living room's interior design. It encompasses the choice of colors, furniture layout, decor, and accessories, creating a cohesive and harmonious look.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 6,
        src:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_640.jpg 1x, https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg 2x",
        alt:"Bedroom Bed photo and picture",
        title:"Bedroom Bed",
        text:"A comfortable and inviting sleeping space centered around a bed. Bedroom design often focuses on creating a relaxing atmosphere, with attention to bedding, lighting, and personalized decor.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 7,
        src:"https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_640.jpg 1x, https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg 2x",
        alt:"Office Sitting Room photo and picture",
        title:"Office Sitting Room",
        text:"A versatile space designed for work and relaxation. An office sitting room may feature a comfortable seating area alongside a functional workspace, combining productivity with comfort for remote work or quiet reading.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    }
];

export const categories = [
    {
        id: 1,
        src:"https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
        srcset:"https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg 1x, https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg 2x",
        alt:"Interior Living Room photo and picture",
        title:"Interior Living Room",
        text:"The overall aesthetic and arrangement of the living room's interior design. It encompasses the choice of colors, furniture layout, decor, and accessories, creating a cohesive and harmonious look.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 2,
        src:"https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_640.jpg",
        srcset:"https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_640.jpg 1x, https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg 2x",
        alt:"Bedroom Interior Design photo and picture",
        title:"Bedroom Interior Design",
        text:"A comfortable and inviting sleeping space centered around a bed. Bedroom design often focuses on creating a relaxing atmosphere, with attention to bedding, lighting, and personalized decor.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 3,
        src:"https://cdn.pixabay.com/photo/2015/12/05/23/42/dining-room-1078930_640.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/12/05/23/42/dining-room-1078930_640.jpg 1x, https://cdn.pixabay.com/photo/2015/12/05/23/42/dining-room-1078930_1280.jpg 2x",
        alt:"Dining Room photo and picture",
        title:"Dining Room",
        text:"A designated area for enjoying meals with family and friends. Dining rooms typically include a table and chairs, creating a welcoming environment for shared meals and special occasions.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 4,
        src:"https://cdn.pixabay.com/photo/2015/03/14/19/59/kitchen-673729_640.jpg",
        srcset:"https://cdn.pixabay.com/photo/2015/03/14/19/59/kitchen-673729_640.jpg 1x, https://cdn.pixabay.com/photo/2015/03/14/19/59/kitchen-673729_1280.jpg 2x",
        alt:"Kitchen Design illustration and picture",
        title:"Kitchen Design",
        text:"A functional and stylish space designed for cooking, dining, and socializing. Modern kitchens often feature sleek appliances, ample storage, and contemporary design elements.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 5,
        src:"https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_640.jpg",
        srcset:"https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_640.jpg 1x, https://cdn.pixabay.com/photo/2020/08/25/18/28/workplace-5517744_1280.jpg 2x",
        alt:"Workplace Workspace photo and picture",
        title:"Workplace Workspace",
        text:"A designated area for working, studying, or pursuing hobbies. A workspace may include a desk, chair, and storage, creating a functional and productive environment.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    },
    {
        id: 6,
        src:"https://cdn.pixabay.com/photo/2018/08/16/05/43/picnic-table-3609712_640.jpg",
        srcset:"https://cdn.pixabay.com/photo/2018/08/16/05/43/picnic-table-3609712_640.jpg 1x, https://cdn.pixabay.com/photo/2018/08/16/05/43/picnic-table-3609712_1280.jpg 2x",
        alt:"Outdoor Furniture photo and picture",
        title:"Outdoor Furniture",
        text:"Furniture designed for outdoor use, such as patios, decks, and gardens. Outdoor furniture may include chairs, tables, and lounges, creating a comfortable and inviting space for relaxing and entertaining.",
        style: { maxWidth: '100%', maxHeight: '100%' }
    }
]

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <i className='bx bx-grid-alt'></i>
	},
	{
		key: 'products',
		label: 'Products',
		path: '/admin/products',
		icon: <i className='bx bx-cube-alt'></i>
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/admin/orders',
		icon: <i className='bx bx-cart' ></i>
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/admin/customers',
		icon: <i className='bx bxs-user-detail'></i>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/admin/transactions',
		icon: <i className='bx bx-detail'></i>
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/admin/messages',
		icon: <i className='bx bx-chat' ></i>
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/admin/settings',
		icon: <i className='bx bx-cog' ></i>
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/admin/support',
		icon: <i className='bx bx-help-circle'></i>
	}
]

export function getOrderStatus(status) {
	switch (status) {
		case 'PLACED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'CONFIRMED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'SHIPPED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'OUT_FOR_DELIVERY':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'DELIVERED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}