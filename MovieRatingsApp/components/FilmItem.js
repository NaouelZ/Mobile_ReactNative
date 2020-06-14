import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';

function FilmItem(props){
    const {film, addingMovie, deleteMovie} = props
    const img = `https://image.tmdb.org/t/p/original${film.poster_path}`
    return (
        <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{ uri: img }}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
          </View>
              <View style={styles.date_container}>
              <Button
                  onPress={() => addingMovie(film.id, film.poster_path, film.title, film.overview, film.vote_average)}
                  title={props.searchList? "Ajouter à mes favoris" : "Editer"}
                  color={props.searchList? "#ff5f77" : "red"}
              />
              </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 2
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FilmItem