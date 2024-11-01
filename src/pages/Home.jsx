import { Link } from "wouter"
import useFetch from "../Hooks/useFetch"
import Loader from "../components/Loader"

export default function Home() {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    const { results } = data

    if (loading) return <Loader />
    if (error) return <h2>{error}</h2>
    return (
        <main>
            <section>
                <div className="container mx-auto">
                    <div className="flex flex-wrap gap-3">
                        {
                            results.map(poke => {
                                return (
                                    <Link
                                        to={`pokemon/${poke.name}`}
                                        key={poke.url}
                                        className='inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
                                    >
                                        {poke.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}