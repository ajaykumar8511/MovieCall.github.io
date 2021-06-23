import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from "react-native";


class ShowMovie extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        let Image_Http_URL = { uri: this.props.movieDetail.Poster };

        return (
            <View style={styles.mainContainer}>
                <View style={styles.posterContainer}>
                    <Image source={Image_Http_URL} style={styles.poster} />
                </View>

                <Text style={styles.movieTitle}>{this.props.movieDetail.Title}</Text>
                <Text style={styles.textGenre}>{this.props.movieDetail.Genre}</Text>
                <Text style={styles.textLanguage}>{this.props.movieDetail.Language}</Text>
                <View style={styles.row0}>
                    <Text style={styles.textRuntime}>{this.props.movieDetail.Runtime}</Text>
                    <Text style={styles.textYear}>{this.props.movieDetail.Year}</Text>
                </View>

                <View style={styles.row1}>
                    <Text style={styles.textRating}><Image source={require('../images/imdb.png')} style={{ width: 40, height: 20 }} />  {this.props.movieDetail.imdbRating}/10 </Text>
                    <Text style={styles.textRelease}>{this.props.movieDetail.Released}</Text>
                </View>


                <View style={styles.Row1}>
                    <Text style={styles.title}>Plot: </Text>
                    <Text style={styles.textPlot}>{this.props.movieDetail.Plot}</Text>
                </View>

                <View style={styles.Row1}>
                    <Text style={styles.title}>Actors:</Text>
                    <Text style={styles.textActors}>{this.props.movieDetail.Actors}</Text>
                </View>

                <View style={styles.Row1}>
                    <Text style={styles.title, styles.title}>Writer:</Text>
                    <Text style={styles.textWriter}>{this.props.movieDetail.Writer}</Text>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.title}>Country:</Text>
                    <Text style={styles.textCountry}> {this.props.movieDetail.Country}</Text>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.title}>Type:</Text>
                    <Text style={styles.textType}> {this.props.movieDetail.Type}</Text>
                </View>

                <View style={styles.Row}>
                    <Text style={styles.title}>Seasons:</Text>
                    <Text style={styles.textSeasons}> {this.props.movieDetail.totalSeasons}</Text>
                </View>







                {/* <Text style={styles.textSeasons}>totalSeasons: {this.props.movieDetail.totalSeasons} <Image source={require('../images/Award.png')} style={{width: 100, height: 100, resizeMode: 'contain',}} /></Text> */}


            </View>

        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 8,
        padding: 20,
        // backgroundColor: '#121212',
    },
    posterContainer: {
        marginBottom: 40,
    },
    poster: {
        height: 300,
        borderRadius: 3,
        resizeMode: 'contain',
        margin: 10,
        marginBottom: 10,
    },
    movieTitle: {
        fontSize: 50,
        color: '#121212',
        fontFamily: "Exo2-Bold",
    },
    textGenre: {
        fontSize: 19,
        color: '#181818',
        fontFamily: "Exo2-SemiBold",
    },
    textLanguage: {
        fontSize: 17,
        color: '#282828',
        fontFamily: "Exo2-Medium",
    },
    textRuntime: {

        fontSize: 17,
        color: '#404040',
        fontFamily: "Exo2-Medium",
    },
    textYear: {
        fontSize: 15,
        color: '#404040',
        fontFamily: "Exo2-Medium",
    },
    row0: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
    },

    textRelease: {
        fontSize: 17,
        color: '#404040',
        fontFamily: "Exo2-Medium",
    },
    textRating: {
        fontSize: 17,
        color: '#404040',
        fontFamily: "Exo2-Medium",
    },
    row1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    Row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    Row1: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        marginTop: 10,
    },

    
    title: {
        fontSize: 19,
        color: '#282828',
        fontFamily: "Exo2-Bold",
    },

    textWriter: {
        marginTop: 2,
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },

    textActors: {
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },

    textPlot: {
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },




    textCountry: {
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },


    textType: {
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },


    textSeasons: {
        fontSize: 18,
        color: '#3A3B3C',
        fontFamily: "Exo2-ExtraLight"
    },
    textSimple: {
        fontSize: 20,
        color: 'black',
        fontFamily: "Exo2-Bold",
        fontFamily: "Exo2-ExtraBold",
        fontFamily: "Exo2-ExtraLight",
        fontFamily: "Exo2-Italic-VariableFont_wght",
        fontFamily: "Exo2-Medium",
        fontFamily: "Exo2-SemiBold",
        fontFamily: "Exo2-Thin",
        fontFamily: "Exo2-VariableFont_wght",
    },
});

export default ShowMovie;