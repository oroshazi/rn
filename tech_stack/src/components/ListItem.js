import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    LayoutAnimation,
    NativeModules
} from 'react-native';
import { connect } from "react-redux";
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if (this.props.expanded) {
            return (
                <Text style={{ padding: 5 }}>
                    {library.description}
                </Text>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}



const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);