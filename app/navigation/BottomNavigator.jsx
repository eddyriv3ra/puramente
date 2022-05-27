import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Progress from '../screens/Progress';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "rgb(98, 198, 158)" },
				headerTitleStyle: { color: "white" },
			}}
		>
    	<Tab.Screen 
				options={{
					tabBarIcon: () => (
						<Ionicons name="home-sharp" size={24} color="black" />
					),
				}}
        name="Inicio" children={()=><View style={styles.container}><Text>Inicio</Text></View>}
      />
      <Tab.Screen
				options={{
					tabBarIcon: () => (
						<FontAwesome5 name="book-reader" size={24} color="black" />
					),
				}}
				name="Explorar" children={()=><View style={styles.container}><Text>Explorar</Text></View>} />
      <Tab.Screen
				options={{
					tabBarIcon: () => (
						<MaterialIcons name="groups" size={35} color="black" />
					),
				}}
				name="Grupos" children={()=><View style={styles.container}><Text>Grupos</Text></View>} />
      <Tab.Screen
				options={{
					tabBarIcon: () => (
						<Ionicons name="person" size={24} color="black" />
					),
				}}
				name="Progreso" component={Progress} />
      <Tab.Screen
				options={{
					tabBarIcon: () => (
						<Entypo name="dots-three-horizontal" size={24} color="black" />
					),
				}}
				name="Mas" children={()=><View style={styles.container}><Text>Más</Text></View>} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
})