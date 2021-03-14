import React from 'react'
import { DataProvider } from './DataProvider'
import MyComponent from './MyComponent'

export default function DataComponent() {
    return (
        <DataProvider>
            <MyComponent />
        </DataProvider>
    )
}
