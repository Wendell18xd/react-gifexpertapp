import React from 'react'
import PropTypes from 'prop-types'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ categories }) => {

    const { data, loading } = useFetchGifs(categories);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{categories}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    data.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}

GifGrid.propTypes = {
    categories: PropTypes.string.isRequired
}

export default GifGrid
