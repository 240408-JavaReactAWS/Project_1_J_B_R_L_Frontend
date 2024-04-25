import React from 'react'

interface IBuyButtonProps {
    movieId: number
}
function BuyButton(props:IBuyButtonProps) {
    function buyMovie() {
        console.log('Buy movie with id: '+props.movieId)
        // axios.post('http://localhost:8080/movies/'+props.movieId)
        // Something like the above should be implemented once the backend is ready
    }
  return (
    <button onClick={buyMovie}>Buy now!</button>
  )
}

export default BuyButton
