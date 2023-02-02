import { useState } from 'react'

import SearchForm from '../../components/SearchForm/SearchForm'
import SpellCard from '../../components/SpellCard/SpellCard'

import { spellSearch } from '../../services/api-calls'


const SpellSearch = () => {
  const [spells, setSpells] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSpellSearch = async formData => {
    const spellResults = await spellSearch(formData)
    console.log(spellResults);
    setHasSearched(true)
    setSpells(spellResults.results)
  }

    return (
      <>
        <h3>Such Spellz</h3>
        <SearchForm handleSpellSearch={handleSpellSearch}/>
        { spells.length  ?
          <>
            {spells.map(spell => (
              <div key={spell.index}>
                <SpellCard spell={spell} />
              </div>
            ))}
          </>
          :
          <h3>
            {hasSearched 
              ? "No search results found" 
              : "Please search for a spell!"}
          </h3>
        }
      </>
    )
}

export default SpellSearch