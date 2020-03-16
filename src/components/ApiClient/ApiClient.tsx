import React, {useState, useEffect } from 'react';
import ItemsList from "./ItemsList/ItemsList";
import KeyForm from "./KeyForm/KeyForm";
import {ISource, IItems} from "../../interfaces/interfaces";
import {Loader} from "../Loader";
import axios from "axios";

const ApiClient: React.FC = (props) => {

    const [sources, setSources] = useState<ISource[]>([{url:'', id: Date.now()}])
    const [data, setItems] = useState<IItems[]>([])
    const [isLoading, setIsLoading] = useState(false);

    const addHandler = (url: string) => {
        const newSource: ISource = {
            url: url,
            id: Date.now()
        }
        setSources(prev => [newSource, ...prev])
    }

//"https://jsonplaceholder.typicode.com/users"

    const [{url}] = sources

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(url);
            setItems(result.data);
            setIsLoading(false);
        };
            if(url !== ""){
            fetchData();
        }
    }, [url]);

    return <>
        <KeyForm onAdd={addHandler}/>
        { isLoading && <Loader/> }
        <ItemsList data={data} />
    </>
}
export default ApiClient;