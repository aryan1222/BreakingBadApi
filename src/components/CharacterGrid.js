import React from 'react';
import Character from './Character';

const CharacterGrid = ({items}) =>{
    
    return (
        <div className="center cards">
            {items.map(item =><Character key={item.char_id} item={item}/>)}
        </div>
    )
}

export default CharacterGrid;