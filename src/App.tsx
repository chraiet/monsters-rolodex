import React, { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import Monster from './types/Monster'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App: React.FC = () => {
    const [monsters, setMonsters] = useState<Monster[]>([])
    const [searchField, setSearchField] = useState('')

    //  On component mount.
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(resonse => resonse.json())
            .then(users => setMonsters(users))
    }, [])

    const filteredMonsters = monsters.filter(monster => (
        monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    ))

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value)
    }

    return (
        <div className="App">
            <SearchBox placeholder="search monsters" handleChange={handleChange}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
