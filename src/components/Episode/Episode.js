import React from 'react'
import axios from 'axios';

const Episode = ({ep}) => {
  const [ episodes, setEpisodes ] = React.useState(null)
    
     React.useEffect(() =>{
            fetchEpisode()
           
          },[])
          
        async function fetchEpisode(){
            try{
              const response = await axios.get(`${ep}`)
              setEpisodes(response.data)
        
            }catch(e){
              console.log(e);
            }
          }
  return (
    <div>
     {episodes && Object.entries(episodes).map((value,key) => 
                                            <div style={{margin: '10px'}} key={key}>{value[1]}</div>)}
    </div>
  )
}

export default Episode