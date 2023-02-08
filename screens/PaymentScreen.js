import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log('Pay with PayPal');
        }}>
        <Text>Pay with PayPal</Text>
      </TouchableOpacity>
      {/* {paymentResult && <Text>{paymentResult}</Text>} */}
    </View>
  );
};

export default PaymentScreen;
