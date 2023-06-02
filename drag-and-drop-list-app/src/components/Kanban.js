import React, { useCallback, useState, useContext } from 'react';
import './Kanban.css'; 
import cardsData from '../data/cards.json';
import listsData from '../data/lists.json';
import Book from './Book';
import update from 'immutability-helper'
import Card from './Card';
import KanbanList from './KanbanList';
import {ReferenceListContext} from "./ReferenceListContext";

export default function Kanban(){

  const [listsUpdated, setListsUpdated]  = useState(null);
  /*
  const [lists, setLists] = useState(()=>{
      return data.Lists;
  });*/
  const [lists, setLists] = useState(listsData);

  //const [cards, setCards] = useState(cardsData);
  //const [cards, setCards] = useState(['book1', 'book2', 'book3']);
/*
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        author={card.author}
        date={card.date}
        title={card.title}
        uri={card.uri}
        moveCard={moveCard}
      />
    )
  }, []);
  */

  const renderList = useCallback((list, listId) => {
    return (
      <KanbanList key={listId} listId={listId} list={list}/>
    )
  }, [listsUpdated]);
 
  return (
    <div className="KanbanContainer">
      <ReferenceListContext.Provider value={{ listsUpdated, setListsUpdated }}>
      <div className='="KanbanListContainer"'>
        {/*
            <b>List 1</b>
            <div>
              {cards.map((card, i) => renderCard(card, i))}
          </div>
        */}
        {lists.map((list, i)=>renderList(list, i))}
      </div>
      </ReferenceListContext.Provider>
    </div>
  )

}

