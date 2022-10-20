import React from 'react'
import { CardMyCards } from '../../components/CardMyCards/CardMyCards'
import { Header } from '../../components/Header/Header'
import { CargBlog } from '../../components/CardBlog/CargBlog'
import {Text, StyleSheet, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import {
    Container,
    CardMyCardsView,
    CardBlogView,
    CardBlogItem,
    CardFunction,
    Title,
    CardFunctionContent,
    CardData,
    SubTitleOne
} from './Nubak.styles'

export function Nubank() {
    return (
        <Container>
           <Header />
           <CardMyCardsView>
            <CardMyCards/> 
           </CardMyCardsView>

           <CardBlogView>
           <ScrollView 
            horizontal 
            contentContainerStyle={{paddingHorizontal: 24}}
            showsHorizontalScrollIndicator={false}
            >
                <CardBlogItem>
                    <CargBlog 
                        link='https://www.google.com/' 
                        text={
                        <Text style = {styles.textBlack}>Conheça Nubank vida: Seguro e simples 
                            <Text style = {styles.textPurple}>cabe no seu bolso</Text>
                        </Text>} 
                    />
                </CardBlogItem>

                 <CardBlogItem>
                    <CargBlog 
                        link='https://www.google.com/' 
                        text={
                        <Text style = {styles.textBlack}>Conheça Nubank vida: Seguro e simples 
                            <Text style = {styles.textPurple}>cabe no seu bolso</Text>
                        </Text>} 
                    />
                </CardBlogItem>

                 <CardBlogItem>
                    <CargBlog 
                        link='https://www.google.com/' 
                        text={
                        <Text style = {styles.textBlack}>Conheça Nubank vida: Seguro e simples 
                            <Text style = {styles.textPurple}>cabe no seu bolso</Text>
                        </Text>} 
                    />
                </CardBlogItem>                                
           </ScrollView>
           </CardBlogView>
            
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
           <CardFunction>
            <Ionicons name='card-outline' size = {25} color="#000"/>
            <CardFunctionContent>
                <Title>Cartão de crédito</Title>
                <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
            </CardFunctionContent>
            <CardData>
                <SubTitleOne>Fatura Atual</SubTitleOne>
                <Title>R$ 1.221,00</Title>
                <SubTitleOne>Limite disponível R$ 2.800,00</SubTitleOne>
            </CardData>
           </CardFunction>

           <CardFunction>
            <Ionicons name='cash-outline' size = {25} color="#000"/>
            <CardFunctionContent>
                <Title>Empréstimo</Title>
                <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
            </CardFunctionContent>
            <CardData>
                <SubTitleOne>Até R$ 10.000,00 disponível para você</SubTitleOne>
            </CardData>
           </CardFunction>

           <CardFunction>
            <Ionicons name='card-outline' size = {25} color="#000"/>
            <CardFunctionContent>
                <Title>Investimento</Title>
                <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
            </CardFunctionContent>
            <CardData>
                <SubTitleOne>Fatura Atual</SubTitleOne>
                <Title>R$ 1.221,00</Title>
                <SubTitleOne>Limite disponível R$ 2.800,00</SubTitleOne>
            </CardData>
           </CardFunction>

           <CardFunction>
            <Ionicons name='card-outline' size = {25} color="#000"/>
            <CardFunctionContent>
                <Title>Cartão de crédito</Title>
                <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
            </CardFunctionContent>
            <CardData>
                <SubTitleOne>Fatura Atual</SubTitleOne>
                <Title>R$ 1.221,00</Title>
                <SubTitleOne>Limite disponível R$ 2.800,00</SubTitleOne>
            </CardData>
           </CardFunction>

           <CardFunction>
            <Ionicons name='card-outline' size = {25} color="#000"/>
            <CardFunctionContent>
                <Title>Cartão de crédito</Title>
                <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
            </CardFunctionContent>
            <CardData>
                <SubTitleOne>Fatura Atual</SubTitleOne>
                <Title>R$ 1.221,00</Title>
                <SubTitleOne>Limite disponível R$ 2.800,00</SubTitleOne>
            </CardData>
           </CardFunction>
           </ScrollView>
        </Container>

    )
}

const styles = StyleSheet.create({
    textBlack: {
        color: '#000'
    },
    textPurple: {
        color: '#820ad1'
    }
})