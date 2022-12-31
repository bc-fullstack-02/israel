import React from 'react';
import { View, Image } from 'react-native';
import { Heading } from '../../src/components/Heading/index';
import { Input } from '../../src/components/Input/index';
import { User } from 'phosphor-react-native';

import  Amazim  from '../../assets/images/Amazim.png'

import { styles } from './styles'
import { THEME } from '../../src/theme/index';

export function Login() {
    return (
        <View style={styles.container}>
            <Image source={ Amazim } style={ Amazim } resizeMethod="scale" />
            <Heading title='Sysmap Parrot' subtitle='Faça login e comece a usar' />
            <Input.Root>
                <Input.Icon>
                    <User color={THEME.COLORS.INPUT} />
                </Input.Icon>
                <Input.Input></Input.Input>
            </ Input.Root>
        </View>
    )
}