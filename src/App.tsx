import React from 'react'
import DocViewer from 'react-doc-viewer'

function App() {
    // Return the App component.
    return<DocViewer documents={[{ uri: 'https://example-files.online-convert.com/document/pdf/example.pdf' }]} />
}

export default App
