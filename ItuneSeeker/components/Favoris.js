import React from 'react';
import { View, FlatList, Text } from 'react-native';
import FavorisItem from './FavorisItem'
import { connect } from 'react-redux';

class Favoris extends React.Component {
    render () {
        return(
                <View style={{ marginTop: 30, flex: 1 }}> 
                    <Text>Mes musiques : </Text>
                    <FlatList
                        data={this.props.favoritesSong}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReachedThreshold={0.25}
                        renderItem={({ item }) => <FavorisItem song={item} />}
                    /> 
                </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      favoritesSong: state.favoritesSong
    }
  }
  
export default connect(mapStateToProps)(Favoris);