interface IVendor {
    name: string;
    rating: number;
    reviews: number;
}

interface IDelivery {
    time: string;
    cost: number;
}

interface IGraphicsCard {
    vendor: string;
    type: string;
    memory: string;
}

interface ISpecifications {
    brand: string;
    model_name: string;
    processor: string;
    ram: string;
    storage: string;
    graphics_card: IGraphicsCard[];
    display: string;
    operating_system: string;
    special_features: string[];
}

interface IAboutSection {
    title: string;
    content: string;
}

interface IPayment {
    methods: string[];
    installments: boolean;
}

export interface IProduct {
    id: string | number;
    name: string;
    description: string;
    vendor: IVendor;
    price: number;
    discount: number;
    delivery: IDelivery;
    'main_image': string;
    multimedia: string[];
    specifications: ISpecifications;
    about: IAboutSection[];
    payment: IPayment;
    alternatives: unknown[];
}
