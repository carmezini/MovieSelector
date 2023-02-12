import { VStack, Heading, Center, Image, HStack, Divider } from 'native-base';
import { Input } from '../components/Input';
import { ButtonSignUp } from '../components/ButtonSignUp';
import { ButtonLogIn } from '../components/ButtonLogIn';
import { Checkbox } from '../components/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    repeatpassword: string;
    };

const signUpSchema = yup.object({
    name: yup
    .string()
    .required('Please, inform a name.'),
    email: yup
    .string()
    .required('Please, inform an e-mail')
    .email('Invalid e-mail.'),
    password: yup
    .string()
    .required('Inform a password.')
    .min(8, 'Minimun length of 8 characters.'),
    repeatpassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
    });

export function SignUp() {

    const { control, handleSubmit, formState:{ errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    function handleSignUp(data: FormDataProps) {
        console.log(data);
    };

  return (
    <VStack bgColor="primary.200" flex={1} px={5}>
        <Center>
            <Image
                mt={10}
                alt='logo'
                width={128}
                height={125}
                source={require('../../assets/watching-a-movie.png')}
            />
        </Center>
        <Heading
            my={4}
            fontSize={40} 
            fontWeight='bold' 
            color='primary.100' 
            mb={15}>
            Sign Up
        </Heading>

        <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
                <Input 
                    placeholder='Full Name'
                    onChangeText={onChange}
                    errorMessage={errors.name?.message}
                />
            )}
        />

        <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
                <Input 
                    placeholder='E-mail'
                    onChangeText={onChange}
                    errorMessage={errors.email?.message}
                />
            )}
        />

        <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
                <Input 
                    placeholder='Password'
                    onChangeText={onChange}
                    secureTextEntry={true}
                    errorMessage={errors.password?.message}
                />
            )}
        />

        <Controller
            control={control}
            name="repeatpassword"
            render={({ field: { onChange } }) => (
                <Input 
                    placeholder='Repeat Password'
                    onChangeText={onChange}
                    secureTextEntry={true}
                    errorMessage={errors.repeatpassword?.message}
                />
            )}
        />

        <HStack 
            bgColor='primary.100'
            borderRadius={8}
            width={170} >
            <Checkbox 
                title='Remember me' 
                value=''/>
        </HStack>
        <Divider
        mt={4}
        bg='primary.400' />

        <Center>
            <Heading 
                mt={2}
                color='primary.100' 
                fontSize={16} 
                fontWeight='medium' >
                Or sign up with social account
            </Heading>
            <HStack 
                mt={4} 
                space={10}>
                <FontAwesome 
                    name="google" 
                    size={30} 
                    color="black" />
                <MaterialCommunityIcons 
                    name="facebook" 
                    size={30} 
                    color="black" />
            </HStack>
        </Center>
        <Center>
            <ButtonSignUp 
            title='Sign Up'
            width={183}
            height={63} 
            fontSize={32}
            marginTop={2}
            onPress={handleSubmit(handleSignUp)}/>
        </Center>

        <Divider
        mt={4}
        bg='primary.400' />

        <Heading
            mt={4}
            color='primary.100'
            fontSize={16} 
            fontWeight='medium' >
            Already have an account?
        </Heading>
        
        <ButtonLogIn
            title='Log In'
            width={78}
            mt={2}
            fontSize={16} >
        </ButtonLogIn>
        
    </VStack>
  );
}

