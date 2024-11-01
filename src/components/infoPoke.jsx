import { useEffect, useState } from "react"
import getPoke from "../services/getPoke"

export default function InfoPoke({ infoPoke }) {
    const [poke, setPoke] = useState([])
    useEffect(function () {
        getPoke(infoPoke).then(poke => setPoke(poke))
        console.log(poke)
    }, [infoPoke])

    return (
        <div>
            <img src={poke.sprites.front_default} alt="" />
            <h2>{poke.name}</h2>
        </div>
    )
}