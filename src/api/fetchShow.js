import React, {useEffect, useState} from 'react'
import axios from 'axios'



// const [show, setShow] = useState(null);
// const [seasons, setSeasons] = useState([]);

export const fetchShow = () => {
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            console.log(res);
            return res;
        });
    };