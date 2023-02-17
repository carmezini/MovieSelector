import {Button as NBButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
    [key: string]: any
}

export function ConfirmationButtonLogIn({ title, ...rest }: Props) {
    return (

        <NBButton
            bgColor='#D96AFF'
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