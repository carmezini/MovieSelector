import {Button as NBButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <NBButton
        bgColor='#4D54E5'
        width={183}
        height={63} 
        borderRadius={100} 
        fontWeight='bold' 
        fontSize={32} 
        {...rest}>
            <Text>
                {title}
            </Text>
        </NBButton>
    );
}