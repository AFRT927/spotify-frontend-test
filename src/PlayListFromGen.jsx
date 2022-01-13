import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const { getPlaylistByGenre } =  require('./apiConnector')

export default function PlayListFromGen({token}) {
    const {id} = useParams(token)
    const [myPlayList, setMyPlayList] = useState([])  
    const [playListSucc, setPlayListSucc] = useState(false)
    useEffect(() => {
        getPlaylistByGenre(token, id)
        .then(res => {
            if(res.success){
                setPlayListSucc(true)                
                setMyPlayList(res.data)                
            }
        })
    },[])

    return(
        <div>
            {playListSucc ? (
                <>
                    <h1>the playlist are</h1>
                    <ul>
                       {myPlayList.map(p => <li key={p.id}>{p.name}</li>)}
                    </ul>
                </>

            ): (
                <h1>spotify is not available</h1>
            )}

        </div>
       
    )
}