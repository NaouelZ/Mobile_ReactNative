import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';

function SongItem(props){
    const {song, seeDetails } = props
    return (
        <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{ uri: song.artworkUrl60 }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{song.trackName}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>{song.artistName}</Text>
          </View>
              <Button
                  onPress={() => seeDetails(song.trackId, song.artworkUrl60, song.trackName, song.artistName, song.trackViewUrl)}
                  title={"Voir"}
                  color="#ff5f77"
              />
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

export default SongItem