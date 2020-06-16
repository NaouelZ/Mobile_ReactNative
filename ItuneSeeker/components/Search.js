import React from 'react';
import { View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
import SongItem from './SongItem'
import { getMusicWithItunes } from '../API/ItunesApi'

class Search extends React.Component {
  
    constructor(props){
        super(props)
        this.state = { 
            songs : [],
            isLoading: false
        }
        this.searchedText = ""
    }

    fetchMovie(){
        this.setState({isLoading: true })
        if(this.searchedText.length > 3) {
            getMusicWithItunes(this.searchedText).then(data => this.setState({songs: data.results}));
        }
        this.setState({isLoading: false })
    }

    changeSearch(text){
        this.searchedText = text;
    }

    seeDetails = (id, img, name, artist, url) => {
         this.props.navigation.navigate('Ajouter', {idSong: id, imgSong: img, nameSong: name, artistSong: artist, urlSong: url})
    }

    render(){

        return(
            <View style={{ marginTop: 30, flex: 1 }}> 
                <TextInput placeholder="Artiste ou musique à rechercher..." onChangeText={(text)=>this.changeSearch(text)} onSubmitEditing={() => this.fetchMovie()} />
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => this.fetchMovie()} />
                {!this.state.isLoading ? (
                <FlatList
                    data={this.state.songs}
                    keyExtractor={(item) => item.trackId}
                    onEndReachedThreshold={0.25}
                    renderItem={({ item }) => <SongItem song={item}  seeDetails={this.seeDetails} />}
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