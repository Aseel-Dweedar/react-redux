import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Search() {

    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        const setSearchTime = setTimeout(() => {
            if (term) {
                axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${term}`).then((res) => {
                    setResult(() => res.data.query.search);
                })
            }
        }, 500);

        return () => {
            clearTimeout(setSearchTime);
        }

    }, [term]);

    const renderResult = result.map((result) => {
        return (
            <div key={result.pageid} className='item' >
                <div className='content' >
                    <div className='header' >{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form' >
                <div className='field' >
                    <label>Enter Search term</label>
                    <input value={term} className='input' onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className='ui celled list' >{renderResult}</div>
        </div>
    )
}

export default Search
