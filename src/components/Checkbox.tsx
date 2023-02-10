import { Checkbox as NBCheckbox, ICheckboxProps, Text } from 'native-base';

type Props = ICheckboxProps & {
    title: string;
}

export function Checkbox({ title, ...rest }: Props) {
    return (
        <NBCheckbox
        bgColor='#4D54E5'
        width={172}
        height={37} 
        borderRadius={100} 
        fontWeight='bold' 
        fontSize={32}
        marginLeft={2}
        {...rest}>
            <Text fontWeight='bold' color='white'>
                {title}
            </Text>
        </NBCheckbox>
    );
}