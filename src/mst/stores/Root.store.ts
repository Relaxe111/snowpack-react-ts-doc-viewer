import { types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        text: types.optional(types.string, ''),
    })
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
        },
    }))
