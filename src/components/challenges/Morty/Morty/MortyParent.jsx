import React, { useEffect, useState } from 'react';
import { CardColumns } from 'reactstrap';
import MortyChild from './MortyChild';

const baseURL = 'https://rickandmortyapi.com/api/';

const MortyParent = () => {
    const [ characters, setCharacters ] = useState([]);

    const fetchMorty = () => {
        let url = `${baseURL}character`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(json => {
                setCharacters(json.results);
                console.log(json.results)})
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchMorty();
    }, []);

    function displayCards(){
        return characters.length > 0 ? characters.map((character) => <MortyChild mortyCharacter={character} />) : null
    }

    return(
        <div>
            <button onClick={fetchMorty}>Fetch</button>
            <CardColumns>
                {displayCards()}
            </CardColumns>
        </div>
    );
};

export default MortyParent;