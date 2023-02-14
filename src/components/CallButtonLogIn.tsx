import {Button as NBButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function CallButtonLogIn({ title, ...rest }: Props) {
    return (
        <NBButton
        bgColor='primary.100'
        borderRadius={100}
        w={79}
        _pressed={{
            bgColor:'purple.900'
        }} 
        {...rest}>
            <Text fontWeight='bold' color='white' fontSize={16}>
                {title}
            </Text>
        </NBButton>
    );
}