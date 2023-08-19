import React from 'react'
import { useState } from 'react'

const list = [
    "Apple",
    "Blueberry",
    "Apricot",
    "Atemoya",
    "Chempedak",
    "Pineapple",
    "Fuyu Persimmon",
    "Lucuma",
    "Rambutan",
    "Rose apple",
    "Oranges",
    "Olive",
    "Sapota",
    "Nance",
    "Naranjilla",
    "Nectarine",
    "Lime",
    "Kiwi",
    "Kabosu",
    "Kiwano",
    "Jenipapo",
    "Honeyberries"
]

function PracSearch() {
    const [filterList, setFilterList] = useState(list);
    const handleSearch = (e) => {
        setFilterList(e.target.value);
        if(e.target.value === '') {
            setFilterList(list);
            return;
        }
        const filterSearch = list.filter(item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
        setFilterList(filterSearch);
    }
  return (
    <>
        <br/>
        Search: <input type="text" 
               onChange={e => handleSearch(e)}
        />
        {filterList && filterList.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </>
  )
}

export default PracSearch