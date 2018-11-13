import React, { Component } from 'react';
import { Row, Column, Thumbnail, ButtonGroup, Button, Colors, Sizes } from 'react-foundation';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImg: null,
        } 
        this.imageClick = this.imageClick.bind(this);
    }   

    imageClick(img) {
        // console.log('Hi', img);
        this.setState({
            currentImg: img,
        });
    }

    nextClick() {
        let _img;
        let first_img = this.props.images[0];
        if (this.state.currentImg != null) {
            _img = this.props.images[this.state.currentImg.id + 1];
            if (_img === undefined) { 
                _img = first_img;
            }
        } else {
            _img = first_img;
        }
        this.setState({
            currentImg: _img
        });
    }

    prevClick() {
        let _img;
        let last_img = this.props.images[this.props.images.length - 1]
        if (this.state.currentImg != null) {
            _img = this.props.images[this.state.currentImg.id - 1];
            if (_img === undefined) { 
                _img = last_img;
            }
        } else {
            _img = last_img;
        }
        this.setState({
            currentImg: _img
        });
    }

    renderImage(img){
        if (img != null){
            return (
                <div>
                <Thumbnail src={img.image} alt={img.name} />
                    <h4>{img.name}</h4>
                </div>
            );            
        } else {
            return <div></div>;
        }
    }

    render() {
        // console.log("PROPS ", this.props);
        const gallery = this.props.images.map((image) => {
            // console.log(image);
            return (
                <Column isColumn key={image.id} onClick={() => this.imageClick(image)}>
                    <Thumbnail width="100%" src={image.image} alt={image.name}/>
                </Column>
            )
        });

        return (
            <div className="grid-block-example">
                <Row>
                    <Column className="text-center">
                        <ButtonGroup style={{display: "inline-block"}}>
                            <Button size={Sizes.SMALL} color={Colors.SUCCESS} onClick={() => this.nextClick()}>Next</Button>
                            <Button size={Sizes.SMALL} color={Colors.SUCCESS} onClick={() => this.prevClick()}>Prev</Button>
                        </ButtonGroup>
                    </Column>
                </Row>

                <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
                    {gallery}
                </Row>

                <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
                    <Column isColumn >
                        {this.renderImage(this.state.currentImg)}
                    </Column>
                </Row>
            </div>
        );
    }
}

export default Gallery;