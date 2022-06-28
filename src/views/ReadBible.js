import axios from 'axios';
import { useState } from 'react';
let ReadBible = () => {
    const [book, setBook] = useState([])
    const [chapter, setChapter] = useState([])
    const [artists, setArtist] = useState()
    let handlesubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        const options = {
            method: 'GET',
            url: 'https://ajith-holy-bible.p.rapidapi.com/GetChapter',
            params: { Book: book, chapter: chapter },
            headers: {
                'X-RapidAPI-Key': 'a996215639mshf92d79b1a920899p18da62jsncc33ac057114',
                'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setArtist([response.data])
        }).catch(function (error) {
            console.error(error);
        });
        e.target.reset()
    }

    return (

        <div className="bible-page container-fluid row">
            <h3>Scripture Search<i className="fa-solid fa-book-bible"></i> </h3>
            <div className="d-flex  justify-content-center moveit">
                <form className="input-group mb-3 row d-flex justify-content-center hstack gap-3" onSubmit={(event) => { handlesubmit(event); }}>
                    <input type="text" className="form-control" placeholder="The Book"  onChange={e => setBook(e.target.value)} />
                    <input type="text" className="form-control" placeholder="The Chapter" onChange={e => setChapter(e.target.value)} />
                    <div className="vstack gap-2  mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="submit" className="btn btn-warning">Cancel</button>
                    </div>
                </form>
            </div>
        {typeof artists === 'object' && artists ? artists.map((artist, index) => {
           return <div key={index}><div key={index} className="card">
           <div className="card-body">
            {artist.Output}
           </div>
         </div>
         </div>
        }): <></>}













        </div>
    )
}

export default ReadBible;