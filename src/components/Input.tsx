import { Input as NBInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
    const invalid = !!errorMessage || isInvalid;



    return (
        <FormControl mb={3} isInvalid={invalid}>
            <NBInput
            bg='#4D54E5'
            height={36}
            placeholderTextColor='white'
            borderRadius={8}
            isInvalid={invalid}
            _focus={{
                borderWidth: 2,
                borderColor: '#4D54E5'
                
            }}
            { ...rest }
            />

            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}