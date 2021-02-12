import { formatPrice } from './Helpers';
import { Product } from './types';


type Props = {
    product: Product;
    onSelectproduct: (product: Product)=> void;
    isSelected: boolean;
}


function ProductCard({ product, onSelectproduct, isSelected}: Props ){
    return(
        <div className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectproduct(product)}
        > 
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