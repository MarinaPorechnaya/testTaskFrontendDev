import React, {useState} from 'react';

//https://jsonplaceholder.typicode.com/users
interface KeyFormProps {
    onAdd(url: string): void
}

const KeyForm: React.FC<KeyFormProps> = (props) => {
    const [url, setUrl] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onAdd(url)
        setUrl('');
        event.preventDefault();
    }
   const submitHandler = (event: any) => {
       event.preventDefault();
   }

    return <>
        <form onSubmit={submitHandler}>
            <input
                onChange={changeHandler}
                value={url}
                placeholder="Enter api url"
                type="text"/>
            <button onClick={clickHandler} type="submit" className="btn">Get data</button>
        </form>
    </>
}
export default KeyForm;