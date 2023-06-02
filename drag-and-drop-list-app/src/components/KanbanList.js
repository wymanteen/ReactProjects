import React, { useCallback, useState, useRef, useContext, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';
import Card from './Card.js';
import update from 'immutability-helper';
import cardsData from '../data/cards.json';
import { ContentCutOutlined } from '@mui/icons-material';
import {ReferenceAllCardsContext} from "./ReferenceAllCardsContext";


function getStyle(backgroundColor) {
    return {
      border: '1px solid rgba(0,0,0,0.2)',
      minHeight: '8rem',
      minWidth: '360px',
      backgroundColor,
      padding: '1rem',
      paddingTop: '1rem',
      margin: '1rem',
      textAlign: 'center',
      float: 'left',
      fontSize: '1rem',
    }
  }


export default function KanbanList({ list }){

    const { allCards, setAllCards }  = useContext(ReferenceAllCardsContext);

    const [cards, setCards] = useState(cardsData.filter(x => x.status == list.id));

    useEffect(() => {
      //Runs on the first render
      //And any time any dependency value changes
      if(allCards.length>0)
        setCards(allCards.filter(x => x.status == list.id));
        
    }, [allCards]);
    
    const ref = useRef(null);

    const [{ isOver, isOverCurrent }, drop] = useDrop(
      () => ({
        accept: list.active ? ItemTypes.CARD: ItemTypes.NTH,
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          isOverCurrent: monitor.isOver({ shallow: true }),
        }),
        drop: (item, monitor) => {
            const cardId = item.id;
            const currentLisId = item.status;
            const hoverListId = ref.current.id;

            //console.log(item);
            //console.log("currentLisId=" + currentLisId);
            //console.log("hoverListId=" + hoverListId);

            if (!ref.current) {
                return
            }

            if(currentLisId!=hoverListId){
              //update status value
              let newArr = [...allCards];
              var foundIndex = newArr.findIndex(x => x.id == cardId);
              var foundItem = newArr[foundIndex];
              foundItem.status = hoverListId;
              setAllCards(newArr);

            }
        },
      }),
     []
    )

    let backgroundColor = list.active ? 'lightgrey' : 'grey';
    
    if (isOverCurrent || (isOver)) {
      backgroundColor = 'lightyellow'
    }

    drop(ref);  

    const renderCards = useCallback((cards) => {
        var html = cards.map((card, i)=> <Card
                                            key={card.id}
                                            index={i}
                                            id={card.id}
                                            author={card.author}
                                            date={card.date}
                                            title={card.title}
                                            uri={card.uri}
                                            status = {card.status}
                                            moveCard={moveCard}
                                        />);

        return (cards && <>{html}</>)
    }, [cards]);

    
    const moveCard = useCallback((dragIndex, hoverIndex) => {      
        setCards((prevCards) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
            ],
          }),
        );
    }, []);

    return (
      <div ref={ref} style={getStyle(backgroundColor)} id={list.id}>
        
        {list.listName}
        <br />
        {renderCards(cards)};
        
      </div>
    )
  }

