import {Button as NBButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function ButtonLogIn({ title, ...rest }: Props) {
    return (
        <NBButton
        bgColor='#4D54E5'
        borderRadius={100} 
        width={78}
        marginTop={2}
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