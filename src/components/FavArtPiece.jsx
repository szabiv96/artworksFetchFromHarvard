import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import RemoveFromFavourite from './RemoveFromFavourite';
import { useState } from 'react';

export default function FavArtpiece({ favPics }) {
    console.log(favPics);
    const [favS, setfavS] = useState(favPics);

    function deleteFav(id) {
        setfavS(favS.filter(favPic => favPic.id !== id))
    }

    return (
        <Row xs={1} md={2} className="g-4 d-flex justify-content-around">
            {favS.map(artwork =>
                <Card key={artwork.id} style={{ width: '50vh' }} className='p-0 align'>
                    <Card.Img
                        variant="top"
                        src={artwork.primaryimageurl} />
                    <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                        <Card.Text>
                            {artwork.medium}
                        </Card.Text>
                        <RemoveFromFavourite deleteR={() => deleteFav(artwork.id)}/>
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
}