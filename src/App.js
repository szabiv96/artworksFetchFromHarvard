import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import FavouritePics from './pages/FavouritePics';
import ArtWorks from './pages/ArtWorks';
import React, { useState, useEffect } from 'react';
import SingleArtwork from './pages/SingleArtwork';


function App() {
    const perPage = 100;
    const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";
    const [artpieces, setArtpieces] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&fields=primaryimageurl,title,medium&size=${perPage}${search && '&keyword='+search}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTimeout(() => setArtpieces(data.records)));
    }, [search]);

    //props what passed away to components
    console.log(artpieces);
    let favPics = [];

  return (
    <>
    {/* navigation are here */}
    <Navigation artpieces={artpieces} setSearch={setSearch} />
    {/* navigation are here and stays here while different pages are routed */}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favouritePics' element={<FavouritePics  favPics={favPics}/>} />
      <Route path='/artworks' element={<ArtWorks artpieces={artpieces} search={search} favPics={favPics} />}/>
      <Route path="/:id" element={<SingleArtwork />} />
    </Routes>
    </>
  );
}

export default App;
