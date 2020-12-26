import React from 'react'

import { SomeComponent } from '@app/SomeComponent'
import { InputComponent } from '@app/input/components/InputComponent'

import logo from './logo.svg'
import { StoreProvider } from './root-store-context-provider'
import style from './App.module.css'

function App() {
    // Return the App component.
    return (
        <StoreProvider>
            <div className={style.App}>
                <header className={style['App-header']}>
                    <SomeComponent />
                    <InputComponent />

                    <img src={logo} className={style['App-logo']} alt='logo' />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

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
        </StoreProvider>
    )
}

export default App
