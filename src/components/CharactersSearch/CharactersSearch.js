
import { Autocomplete } from '@mui/material';
import React from 'react'
import { useDispatch} from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { getCharacterAction } from '../../redux/actions/getCharacterAction';

const charactersList = [
    { label: 'Rick Sanchez', id: 1, status: 'Alive' },
    { label: 'Morty Smith', id: 2, status: 'Alive' },
    { label: 'Summer Smith', id: 3, status: 'Alive' },
    { label: 'Beth Smith', id: 4, status: 'Alive' },
    { label: 'Jerry Smith', id: 5, status: 'Alive' },
    { label: 'Abadango Cluster Princess', id: 6, status: 'unknown' },
    { label: 'Abradolf Lincler', id: 7, status: 'Dead' },
    { label: 'Adjudicator Rick', id: 8, status: 'Dead' },
    { label:'Agency Director', id:9, status: 'Dead' },
    { label:'Alan Rails', id:10, status: 'Dead'  },
    {label: 'Albert Einstein', id: 11, status: 'Dead'},
    {label: 'Alexander', id: 12, status: 'Dead'},
    {label: 'Alien Googah', id: 13, status: 'unknown'},
    {label: 'Alien Morty', id: 14, status: 'unknown'},
    {label: 'Alien Rick', id: 15, status: 'unknown'},
    {label: 'Amish Cyborg', id: 16, status: 'Dead'},
    {label: 'Annie', id: 17, status: 'Alive'},
    {label: 'Antenna Morty', id: 18, status: 'Alive'},
    {label: 'Antenna Rick', id: 19, status: 'unknown'},
    {label: 'Ants in my Eyes Johnson', id: 20, status: 'unknown'}
  ];

const CharactersSearch = () => {

    const dispatch = useDispatch()

  return (
  
<Autocomplete
      id="character-select"
      sx={{ width: 300,margin: 'auto' }}
      options={charactersList}
      autoHighlight
      getOptionLabel={(charactersList) => `${charactersList.id} ${charactersList.label} ${charactersList.status} `}
      renderOption={(props, option) => (
          <div key={option.id} onClick={() =>dispatch(getCharacterAction(option.id))}>
        <Box component="li"  {...props}>
          {option.id} ({option.label}) {option.status}
        </Box>
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a character"
          
        />
      )}
    />
  )
}

export default CharactersSearch