import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import AddToFavouritePics from '../components/AddToFavouritePics';

function SingleArtwork({ favPics }) {
    const { id } = useParams();
    const [artwork, setArtwork] = useState([]);

    const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";

    useEffect(() => {
        fetch(
            `https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`
        )
        .then((res) => res.json())
        .then((data) => setArtwork(data))
    });

    return (
        <Card key={artwork.id} style={{ width: '50vh' }} className='p-0'>
            <Card.Img
                variant="top"
                src={artwork.primaryimageurl} />
            <Card.Body>
                <Card.Title>{artwork.title}</Card.Title>
                <Card.Text>
                    {artwork.medium}
                </Card.Text>
                <AddToFavouritePics favPics={favPics} artwork={artwork} />
            </Card.Body>
        </Card>
    );
}

export default SingleArtwork