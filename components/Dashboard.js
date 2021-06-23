import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import ShowMovie from "./ShowMovie";
import SearchForm from "./SearchForm";


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieDetail: {
                Title: "Loading...",
                Year: "Loading...",
                Released: "Loading...",
                Runtime: "Loading...",
                Genre: "Loading...",
                Writer: "Loading...",
                Actors: "Loading...",
                Plot: "Loading...",
                Language: "Loading...",
                Country: "Loading...",
                Poster: "Loading...",
                imdbRating: "Loading...",
                Type: "Loading...",
                totalSeasons: "Loading..."
            },
            searchValue: ''

        };
    }

    updateSearchValue = (text, field) => {

        if (field == 'searchValue') {
            this.setState({
                searchValue: text,
            })
        }

    }

    setMovieDetail = (movieDetail) => {
        this.setState({
            movieDetail: movieDetail,
        });

    }

    getMovieAPI = () => {
        fetch("https://www.omdbapi.com/?t=" + this.state.searchValue + "&apikey=96a8d32c")
            .then(data => data.json())
            .then(dataJson => {
                this.setMovieDetail(dataJson)

                console.log(dataJson);

            })
            .catch(error => {
                console.log("Error is " + error);
            });
    }

    render() {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.searchBoxContainer}>
                    <SearchForm {...this.state}
                        getMovieAPI={this.getMovieAPI}
                        updateSearchValue={this.updateSearchValue}
                    />
                </View>

                <ShowMovie {...this.state} />
            </View>


        );
    };
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'center',
    },
    searchBoxContainer: {
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

});

export default Dashboard;