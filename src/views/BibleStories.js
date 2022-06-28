import axios from 'axios';
import { useState } from 'react';

let BibleStories = () => {
    const [artists, setArtist] = useState([])
    const options = {
        method: 'GET',
        url: 'https://iq-bible.p.rapidapi.com/GetStories',
        params: { language: 'english' },
        headers: {
            'X-RapidAPI-Key': 'a996215639mshf92d79b1a920899p18da62jsncc33ac057114',
            'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        let loadcopy = [...artists]
        loadcopy.push([response.data])
        setArtist(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div className="bible-page container-fluid  ">
            <div className=''>
            {typeof artists === 'object' && artists ? artists.map((artist, index) => {
                return <div key={index} className="">
            
                    <div className="card text-center" style={{width: 18 + "rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{artist.id}. {artist.story}</h5>
                            <p className="card-text">Start: {artist.verses_1}.</p>
                            {artist.verses_2 ? 
                            <p className="card-text">End: {artist.verses_2}</p> : <></>}
                        </div>
                    </div>
                    </div>
            }) : <></>}</div>
        </div>


    )
}

export default BibleStories;