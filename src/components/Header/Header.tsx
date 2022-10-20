import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

import {Ionicons} from '@expo/vector-icons' 

import {
    Container,
    UperView,
    UserIconView,
    OptionsIcon,
    TextWellcome,
    TotalBalence,
    AccountView,
    Subtitle,
    BalenceTotal,
    BalenceTotalNotVisible,
    OptionView,
    OptionText,
    OptionIcon

} from '../Header.styles'

export function Header(){
    const [showBalence, setShowBalence] = useState()

    return (
        <>
        <Container>
            <UperView>
                <UserIconView>
                <Ionicons name='person-outline' size = {20} color="#fff" />
                </UserIconView>

                <OptionsIcon>
                    <TouchableOpacity onPress={() => setShowBalence(!showBalence)}>
                       {showBalence ? (
                        <Ionicons name='eye-outline' size = {25} color="#fff"  style= {{marginRight: 16}} />
                       ): (
                        <Ionicons name='eye-off-outline' size = {25} color="#fff"  style= {{marginRight: 16}} />
                       ) } 
                    </TouchableOpacity>
                    <Ionicons name='help-circle-outline' size = {25} color="#fff" style= {{marginRight: 16}} />
                    <Ionicons name='mail-outline' size = {25} color="#fff" />
                </OptionsIcon>
            </UperView>

            <TextWellcome>
                Olá, Thairan 
            </TextWellcome>
        </Container>

         <TotalBalence>
         <AccountView>
              <Subtitle>
                  Conta
              </Subtitle>

              <Ionicons name="chevron-forward-outline" size={20} color="#908d91" />
          </AccountView>
            
            {showBalence ? (
                <BalenceTotal>R$ 15.104,04</BalenceTotal> 
            ) : (
                <BalenceTotalNotVisible/>
            )}
         </TotalBalence>

         <View>
            <ScrollView 
            horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginLeft:24, paddingRight: 50}}
            >
                <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Pix
                    </OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Pagar
                    </OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Transferir
                    </OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Depositar
                    </OptionText>
                </OptionView>

                 <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Pix
                    </OptionText>
                </OptionView> 

                <OptionView>
                    <OptionIcon>
                        <Ionicons name="cash-outline" size={20} color="#000" />
                    </OptionIcon>

                    <OptionText>
                        Pix
                    </OptionText>
                </OptionView>                          
            </ScrollView>
         </View>
         </>
    )
}