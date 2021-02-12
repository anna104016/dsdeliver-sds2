import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import ProductList from './ProductList';
import { Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import { OrderLocationData } from './types';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './Helpers';
import './styles.css';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);
    

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(() => {
            toast.error('Erro ao carregadar o menu');
        })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload)
          .then((response) => {
            toast.success(`Pedido enviado com sucesso! Nº ${response.data.id}`);
            setSelectedProducts([]);
        })
          .catch(() => {
            toast.error('Erro ao enviar pedido');
          })
      }
    
    return(
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList 
                    products={products}
                    onSelectproduct={handleSelectProduct} 
                    selectedProducts={selectedProducts}
                /> 
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary 
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer />
        </>
    )
}

export default Orders;