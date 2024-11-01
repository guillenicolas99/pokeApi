export default function ListPokes({ pokes, handleInfo }) {
    return (
        <ol>
            {
                pokes.map(poke => {
                    return (
                            <li key={poke.url} onClick={ () => {
                                infoPoke(poke.ur)
                            }}>Ver información de: <strong> {poke.name}</strong> </li>
                    )
                })
            }
        </ol>
    )
}