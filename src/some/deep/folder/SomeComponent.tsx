import React from 'react'
import { Observer } from 'mobx-react-lite'

import { useRootStore } from '@app1/root-store-context-provider'

export const SomeComponent = () => {
    const root = useRootStore()

    return <Observer>{() => <>{root.text} </>}</Observer>
}
