import React, { useContext } from 'react'
import { DataContext } from './DataProvider';

export default function MyComponent() {
    const { GetData, setGetData } = useContext(DataContext);
    return (
        <div>
            <button onClick={() => setGetData(GetData + 1)}>Tryk på mig</button>
            <p>{GetData}</p>
        </div>
    )
}
