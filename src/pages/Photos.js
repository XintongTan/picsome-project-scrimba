import React, {useContext} from "react"

import Image from "../components/Image"
import { getClass } from "../utils"
import { Context } from "../Context"


function Photos() {
    const { photo } = useContext(Context)

    const allPhotos = photo.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)}/>
        ))
    

    return (
        <main className="photos">  
            {allPhotos}
        </main>
    )
}

export default Photos