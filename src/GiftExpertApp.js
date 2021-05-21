import React, { useState } from 'react'
import AddCaptegori from './components/AddCaptegori'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCaptegori setCategories={setCategories} />
            <hr />

            {
                categories.map(c =>
                    <GifGrid
                        key={c}
                        categories={c}
                    />
                )
            }

        </>
    )
}

export default GiftExpertApp
