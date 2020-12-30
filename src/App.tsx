import React from 'react'
import DocViewer from 'react-doc-viewer'

import { SomeComponent } from '@app/SomeComponent'
import { InputComponent } from '@app/input/components/InputComponent'

import Logo from './logo.svg'
import style from './App.module.css'
import { OpenSidePatientPanel } from './assets/svg/CustomSvgIcons'
import { GroupSVG } from './assets/svg/GroupSVG/GroupSVG'
function App() {
    // Return the App component.
    return (
        <div className={style.App}>
            <header className={style['App-header']}>
                <SomeComponent />
                <InputComponent />
                <DocViewer documents={[{ uri: 'https://example-files.online-convert.com/document/pdf/example.pdf' }]} />
                <Logo className={style['App-logo']} />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <OpenSidePatientPanel />
                <GroupSVG style={{ width: '70px' }} secondColor='blue' firstColor='red' thirdColor='green' />
                <p>
                    <a
                        className={style['App-link']}
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
