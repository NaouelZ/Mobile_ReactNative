import React from 'react';
import { View, FlatList, Text } from 'react-native';
import FilmItem from './FilmItem'
import { connect } from 'react-redux';

class Favoris extends React.Component {

    addingMovie = (id, img, title, resume, note) => {
        this.props.navigation.navigate('Ajouter', {idFilm: id, imgFilm: img, titleFilm: title, resumeFilm: resume, noteFilm: note})
    }

    render () {
        return(
                <View style={{ marginTop: 30, flex: 1 }}> 
                    <Text>Mes Favoris</Text>
                    <FlatList
                        data={this.props.favoritesFilm}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReachedThreshold={0.25}
                        renderItem={({ item }) => <FilmItem film={item} addingMovie={this.addingMovie} />}
                    /> 
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }
  
export default connect(mapStateToProps)(Favoris);
