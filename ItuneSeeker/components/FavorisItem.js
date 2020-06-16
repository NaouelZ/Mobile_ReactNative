import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';

function FavorisItem(props){
    const { song } = props
    return (
        <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{ uri: song.img }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{song.name}</Text>
            <Text style={styles.vote_text}>{song.note}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>{song.artist}</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 160,
    flexDirection: 'row',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: 'gray'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 5,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2,
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FavorisItem