import React from 'react'
import Button from 'react-bootstrap/Button';

export default function AddToFavouritePics({favPics, artwork}) {
    return (
        <Button onClick={(e) => {

            const isSaved = favPics.some((favPic) => favPic.title === artwork.title)
            console.log(isSaved);

            if (!isSaved) {
                favPics.push(artwork);
                localStorage.setItem("artworks: ", JSON.stringify(favPics));
            } else { return false }
            console.log(favPics);

        }} variant="primary">I like it!</Button>
    )
}
