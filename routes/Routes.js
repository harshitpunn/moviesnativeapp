import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContentDetails from '../components/Screens/ContentDetails';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Movies App"
          component={Tabs}
          options={{
            title: 'Movies App',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTitleStyle: {
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="View Details"
          component={ContentDetails}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
