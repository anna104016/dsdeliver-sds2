import { Product } from './types';


type Props = {
    product: Product;
}
//FORMATAR PREÇO, UNIDADES DEPOIS DA VIRGULA E TUDO MAIS
function formatPrice( price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl',   
        minimumFractionDigits: 2,
    });

    return formatter.format(price);
}

function ProductCard({ product }: Props ){
    return(
        <div className="order-card-container"> 
            <h3 className="order-card-tittle">
                {product.name}
            </h3>
            <img src={product.imageUri} className="order-card-image" alt={product.name} />
            <h3 className="order-card-price">
                {formatPrice(product.price)}
           </h3>

           <div className="order-card-discription">
               <h3>Descrição</h3>
               <p>
                {product.description}
               </p>
           </div>
        </div>
    )
}

export default ProductCard;