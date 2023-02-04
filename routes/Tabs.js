import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../components/Screens/Movies';
import SearchResults from '../components/Screens/SearchResults';
import TvShows from '../components/Screens/TvShows';
const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search Results"
        component={SearchResults}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TV Shows"
        component={TvShows}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
});
