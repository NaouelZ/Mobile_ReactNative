import React from 'react';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import { connect } from 'react-redux';

class AddFilm extends React.Component {

  constructor(props){
    super(props)
      this.state = { 
        idFilm: props.route.params?.idFilm,
        imgFilm: props.route.params?.imgFilm,
        titleFilm: props.route.params?.titleFilm,
        resumeFilm: props.route.params?.resumeFilm,
        noteFilm: props.route.params?.noteFilm.toString()
    }
  }

  toggleFavorite(){
    const film = {id: this.state.idFilm, poster_path: this.state.imgFilm, title: this.state.titleFilm, overview: this.state.resumeFilm, vote_average: parseFloat(this.state.noteFilm)}
    const action = {type: "TOGGLE_FAVORITE", value: film}
    this.props.dispatch(action)
    this.props.navigation.navigate('Favoris')
  }

  displayAction(){
    if(this.props.favoritesFilm.findIndex(item => item.id === this.state.idFilm) !== -1){
      return "Supprimer le film"
    } else {
      return "Ajouter au favoris"
    }
  }

  render () {
    const {titleFilm, resumeFilm, noteFilm} = this.state
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <Text style={{ marginTop: 20, fontSize: 20, color: '#ff5f77' }}>Titre : {titleFilm}</Text>     
        <Text>Résumé et commentaire</Text>
        <TextInput
          style={styles.resumeInput}
          multiline
          onChangeText={text => this.setState({resumeFilm: text})}
          value={resumeFilm}
          />  
        <Text>Note</Text>    
        <TextInput
            style={styles.textInput}
            type="number"
            onChangeText={text => this.setState({noteFilm: text})}
            value={noteFilm}
            keyboardType={'numeric'}
            numeric
        />

        <Button 
          title={this.displayAction()}
          onPress={() => this.toggleFavorite()} />
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
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(AddFilm);