import React, { Component } from 'react';
import { IMAGES } from '../shared/images';
// import PropTypes from 'prop-types';


import Gallery from './GalleryComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: IMAGES,
        };
    }

    render() {
        return (
            <div>
                <h3 className="text-center">Gallery</h3>
                <Gallery images={ this.state.images }/>
            </div>
        );
    }
}

// Main.propTypes = {};

export default Main;
