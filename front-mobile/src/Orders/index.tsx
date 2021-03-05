import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Alert, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [IsLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fathData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao listar os pedidos'))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused) {
      fathData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDatails', {
      order
    });
  }

  return (
    <>
      <Header />
        <ScrollView style={styles.container}>
         {IsLoading ? (
           <Text style={styles.loadingtext}>Buscando pedidos...</Text>
         ) : (
            orders.map(order => (
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={() => handleOnPress(order)}
              >
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            ))
        )}
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingRight: "5%",
    paddingLeft: '5%',
  },

  loadingtext:{
    textAlign: "center",
    fontSize: 25,
    color: '#DA5C5C',

    marginBottom: 100,
    marginTop: 100,

  }
});

export default Orders;


