import React, { useCallback, useState, useEffect } from 'react';
import './Kanban.css'; 
import cardsData from '../data/cards.json';
import listsData from '../data/lists.json';
import Book from './Book';
import update from 'immutability-helper'
import Card from './Card';
import KanbanList from './KanbanList';
import {ReferenceAllCardsContext} from "./ReferenceAllCardsContext";

export default function Kanban(){

  const [allCards, setAllCards]  = useState(cardsData);
  /*
  const [lists, setLists] = useState(()=>{
      return data.Lists;
  });*/
  const [lists, setLists] = useState(listsData);

  const renderList = useCallback((list, listId) => {
    return (
      <KanbanList key={listId} listId={listId} list={list}/>
    )
  }, [allCards]);
 
  return (
    <div className="KanbanContainer">
      <ReferenceAllCardsContext.Provider value={{ allCards, setAllCards }}>
      <div className='="KanbanListContainer"'>
        {lists.map((list, i)=>renderList(list, i))}
      </div>
      </ReferenceAllCardsContext.Provider>
    </div>
  )

}

