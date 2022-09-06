import React from 'react';
import { SingleList } from './SingleList';
import { useSelector } from 'react-redux';

export const Lists = props => {
    const { clickHandler } = props;
    const lists = useSelector(state => state.dashboard.lists);

    return (
      <>
        {
          lists.map(l => 
            <SingleList
                key = { 'list_' + l.id }
                lists = { lists }
                l = { l }
                parent = { props.parent }
                clickHandler = { clickHandler }
            />
          ) 
        }
      </>
    )
}