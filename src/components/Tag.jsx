import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';




function Tag() {
       //getting key from .env file
       const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const [loading, setloading] = useState(false);
    const [gif, setgif] = useState('');
    const [tag, setTag] = useState(' ');

    function searchGif(){
        let input = document.querySelector('[data-search]');
        let search = input.value;
        console.log(search);
        setloading(true);
        
        fetchData(search);
        setTag(search);
        input.value = ' ';
    }

    async function fetchData(tag){
        let tagData = tag;
        console.log(tag);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tagData}`;
        // using destruturing method for object
        const {data} = await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url;
    setloading(false);
        setgif(imageSrc);
        console.log(imageSrc);
    
        }
        useEffect( () => {
          fetchData(tag);
    setloading(true);

        }, []);
       
        

       
        // function downlaodGifHandler(e){
           
        //     let downloadBtn = document.querySelector('[data-download]');
        //     downloadBtn.addEventListener('click',()=>{
        //         let imgUrl = document.querySelector('[data-tagGif]').src;
        //         console.log(imgUrl);
        //         const fileUrl = 'https://media0.giphy.com/media/HpRPizLQTbnIA/giphy.gif?cid=abf07d527106b576c07aabdca9bb2e7acc12fae6105b8f09&rid=giphy.gif&ct=g';
        //         const fileName = '.gif';
        //         e.preventDefault();
        //         const link = document.createElement('a');
        //         link.download = fileName;
        //         link.href = fileUrl;
        //         document.body.appendChild(link);
        //         link.click();
        //         document.body.removeChild(link);
              

        //     });
        // }

      

  return (
    <div className='bg-white text-black p-10 rounded-lg text-center'>
    <h1 className='text-2xl font-bold mb-2'>Search Gif</h1>
    {loading ? (<Spinner/>) : (<img src={gif} alt="gif" className='w-[500px] mx-auto h-[400px]' data-tagGif/>) }

<div className='flex shadow-lg border-[#b1d2ff] border-4 rounded-lg mt-5 p-2'>
<input type="text" name="search" className='border-none bg-white w-11/12 px-4 focus:outline-none' placeholder='Search Gif' data-search/>
    <button type="submit" onClick={searchGif} className="bg-[#B1D2FF] text-xl py-2 px-5 rounded-lg mx-auto text-white font-semibold">Submit</button>
    
</div>

{/* <button onClick={downlaodGifHandler} className="bg-[#B1D2FF] text-xl mt-5 py-2 px-5 rounded-lg mx-auto text-white font-semibold" data-download>Download</button> */}

  
  </div>
  );
}

export default Tag;
