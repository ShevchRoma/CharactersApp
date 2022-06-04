import './App.css';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { getAllCharactersAction } from './redux/actions/getAllCharactersAction';
import FacebookLogin from 'react-facebook-login';
import Characters from './components/CharactersList/Characters';
import CharactersSearch from './components/CharactersSearch/CharactersSearch';
import Character from './components/Character/Character';
import LikedCharacters from './components/LikedCharacters/LikedCharacters';




function App() {
  const [ isLogged, setIsLogged ] = React.useState(false);
  const charactersList = useSelector((state) => state.characters.characters)
  const character = useSelector(state => state.character.character);
  const dispatch = useDispatch()
  const responseFacebook = (response) => {
    console.log(response)
    if(response.name !== 'unknown'){
    setIsLogged(true)
    }
  } 
    React.useEffect(() =>{
      dispatch(getAllCharactersAction())
    },[dispatch])
    
  return (
    <div className="wrapper">
       <div className="container">
       <div className="app">
        <FacebookLogin
    appId="381116363970531"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} /> 
    {!isLogged ? <div>You not logged</div> : <div>you are logged</div>}
     
         <div className="app__header">
            <CharactersSearch />
            <LikedCharacters />
          </div>
         <div className="app__body">
           <div className="app__top">
             {character && <Character character={character} />}
           </div>
         {charactersList && charactersList.map((character) => <Characters key={character.id} character={character} />)}
         </div>
       </div>
       </div>
    </div>
  );
}

export default App;
