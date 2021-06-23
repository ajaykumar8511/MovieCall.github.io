
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


class SearchForm extends Component {
    state = { flag: true };

    changeColor = () => {
        this.setState(previousState => {
            return { flag: !previousState.flag };
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    submit = () => {

        this.props.getMovieAPI();

    }

    render() {
        return (
            <View style={styles.mainContainer}>

                <TextInput
                    placeholder="Movie Name"
                    style={styles.input}
                    // value={this.props.searchValue}
                    onChangeText={(text) => this.props.updateSearchValue(text, 'searchValue')}
                />

                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={styles.btn}
                >
                    {/* <Text>Search</Text> */}
                    <Text style={{ color: this.state.flag ? "#202124" : "#202124", fontFamily: 'Exo2-ExtraBold' }}>Show</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    input: {
        flex: 4,
        paddingLeft: 10,
        fontFamily: 'Exo2-Medium',

        // paddingStart:8
    },
    btn: {
        flex: 1,
        color: '#FFFFFF',
        fontFamily: "Exo2-ExtraBold",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },


});

export default SearchForm;