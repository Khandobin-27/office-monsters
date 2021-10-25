import React, {useState, useEffect} from 'react'
import CardList from './CardList';
import Searchbox from './Searchbox';
import '../styles/App.css'


export default function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, [])

  // console.log(monsters)
  

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }
  

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })
 

  return (
    <div className='tc'>
      <h1 className='f1'>Office monsters</h1>
      <Searchbox searchChange={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div> 
  );
}

