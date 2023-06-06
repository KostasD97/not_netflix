import React from 'react';
import MovieSeriesList from './MovieSeriesList';

const MovieSeriesListHeading = (props) => {
    return (
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieSeriesListHeading;