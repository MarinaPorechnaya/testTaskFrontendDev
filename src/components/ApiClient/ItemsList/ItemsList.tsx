import React from 'react';
import s from './ItemsList.module.css';
import {ItemsListProps} from "../../../interfaces/interfaces";
//https://jsonplaceholder.typicode.com/users

const ItemsList: React.FC<ItemsListProps> = ({data}) => {
    return  <>
        {data.length !== 0 &&
        <div className={s.tablePadding}>
        <table className="highlight">
            <thead>
            <tr>
                <th>N</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {data.map(d => {
                return (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
        }
    </>
}

export default ItemsList;