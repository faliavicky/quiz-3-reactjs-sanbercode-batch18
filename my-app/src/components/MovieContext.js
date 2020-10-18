import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { API_URL } from '../Config'

export const MovieContext = createContext()

export const listEmpty = {
    id: null,
    title: "",
    description: "",
    year: 2020,
    duration: 120,
    genre: "",
    rating: 0,
    // review: null,
    image_url: ""
}
export const MovieProvider = (props) => {
    const [movieProduct, setmovieProduct] = useState(null)
    const [recordMovie, setRecordMovie] = useState(listEmpty)
    const [isAlert, setAlert] = useState(false)
    const [searchWords, setsearchWords] = useState(null)

    useEffect(() => {
        if (movieProduct === null) {
            movieLoad();
        }
        if (searchWords !== null) {
            movieSearch(searchWords)
        }
    }, [movieProduct, searchWords])

    const movieSearch = (kata) => {
        let hasil = movieProduct
        console.log('kata yg dicari', searchWords)
        if (searchWords !== '') {
            hasil = movieProduct.filter((oby) => {
                return oby.title.toLowerCase().includes(searchWords.toLowerCase())
            })
            setmovieProduct(hasil)
        } else {
            console.log('get ulang')
            setmovieProduct(null) //get ulang
        }
        setsearchWords(null)
    }

    const movieLoad = () => {
        axios.get(`${API_URL}/movies`)
            .then(res => {
                let dataMovie = res.data
                let hasil = dataMovie
                // if (searchWords !== '') {
                //     hasil = movieProduct.filter((oby) => {
                //         return oby.title.toLowerCase().includes(searchWords.toLowerCase())
                //     })
                // }
                setmovieProduct(hasil)
                setAlert('')
                console.log('executed movieLoad')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <MovieContext.Provider value={{
            movieProductContext: [movieProduct, setmovieProduct],
            recordMovieContext: [recordMovie, setRecordMovie],
            alertContext: [isAlert, setAlert],
            cariContext: [searchWords, setsearchWords],
            listEmpty
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}