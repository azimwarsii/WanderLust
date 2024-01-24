import { View, Text,ImageBackground, SafeAreaView,Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { useRef, useState } from 'react';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';

const categories = [
  {
    name: 'Food',
    icon: 'home',
    pos:0,
  },
  {
    name: 'Events',
    icon: 'house-siding',
    pos:30,
  },
  {
    name: 'Random',
    icon: 'local-fire-department',
    pos:180,
  },
  {
    name: 'Editors Choice',
    icon: 'videogame-asset',
    pos:320,
  },
  {
    name: 'Games',
    icon: 'apartment',
    pos:480,
  },
  {
    name: 'Culture',
    icon: 'nature-people',
    pos:600,
  },
];

interface Props {
  onCategoryChanged: (category: string) => void;
}


const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const { user } = useUser();
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number, pos:number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
     
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: pos, y: 0, animated: true });
    });
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
  
        
        

        <ScrollView
          horizontal
          snapToAlignment={'center'}
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 10,
            paddingHorizontal: 16,
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity
              ref={(el) => (itemsRef.current[index] = el)}
              key={index}
              style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
              onPress={() => selectCategory(index,item.pos)}>
              {/* <MaterialIcons
                name={item.icon as any}
                size={24}
                color={activeIndex === index ? '#000' : Colors.grey}
              /> */}
              <View style={activeIndex === index ? styles.button: styles.button1} >
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>
                {item.name}
              </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>


      </View>
       <ScrollView style={{paddingBottom:455}}>
        
         <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/1.jpg')}>
            
          <Text style={styles.logo1}> Azim</Text>
          <Text style={styles.logo2}> Switzerland</Text>
          <Text style={styles.logo3}> 22 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/2.jpg')}>
          <Text style={styles.logo1}> Dinesh</Text>
          <Text style={styles.logo2}> Maldives</Text>
          <Text style={styles.logo3}> 7 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/3.jpg')}>
          <Text style={styles.logo1}> Melusi</Text>
          <Text style={styles.logo2}> Navagio</Text>
          <Text style={styles.logo3}> 11 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/9.jpg')}>
          <Text style={styles.logo1}> Mariam</Text>
          <Text style={styles.logo2}> London</Text>
          <Text style={styles.logo3}> 15 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/5.jpg')}>
          <Text style={styles.logo1}> Tom</Text>
          <Text style={styles.logo2}> Portugal</Text>
          <Text style={styles.logo3}> 12 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/6.jpg')}>
          <Text style={styles.logo1}> Vishwa</Text>
          <Text style={styles.logo2}> Tokyo</Text>
          <Text style={styles.logo3}> 24 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         <View style={{flexDirection: 'row',}}>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/7.jpg')}>
          <Text style={styles.logo1}> Shashank</Text>
          <Text style={styles.logo2}> Italy</Text>
          <Text style={styles.logo3}> 17 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
          
          <ImageBackground style={{ width: 200,   height: 200 }}  source={require('assets/images/8.jpg')}>
          <Text style={styles.logo1}> Rohit</Text>
          <Text style={styles.logo2}> Spain</Text>
          <Text style={styles.logo3}> 14 Locations</Text>
          </ImageBackground>
        
          </TouchableOpacity>
         </View>
         </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'transparent',
    height: 100,
    width: 130,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1:{
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:20,
  }
  ,
  container: {
    backgroundColor: '#fff',
    height: 130,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  logo:{
    fontFamily: 'cb',
    fontSize:23
  },
  logo1:{
    fontFamily: 'mon-b',
    fontSize:15,
    color:'#fff',
    shadowColor:'#000',
    shadowOpacity:1,
    shadowRadius:1000,
    textShadowColor:"#000",
    textShadowRadius:10,
    //textShadowOffset:1

  },
  logo2:{
    fontFamily: 'mon-sb',
    fontSize:15,
    color:'#fff',
    shadowColor:'#000',
    shadowOpacity:1,
    shadowRadius:1000,
    textShadowColor:"#000",
    textShadowRadius:10,
    //textShadowOffset:1

  },
  logo3:{
    fontFamily: 'mon',
    fontSize:15,
    color:'#fff',
    shadowColor:'#000',
    shadowOpacity:1,
    shadowRadius:1000,
    textShadowColor:"#000",
    textShadowRadius:10,
    //textShadowOffset:1

  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:20
    //justifyContent: 'space-between',
   // paddingHorizontal: 24,
    //paddingBottom: 16,
  },

  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    alignItems: 'center',
    width: 280,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  filterBtn: {
    position:'absolute',

    right:20,
    top:20,
    //borderWidth: 1,
   // borderColor: '#A2A0A2',
    //borderRadius: 24,
  },
  categoryText: {
    marginTop:40,
    fontSize: 14,
    fontFamily: 'cb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 32,
    fontFamily: 'cb',
    color: Colors.primary,
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    //borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default ExploreHeader;
