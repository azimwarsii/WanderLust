import { View, Text ,ScrollView, StyleSheet ,TextInput, Image ,ImageBackground } from 'react-native';
import React from 'react';
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Page = () => {
  return (
    <SafeAreaView style={{justifyContent:'center' ,alignItems:'center'}}>  
    <View style={styles.searchBtn}>
                <Ionicons name="search" size={24} />
                
                  <TextInput style={{ fontFamily: 'mon-sb', width:'100%' }} placeholder="Search"/>      
         </View> 
    <ScrollView style={{paddingBottom:455}}>
        
         <View>
          <TouchableOpacity style={{padding:1, paddingTop:2}}>
          
          <ImageBackground style={{ width: 400,   height: 200 }}  source={require('assets/images/morocco.jpg')}>
          <Text style={styles.logo}> Discover Morocco</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View>
          <TouchableOpacity style={{padding:1}}>
          
          <ImageBackground style={{ width: 400,   height: 140 }}  source={require('assets/images/countries.jpg')}>
          <Text style={styles.logo1}> Discover Countries</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View>
          <TouchableOpacity style={{padding:1}}>
          
          <ImageBackground style={{ width: 400,   height: 120 }}  source={require('assets/images/city.jpg')}>
          <Text style={styles.logo1}> Discover Cities</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View>
          <TouchableOpacity style={{padding:1}}>
          
          <ImageBackground style={{ width: 400,   height: 120 }}  source={require('assets/images/food.jpeg')}>
          <Text style={styles.logo1}> Discover Food</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View>
          <TouchableOpacity style={{padding:1}}>
          
          <ImageBackground style={{ width: 400,   height: 120 }}  source={require('assets/images/ocean.jpg')}>
          <Text style={styles.logo1}> Discover Ocean</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>

         </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo:{
    fontFamily: 'cb',
    fontSize:23,
    padding:10,
    color:'white',
    shadowColor:"#000",
    shadowOpacity:1,
    shadowRadius:100,
  },
  logo1:{
    fontFamily: 'mon-b',
    fontSize:23,
    padding:10,
    color:'white',
    shadowColor:"#000",
    shadowOpacity:1,
    shadowRadius:100,
  },
  footer:{
    position: 'absolute',
    height: 135,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
   // borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
  },
  searchBtn: {
    
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    
    alignItems: 'center',
    width: '95%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  
  marker: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
  },
  locateBtn: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});
export default Page;
