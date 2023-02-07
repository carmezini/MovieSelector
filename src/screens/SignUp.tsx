import { VStack, Heading, Center, Image, HStack } from 'native-base';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';


export function SignUp() {
  return (
    <VStack bgColor="white" flex={1} px={10}>
        <Center>
            <Image
                mt={10}
                source={require('../../assets/watching-a-movie.png')}
                alt='logo'
                width={128}
                height={125}
            />
        </Center>
        <Heading my={24} fontSize={40} fontWeight='bold' color='#4D54E5' mb={15}>
            SignUp
        </Heading>

        <Input placeholder='Full Name' borderRadius={8} />
        <Input placeholder='E-mail' borderRadius={8} />
        <Input placeholder='Password' borderRadius={8} />
        <Input placeholder='Repeat Password' borderRadius={8} />
        <HStack bgColor='#4D54E5' borderRadius={8} width={170} >
            <Checkbox title='Remember me' value=''/>
        </HStack>
        <Center>
            <Button title='Sign Up'/>
        </Center>
        
    </VStack>
  );
}

