import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,Image, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function App() { 
  const [book, setBook] = useState([
    {name : 'Ca nấu lẩu, nấu mì mini', shop:'Shop Devang', img : require('./assets/ca_nau_lau.png'), key:'1'},
    {name : '1kg khô gà bơ tỏi', shop:'LTD Shop', img : require('./assets/ga_bo_toi.png'), key:'2'},
    {name : 'Xe cần cẩu đa năng', shop:'Thế giới đồ chơi', img : require('./assets/xa_can_cau.png'), key:'3'},
    {name : 'Đồ chơi dạng mô hình', shop:'Thế giới đồ chơi', img : require('./assets/do_choi_dang_mo_hinh.png'), key:'4'},
    {name : 'Lãnh đạo giản đơn', shop:'Minh Long Book', img : require('./assets/lanh_dao_gian_don.png'), key:'5'},
    {name : 'Hiểu lòng con trẻ', shop:'Minh Long Book', img : require('./assets/hieu_long_con_tre.png'), key:'6'},
    {name : 'Donal Trump Thiên tài lãnh đạo', shop:'Minh Long Book', img : require('./assets/hieu_long_con_tre.png'), key:'7'},
  ])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.back}>
          <Image style={styles.btnBack} source={require('./assets/Vector.png')}></Image>
        </View>

        <View style={styles.text_Chat}>
          <Text style={styles.Chat}>Chat</Text>
        </View>

        <View style={styles.Cart}>
          <Image style={styles.btnCart} source={require('./assets/Vector(1).png')}></Image>
        </View>
        
      </View>

      <View style={styles.text_header}>
        <Text style={styles.remind}>Bạn có thắc mắc gì, đừng ngại chat với Shop</Text>  
      </View>
      
      <View style={styles.container_small}>

        <ScrollView style={styles.scroll}>
          { book.map((item => {
            return (
              <View style={styles.content} key={item.key}>
                <View style={styles.image}>
                  <Image style={styles.imgBook} source={item.img}></Image>
                </View>
               
                <View style={styles.text_content}>
                  <Text style= {styles.text_Name}>{item.name}</Text>
                  <Text style={styles.text_Shop}>{item.shop}</Text>
                </View>

                <View style={styles.buttonChat}>
                  <TouchableOpacity  activeOpacity={0.8} style={styles.btnChat}>
                    <Text style={styles.textChat}>Chat</Text>
                  </TouchableOpacity>
                </View>
                
             </View>
            )
          }))}
        </ScrollView>

      </View>

      <View style={styles.footer}>
        <View style={styles.menu}>
            <Image style={styles.btnMenu} source={require('./assets/Group10.png')}></Image>
          </View>

          <View style={styles.home}>
          <Image style={styles.btnHome} source={require('./assets/Home.png')}></Image>
          </View>

          <View style={styles.vector}>
            <Image style={styles.btnVector} source={require('./assets/Vector1(Stroke).png')}></Image>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_small:{
    flex: 0.7,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_header:{
    flex:0.1,
    width:'100%',
    backgroundColor:'#ccc',
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 1,
    borderColor:'#000'
   
  },
  remind:{
    textAlign: 'center',
    fontWeight:'bold',
  },
  scroll:{
    backgroundColor:'#ccc',
    width:'100%',
  },
  content:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#000'
    // justifyContent:'center'
  },
  image:{
    width:'20%',
    justifyContent:'center',
    alignItems:'center'
  },
  text_content:{
    width:'60%',
    justifyContent:'center',
    //alignItems:'center'
  },
  text_Name:{
    marginBottom:10
  },
  buttonChat:{
    width:'20%',
    justifyContent:'center',
    alignItems:'center'
  },
  btnChat:{
    width:88,
    height:38,
    backgroundColor:'#F31111',
    justifyContent:'center',
    alignItems:'center',
  },
  textChat:{
    color: '#fff',
    fontWeight:'bold'
  },

  header:{
    flex:0.1,
    backgroundColor:'rgba(27, 169, 255, 1)',
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },

  back:{
    width:'33.33333%',
    alignItems:'flex-start'
  },
  btnBack:{
    marginLeft:20
  },
  text_Chat:{
    width:'33.33333%',
    alignItems:'center'
  },
  Chat:{
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },  
  Cart:{
    width:'33.33333%',
    alignItems:'flex-end'
  },  
  btnCart:{
    marginRight:20
  },

  footer:{
    flex:0.1,
    backgroundColor:'#1BA9FF',
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
  },

  menu:{
    width:'33.33333%',
    alignItems:'flex-start'
  },
  btnMenu:{
    marginLeft:20
  },
  home:{
    width:'33.33333%',
    alignItems:'center'
  },
  btnHome:{
    fontSize:20,
    fontWeight:'bold',
    color:'#ccc'
  },  
  vector:{
    width:'33.33333%',
    alignItems:'flex-end'
  },  
  btnVector:{
    marginRight:20
  },


});
