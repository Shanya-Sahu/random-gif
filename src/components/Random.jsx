import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';

function Random() {
    //getting key from .env file
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const [loading, setloading] = useState(false);
    const [gif, setgif] = useState('');


    async function fetchData(){
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // using destruturing method for object
    const {data} = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setloading(false);
    setgif(imageSrc);
    console.log(imageSrc);

    }
    useEffect( () => {
      fetchData();
    }, [])
    
    function generateGifHandler(){
        fetchData();
    setloading(true);

    }
    
  return (
    <div className='bg-white text-black p-10 rounded-lg text-center'>
      <h1 className='text-2xl font-bold mb-2'>Random Gif</h1>
      {loading ? (<Spinner/>) : (<img src={gif} alt="gif" className='w-[500px] mx-auto h-[400px]' data-randomGif/>) }

      <button onClick={generateGifHandler} className="bg-[#B1D2FF] text-xl py-2 px-5 rounded-lg mx-auto text-white font-semibold mt-6 mb-5">Generate Gif</button>
    </div>
  );
}

export default Random;
