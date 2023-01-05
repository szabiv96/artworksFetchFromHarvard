import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import AddToFavouritePics from '../components/AddToFavouritePics';
import { useNavigate } from 'react-router-dom';

export default function ArtWorks({ artpieces, favPics }) {
    
    const navigate = useNavigate();
    const handleRedirect = (event) => navigate("/" + event.target.getAttribute('data-id'));

    return (
        <Row xs={1} md={2} className="g-4 d-flex justify-content-around">
            {artpieces
                .filter(artwork => artwork.primaryimageurl)
                .map(artwork =>
                <Card key={artwork.id} style={{ width: '50vh' }} className='p-0'>
                    <Card.Img
                        variant="top"
                        src={artwork.primaryimageurl}
                        onClick={handleRedirect}
                        data-id={artwork.id} />
                    <Card.Body>
                        <Card.Title>{artwork.title}</Card.Title>
                        <Card.Text>
                            {artwork.medium}
                        </Card.Text>
                        <AddToFavouritePics favPics={favPics} artwork={artwork} />
                    </Card.Body>
                </Card>
            )}
        </Row>
    );
}
