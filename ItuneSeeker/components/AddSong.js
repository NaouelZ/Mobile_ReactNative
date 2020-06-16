import React from 'react';
import { StyleSheet, Button, TextInput, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

class AddSong extends React.Component {

  constructor(props){
    super(props)
      this.state = { 
        idSong: props.route.params?.idSong,
        imgSong: props.route.params?.imgSong,
        nameSong: props.route.params?.nameSong,
        artistSong: props.route.params?.artistSong,
        urlSong: props.route.params?.urlSong,
        noteSong: '0',
        adding: false,
    }
  }

  toggleFavorite(){
    const song = {id: this.state.idSong, name: this.state.nameSong, artist: this.state.artistSong, img: this.state.imgSong, note: this.state.noteSong}
    const action = {type: "TOGGLE_FAVORITE", value: song}
    this.props.dispatch(action)
    this.props.navigation.navigate('Favoris')
  }

  displayAction(){
    if(this.props.favoritesSong.findIndex(item => item.id === this.state.idFilm) !== -1){
      return "Supprimer le sons"
    } else {
      return "Enregistrer"
    }
  }

  render () {
    const {adding, imgSong, nameSong, artistSong, noteSong, urlSong} = this.state
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <Image
          style={styles.image}
          source={{ uri: imgSong }}
        /> 
        <Text style={{ marginTop: 20, fontSize: 20, color: '#ff5f77' }}>{nameSong}, {artistSong}</Text>     
        <Text>Lien pour écouter la musique : {urlSong} </Text> 
        {!adding && ( 
        <Button 
          title="Enregistrer la musique"
          onPress={() => this.setState({adding: true})} />
        )}
        {adding && 
        (
          <>
            <Text>Veuillez noter le song : </Text>
            <TextInput
                style={styles.textInput}
                type="number"
                placeholder="Note..."
                onChangeText={text => this.setState({noteSong: text})}
                value={noteSong}
                keyboardType={'numeric'}
                numeric
            />
            <Button 
              title={this.displayAction()}
              onPress={() => this.toggleFavorite()} />
          </>
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  resumeInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 150,
    fontSize: 14,
    paddingTop: 5,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 10,
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesSong: state.favoritesSong
  }
}

export default connect(mapStateToProps)(AddSong);