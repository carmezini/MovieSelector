import {Button as NBButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function ButtonLogIn({ title, ...rest }: Props) {
    return (
        <NBButton
        bgColor='#4D54E5'
        borderRadius={100}
        fontWeight='bold'
        _pressed={{
            bgColor:'purple.900'
        }} 
        {...rest}>
            <Text fontWeight='bold' color='white' fontSize={32}>
                {title}
            </Text>
        </NBButton>
    );
}