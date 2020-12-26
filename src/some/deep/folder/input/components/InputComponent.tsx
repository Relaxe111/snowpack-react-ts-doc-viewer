import React from 'react'
import { Input } from 'antd'
import { useObserver } from 'mobx-react-lite'

import { useRootStore } from '@app1/root-store-context-provider'

export const InputComponent = () => {
    const root$ = useRootStore()

    const { onChangeField } = root$

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeField('text', e.target.value)

    return useObserver(() => {
        return (
            <>
                <Input value={root$.text} onChange={onChange} />
            </>
        )
    })
}
