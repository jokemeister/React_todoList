import React from 'react';
import { useState } from 'react';
import { SingleTask } from './SingleTask';

export const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
          id: 1,
          name: "Увімкнути тахометр",
          description: "Інакше буде боляче",
          done: true,
          due_date: "2022-08-22",
          list_id: 1
        },
        {
          id: 2,
          name: "Доробити верстку макету",
          done: false,
          due_date: "2022-08-20",
          list_id: 1
        },
        {
          id: 3,
          name: "Піти додому",
          description: "Інакше мене зачинять у офісі",
          done: false,
          due_date: "2022-08-25",
          list_id: 1
        }
    ])

    return (
        <>
            {

                tasks.map(t => 
                    <SingleTask 
                        key={ 'list_' + t.list_id + '_task_' + t.id }
                        tasks={ tasks }
                        setTasks={ setTasks }
                        index = {tasks.indexOf(t)}
                        id={ t.id } 
                        name={ t.name } 
                        description={ t.description } 
                        done={ t.done } 
                        due_date={ t.due_date } 
                        list_id={ t.list_id }
                    />
                ) 
            }
        </>
    )
}