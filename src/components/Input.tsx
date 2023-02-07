import { Input as NBInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
    return (
        <NBInput
        bg='#4D54E5'
        height={37}
        mb={15}
        _focus={{
            borderWidth: 2,
            borderColor: '#4D54E5'
            
        }}
        
        { ...rest }
        />
    )
}