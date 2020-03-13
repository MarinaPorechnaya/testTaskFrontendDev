import React, {useState} from 'react';
import {DownloadFormProps} from "../../../interfaces/interfaces";

const DownloadForm: React.FC<DownloadFormProps> = (props) => {
    const [url, setUrl] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.onAdd(url)
        setUrl('');
        event.preventDefault();
    }

    return <>
        <form>
            <input
                onChange={changeHandler}
                value={url}
                placeholder="Enter image url"
                type="text"/>
            <button onClick={clickHandler} type="submit" className="btn">Download</button>
        </form>
    </>
}
export default DownloadForm;