import { VStack, Heading, Center, Image, HStack, Divider } from 'native-base';
import { Input } from '../components/Input';
import { ConfirmationButtonLogIn } from '../components/ConfirmationButtonLogIn';
import { CallButtonSignUp } from '../components/CallButtonSignUp';
import { Checkbox } from '../components/Checkbox';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type FormDataProps = {
    email: string,
    password: string
    };

const LogInSchema = yup.object({
    email: yup
        .string()
        .required('Please, inform an e-mail.')
        .email('Invalid e-mail.'),
    password: yup
        .string()
        .required('Inform a password.')
        .min(8, 'Minimun length of 8 characters.')
    });

export function LogIn() {
    const navigation = useNavigation();
    
    function callSignUpScreen() {;
        navigation.navigate('SignUp');
    }

    const { control, handleSubmit, formState:{ errors }  } = useForm<FormDataProps>({
        resolver: yupResolver(LogInSchema)
        });

    function handleLogIn(data: FormDataProps) {
        console.log(data)
        };


    return (
        <VStack bgColor='primary.200' flex={1} px={5}>
            <Center>
                <Image
                    mt={10}
                    source={require('../../assets/watching-a-movie.png')}
                    alt='logo'
                    width={128}
                    height={125}
                />
            </Center>
            <Heading my={10} fontSize={40} fontWeight='bold' color='primary.100' mb={15}>
                Log In
            </Heading>

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

            <HStack
                bgColor='primary.100'
                borderRadius={8}
                width={170}>
                    <Checkbox
                        title='Remember me'
                        value=''/>
            </HStack>
            <Divider
                mt={10}
                bgColor='primary.300' />

            <Center>
                <Heading
                    mt={5}
                    color='primary.100'   
                    fontSize={18}
                    fontWeight='medium' >
                    Or login with social account
                </Heading>
                <HStack
                    mt={4}
                    space={10} >
                        <FontAwesome
                            name='google'
                            size={30}
                            color='black' />
                        <MaterialCommunityIcons
                            name='facebook'
                            size={30}
                            color='black' />
                </HStack>
                <ConfirmationButtonLogIn
                mt={5}
                width={154}
                fontSize={32}
                title='Log in' />

            </Center>

            <Divider
                mt={10}
                bgColor='primary.300' />
            
            <Heading
                mt={4}
                color='primary.100'
                fontSize={16} 
                fontWeight='medium' >
                    Don't have an account yet?
            </Heading>
            <CallButtonSignUp
            onPress={callSignUpScreen}
            mt={2}
            width={78}
            fontSize={16}
            title='Sign Up' />

        </VStack>
    )
}