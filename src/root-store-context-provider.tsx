import React, { FC, PropsWithChildren } from 'react'

//import { init_state } from './helpers/app_init_state';

import { main_store } from './mst/create_root_store'
import type { IRoot$ } from './mst/stores/interfaces'

const storeContext = React.createContext<IRoot$ | null>(null)

export const StoreProvider: FC<PropsWithChildren<{}>> = (props) => {
    return <storeContext.Provider value={main_store}>{props.children}</storeContext.Provider>
}

export function useRootStore(): IRoot$ {
    const store = React.useContext(storeContext)

    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }

    return store
}
