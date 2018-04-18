import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from 'axios';

import AlbumDetail from './albumdetail';


class AlbumList extends Component {
    constructor() {
        super();
        state = {
            albums: []
        }
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log('this pont state: ', this.state);

        return (
            <ScrollView>
                {(this.state != null) ? this.renderAlbums() : <Text style={styles.fetchStyle}> fetching...</Text>}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    fetchStyle: {
        color: 'red',
    },
});

export default AlbumList;