import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[] , product: Product) {
    return selectedProducts.some(item => item.id === product.id);
}

//FORMATAR PREÇO, UNIDADES DEPOIS DA VIRGULA E TUDO MAIS
export function formatPrice( price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl',   
        minimumFractionDigits: 2,
    });

    return formatter.format(price);
}