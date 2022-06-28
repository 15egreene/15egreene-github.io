import axios from 'axios'
import { useState } from 'react';



let SearchText = () => {
    let handlesubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.value);

// const options = {
//   method: 'GET',
//   url: 'https://bible-search.p.rapidapi.com/search',
//   params: {text: searchKey},
//   headers: {
//     'X-RapidAPI-Key': 'a996215639mshf92d79b1a920899p18da62jsncc33ac057114',
//     'X-RapidAPI-Host': 'bible-search.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     setArtists(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const options = {
  method: 'GET',
  url: `https://complete-study-bible.p.rapidapi.com/search-exact/${searchKey}/`,
  headers: {
    'X-RapidAPI-Key': 'a996215639mshf92d79b1a920899p18da62jsncc33ac057114',
    'X-RapidAPI-Host': 'complete-study-bible.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    setArtists(response.data)
}).catch(function (error) {
	console.error(error);
    console.log('hello')
});
        e.target.reset()
    }
    const [artists, setArtists] = useState([])
    const [searchKey, setSearchKey] = useState([])
    return (
       <div className='container-fluid narr-page row'>
            <h3>Search Bible by Text<i className="fa-solid fa-book-bible"></i></h3>
            <div className="d-flex justify-content-center moveit">
                <form onSubmit={(event) => { handlesubmit(event); }}>
                    <fieldset>
                        
                        <div className="mb-3">
                       <input type="text" id="TextInput" className="form-control " placeholder="Type here..." onChange={e => setSearchKey(e.target.value)}/>
                        </div>
                                <br/>
                                <div className='d-flex justify-content-center'>
                        <button type="submit" className="d-flex btn btn-primary justify-content-center">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        
            {typeof artists === 'object'  && artists ? artists.map((artist, index) => {
                console.log(artist)
                return   <div key={index} >
                   
                <div  className="card">
                <div className="card-header">
                    {artist.book__abbrev}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{artist.kjv}</p>
                        <footer className="blockquote-footer">{artist.book__name} {artist.chapter}:{artist.verse} <i className="fa-solid fa-book-bible"></i>  </footer>
                    </blockquote>
                </div>
                </div>
              </div>
            }) : <></> }
                   
        </div>
                   


    )
}

export default SearchText;

