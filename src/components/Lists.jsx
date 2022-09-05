import React, { useEffect } from 'react';
import { SingleList } from './SingleList';
import { ListsContext } from '../hoc/ListsProvider';
import { useContext } from 'react';

export const Lists = props => {
    const { clickHandler } = props;
    const { lists } = useContext(ListsContext);

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