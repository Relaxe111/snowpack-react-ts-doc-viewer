import React from 'react'
import { Observer } from 'mobx-react-lite'
import { formatDistance, subDays } from 'date-fns'

import { useRootStore } from '@app1/root-store-context-provider'

export const SomeComponent = () => {
    const root = useRootStore()

    const formated_date = formatDistance(subDays(new Date(), 3), new Date())

    console.log(formated_date)

    return <Observer>{() => <>{`f_d: ${formated_date} text: ${root.text}`}</>}</Observer>
}
