import { useParams } from "wouter"
import useFetch from "../hooks/useFetch"
import Loader from "../components/Loader"

export default function Details() {
    let { name } = useParams()
    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(data)

    if (loading) return <Loader />
    if (error) return (
        <article className="text-white bg-red-500 max-w-64 mx-auto p-3 text-center rounded-md shadow-md">
            <h2 className="text-slate-900">No se encontró el Pokemon</h2>
        </article>
    )

    return (
        <article className="text-white bg-lime-100 max-w-64 mx-auto p-3 text-center rounded-md shadow-md">
            <img src={data.sprites.front_default} alt={data.name} className="text-center mx-auto" loading="lazy" />
            <h2 className="text-slate-900">{data.name}</h2>
        </article>
    )
}