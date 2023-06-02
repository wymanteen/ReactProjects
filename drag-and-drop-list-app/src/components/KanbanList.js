import React, { useCallback, useState, useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';
import Card from './Card.js';
import update from 'immutability-helper';
import cardsData from '../data/cards.json';
import { ContentCutOutlined } from '@mui/icons-material';
import {ReferenceListContext} from "./ReferenceListContext";

function getStyle(backgroundColor) {
    return {
      border: '1px solid rgba(0,0,0,0.2)',
      minHeight: '8rem',
      minWidth: '8rem',
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

    const { listsUpdated, setListsUpdated }  = useContext(ReferenceListContext);
    const [cards, setCards] = useState(cardsData);

    const ref = useRef(null);

    //const [hasDropped, setHasDropped] = useState(false);
    //const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);

    const [{ isOver, isOverCurrent }, drop] = useDrop(
      () => ({
        accept: ItemTypes.CARD,
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          isOverCurrent: monitor.isOver({ shallow: true }),
        }),
        hover(item, monitor) {
/*
            const cardId = item.id;
            const currentLisId = item.status;
            const hoverListId = ref.current.id;

            //console.log(item);

            if (!ref.current) {
                return
            }

            if(currentLisId!=hoverListId){
              //update status value

              let newArr = [...cards]; // copying the old datas array
              var foundIndex = newArr.findIndex(x => x.id == cardId);
              var foundItem = newArr[foundIndex];
              foundItem.status = hoverListId;
              setCards(newArr);

            }
            */
        },
        drop: (item, monitor) => {
            const cardId = item.id;
            const currentLisId = item.status;
            const hoverListId = ref.current.id;

            //console.log(item);

            if (!ref.current) {
                return
            }

            if(currentLisId!=hoverListId){
              //update status value

              let newArr = [...cards]; // copying the old datas array
              var foundIndex = newArr.findIndex(x => x.id == cardId);
              var foundItem = newArr[foundIndex];
              foundItem.status = hoverListId;
              setCards(newArr);
              setListsUpdated(new Date());

            }
        },
      }),
     []
    )

    let backgroundColor = 'lightgrey'
    
    if (isOverCurrent || (isOver)) {
      backgroundColor = 'lightyellow'
    }

    drop(ref);  


    const renderCards = useCallback((cards) => {
        //cards && console.log(cards);

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
        {/*hasDropped && <span> {hasDroppedOnChild && ' on child'}</span>*/}
  
        {renderCards(cards.filter(x => x.status == list.id))};
        
      </div>
    )
  }

