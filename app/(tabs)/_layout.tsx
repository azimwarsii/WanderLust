import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          bottom :8 , 
          marginLeft : 10,
          marginRight:10,
          elevation:0,
          backgroundColor:'#000',
          borderRadius:15,
          height:60,
          
        },
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ size, color }) => <Ionicons name="earth-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="compass-outline" size={size+2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trail"
        options={{
          tabBarLabel: 'Trail',
          headerShown: false,
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="transit-connection-variant" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="following"
        options={{
          tabBarLabel: 'People',

          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size+2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
