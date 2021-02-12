import { checkIsSelected } from './Helpers';
import ProductCard from './ProductCard';
import { Product } from "./types";

type Props = { 
    products: Product[];
    selectedProducts: Product[];
    onSelectproduct: (product: Product)=> void;
}

function ProductList( { products, selectedProducts, onSelectproduct }: Props ){
    return(
        <div className="orders-list-container"> 
           <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product}
                        onSelectproduct={onSelectproduct}
                        isSelected={checkIsSelected(selectedProducts, product )}
                    />
                ))}
           </div>
        </div>
    )
}

export default ProductList;