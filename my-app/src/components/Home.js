import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../Config'
import imageNotAvailable from '../img/na.jpg'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: null,
        }
    }

    componentDidMount() {
        this.state.movieList === null && this.getMovieList()
    }

    getMovieList() {
        console.log('get movie list')
        axios.get(`${API_URL}/movies`)
            .then((res) => {
                let mdata = res.data
                mdata = mdata.sort(function (x, y) {
                    return y.rating - y.rating
                })
                this.setState({
                    movieList: mdata,
                })
            }).catch((err) => {
                alert(`Cek Koneksi Anda! (Err: ${err})`)
            })
    }

    handleImage(elm) {
        elm.target.onerror = null
        elm.target.src = imageNotAvailable
    }

    render() {
        let movieList = this.state.movieList
        return (
            <section>
                <h1>Daftar Film Film Terbaik</h1>
                {
                    movieList !== null && movieList.map((item, idx) => {
                        let duration_h = Math.floor(item.duration / 60)
                        let duration_m = (item.duration % 60) === 0 ? '' : (item.duration % 60 + ' menit')
                        let duration = `${duration_h} jam ${duration_m}`
                        return (
                            <div key={idx}>
                                <div className="movieList">
                                    <h3>{item.title}</h3>
                                    <img onError={this.handleImage} src={item.image_url !== null ? item.image_url : imageNotAvailable} alt={`${item.title} cover`} />
                                    <div className="meta-data">
                                        <b>Rating {item.rating}</b><br></br>
                                        <b>Durasi: {duration}</b><br></br>
                                        <b>genre: {item.genre}</b><br></br>
                                    </div>
                                    <p><b>deskripsi: </b> {item.description}</p>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }

                {
                    movieList === null && (<div style={{ textAlign: 'center' }}>Belum ada data tersedia ...</div>)
                }
            </section>
        )
    }
}

export default Home