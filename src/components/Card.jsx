export default function Card({fullName,occ,nameChange}){
    return(
        <>
        <div>
            <h1>{fullName}</h1>
            <h2>{occ}</h2>
        </div>
        <button onClick={nameChange}>name change</button>
            </>
    )
}