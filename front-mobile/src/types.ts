export type Order ={
    id: number;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    product: Product[];
    total: number;
}

export type Product ={
    id: number;
    name: string;
    price: number;
    description: string;
    imageURL: string;
}