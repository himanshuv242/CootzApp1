import React from 'react';
import ChooseUpiFlatList from '../Funds/ChooseUpiFlatlist';
import AddNewUPI  from '../Funds/AddNewUPI';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const UpiScreen = () => {
  return (
      <Stack.Navigator initialRouteName='ChooseUPI'
        screenOptions={{
          headerShown: false
        }}
      >
       <Stack.Screen name="ChooseUPI" component={ChooseUpiFlatList} />
        <Stack.Screen name="AddUPI" component={AddNewUPI} />
      </Stack.Navigator>

  )
};

export default UpiScreen;
