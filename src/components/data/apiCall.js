import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiCall () {
  const [img, getImg] = useState('cat');

  useEffect(() => {
    getAllResults();
}, []);

  const getAllResults = () => {
    console.log('get results is called')
  // Make a request for a user with a given ID
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      // handle success
      const responseImg = response.data.message;
      getImg(responseImg);

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  }

  return (
  <img src={img} />
    )
}
export default ApiCall;
