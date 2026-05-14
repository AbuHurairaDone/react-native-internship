import { Text, View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";


export default function Index() {
  const [like, setLike] = useState(5);
  const [comment, setComment] = useState(5);
  const [share, setShare] = useState(5);
  const post = {
    id: 101,
    title: "Mastering React Native Hooks",
    body: "The useEffect hook is powerful but tricky. Always remember to clean up your intervals and listeners!",
    postImage: "https://picsum.photos/id/1/600/400",
    createdAt: "2 hours ago",
    user: {
      name: "Abu Huraira",
      avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Abu"
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title} >Posts</Text>
            <Ionicons style={{paddingTop:5}} name="add-circle" size={24} color="black" />
        </View>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
            <View style={styles.card}>
              <View style={styles.userInfo}>
                  <Image  source={{uri: post.user.avatar}} style={styles.userAvatar}  />
                  <View>
                    <Text style={styles.userName}>{post.user.name}</Text>
                    <Text style={styles.time}>{post.createdAt}</Text>
                  </View>
              </View>
              <View style={styles.postInfo}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postBody}>{post.body}</Text>
                  <Image style={styles.postImage} source={{uri:post.postImage}} />
              </View>
              <View style={styles.postReviewContainer}>
                <Pressable style={styles.reviewContainer} onPress={()=> setLike(like+1)}>
                  <Ionicons style={{paddingLeft:5}} name="heart-sharp" size={14} color="red" />
                  <Text style={styles.reviewText}>{like} Likes</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>{setComment(comment+1)}}>
                  <Ionicons style={{paddingLeft:5}} name="chatbubble-ellipses-outline" size={14} color="black" />
                  <Text style={styles.reviewText}>{comment} Comment</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>setShare(share+1)}>
                  <Ionicons style={{paddingLeft:5}} name="share-social" size={14} color="black" />
                  <Text style={styles.reviewText}>{share} Share </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.userInfo}>
                  <Image  source={{uri: post.user.avatar}} style={styles.userAvatar}  />
                  <View>
                    <Text style={styles.userName}>{post.user.name}</Text>
                    <Text style={styles.time}>{post.createdAt}</Text>
                  </View>
              </View>
              <View style={styles.postInfo}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postBody}>{post.body}</Text>
                  <Image style={styles.postImage} source={{uri:post.postImage}} />
              </View>
              <View style={styles.postReviewContainer}>
                <Pressable style={styles.reviewContainer} onPress={()=> setLike(like+1)}>
                  <Ionicons style={{paddingLeft:5}} name="heart-sharp" size={14} color="red" />
                  <Text style={styles.reviewText}>{like} Likes</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>{setComment(comment+1)}}>
                  <Ionicons style={{paddingLeft:5}} name="chatbubble-ellipses-outline" size={14} color="black" />
                  <Text style={styles.reviewText}>{comment} Comment</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>setShare(share+1)}>
                  <Ionicons style={{paddingLeft:5}} name="share-social" size={14} color="black" />
                  <Text style={styles.reviewText}>{share} Share </Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.userInfo}>
                  <Image  source={{uri: post.user.avatar}} style={styles.userAvatar}  />
                  <View>
                    <Text style={styles.userName}>{post.user.name}</Text>
                    <Text style={styles.time}>{post.createdAt}</Text>
                  </View>
              </View>
              <View style={styles.postInfo}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postBody}>{post.body}</Text>
                  <Image style={styles.postImage} source={{uri:post.postImage}} />
              </View>
              <View style={styles.postReviewContainer}>
                <Pressable style={styles.reviewContainer} onPress={()=> setLike(like+1)}>
                  <Ionicons style={{paddingLeft:5}} name="heart-sharp" size={14} color="red" />
                  <Text style={styles.reviewText}>{like} Likes</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>{setComment(comment+1)}}>
                  <Ionicons style={{paddingLeft:5}} name="chatbubble-ellipses-outline" size={14} color="black" />
                  <Text style={styles.reviewText}>{comment} Comment</Text>
                </Pressable>
                <Pressable style={styles.reviewContainer} onPress={()=>setShare(share+1)}>
                  <Ionicons style={{paddingLeft:5}} name="share-social" size={14} color="black" />
                  <Text style={styles.reviewText}>{share} Share </Text>
                </Pressable>
              </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    marginLeft:20,
    marginRight:20,
    borderBottomWidth:1,
    borderColor:'gray',

    // backgroundColor:'skyblue'
  },
  title:{
    fontSize:20,
    paddingLeft:5,
    fontWeight:'600'
  },
  cardsContainer:{
    justifyContent:'center',
    padding:20
  },
  card:{
    padding:5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom:10
  },
  userInfo:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    paddingTop:10
  },
  userAvatar:{
    width:40,
    height:40,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:50
  },
  userName:{
    paddingLeft:10,
    fontSize:14,
    fontWeight:'600'
  },
  time:{
    paddingLeft:10,
    fontSize: 12,
    color:'gray',
    fontWeight:'400'
  },
  postInfo:{
    padding:10,
  },
  postTitle:{
    fontSize:14,
    fontWeight:'700'
  },
  postBody:{
    fontSize:12,
    fontWeight:'400',
    textAlign:'justify'
  },
  postImage:{
    width:'100%',
    height: 200,
    borderRadius:10,
    marginTop:10
  },
  postReviewContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
   
  },
  reviewContainer:{
    flexDirection:'row',
    alignItems:'center',
    padding:5
  },
  reviewText:{
    fontSize:10,
    paddingLeft:3,
    fontWeight:'600'
  }


})