import React, { ReactNode } from 'react'
import { Linking } from 'react-native'

import {
    Container
} from './CardBlog.styles'

type Props = {
    text : ReactNode
    link: string
}

export function CargBlog({ link, text}: Props) {
    return (
        <Container onPress={() => Linking.openURL(link)}>
            {text}
        </Container>
    )
}