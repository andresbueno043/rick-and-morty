import { useCharacterContext } from '@/context/CharacterContext'
import React, { useEffect } from 'react'

type Props = {}

const Favorites = (props: Props) => {
  const { state } = useCharacterContext();

  useEffect (() => {
    console.log(state.favorites)
  }, [state.favorites])

  return (
    <div>
      {
        state.favorites.map((favorite) => (
          <h1 key={favorite.id}>{favorite.name}</h1>
        )) 
      }
    </div>
  )
}

export default Favorites