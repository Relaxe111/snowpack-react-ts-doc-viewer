import React from 'react'
import DocViewer from 'react-doc-viewer'

import style from './App.module.css'
function App() {
    // Return the App component.
    return (
        <div className={style.App}>
            <DocViewer documents={[{ uri: 'https://example-files.online-convert.com/document/pdf/example.pdf' }]} />
        </div>
    )
}

export default App
