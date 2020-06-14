import React from 'react';
import { View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
import FilmItem from './FilmItem'
import { getFilmsWithIMDB } from '../API/IMDBApi'

class Search extends React.Component {
  
    constructor(props){
        super(props)
        this.state = { 
            films : [],
            isLoading: false
        }
        this.searchedText = ""
    }

    fetchMovie(){
        this.setState({isLoading: true })
        if(this.searchedText.length > 3) {
            getFilmsWithIMDB(this.searchedText).then(data => this.setState({films : data.results, isLoading: false}));
        }
    }

    changeSearch(text){
        this.searchedText = text;
    }

    addingMovie = (id, img, title, resume, note) => {
        this.props.navigation.navigate('Ajouter', {idFilm: id, imgFilm: img, titleFilm: title, resumeFilm: resume, noteFilm: note})
    }

    render(){

        return(
            <View style={{ marginTop: 30, flex: 1 }}> 
                <TextInput placeholder="Nom du film à chercher..." onChangeText={(text)=>this.changeSearch(text)} onSubmitEditing={() => this.fetchMovie()} />
                <Button style={{ height: 50 }} title="Rechercher un film" onPress={() => this.fetchMovie()} />
                {!this.state.isLoading ? (
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.25}
                    renderItem={({ item }) => <FilmItem film={item} addingMovie={this.addingMovie} searchList />}
                /> ) :
                ( 
                <View style={{ position: 'absolute', top:100, alignItems: 'center', justifyContent: 'center'}} >
                    <ActivityIndicator size='large' />
                </View>
                )
                }
            </View>
        )
    }
}

export default Search;