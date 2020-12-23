import React, { Component } from 'react';

export default class weatherDetails extends Component {
    render() {
        const { locationName, icon, description } = this.props.weather;
        return (
            <>
                <div className="row">
                    <div className="mx-auto">The weather in {locationName}</div>
                </div>
                <div className="row">
                    <img id="weatherIcon" className="mx-auto" src={icon} />
                </div>
                <div className="row">
                    <div id="description" className="row mx-auto">{description}</div>
                </div>
            </>
        );
    }
}
