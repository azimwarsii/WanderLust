import { View, Text, SafeAreaView,Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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
  },
  {
    name: 'Events',
    icon: 'house-siding',
  },
  {
    name: 'Random',
    icon: 'local-fire-department',
  },
  {
    name: 'Editors Choice',
    icon: 'videogame-asset',
  },
  {
    name: 'Games',
    icon: 'apartment',
  },
  {
    name: 'Activities',
    icon: 'beach-access',
  },
  {
    name: 'Culture',
    icon: 'nature-people',
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

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          {/* <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity>
              <View style={styles.searchBtn}>
                <Ionicons name="search" size={24} />
                <View>
                  <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                  <Text style={{ color: Colors.grey, fontFamily: 'mon' }}>Anywhere · Any week</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link> */}
          
          <Text style={styles.logo}>Wanderlust</Text>
          {(user)&& 
          <Link href={`/add/page`} asChild>
          <TouchableOpacity style={styles.filterBtn}>
          <Ionicons size={30} name="add-outline"/> 
         </TouchableOpacity>
          </Link>
          }
        </View>
        

        <ScrollView
          horizontal
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
              onPress={() => selectCategory(index)}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#000',
    height: 35,
    width: 90,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1:{
    backgroundColor: 'transparent',
    height: 35,
    width: 90,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#fff',
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
