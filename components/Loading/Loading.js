import { Spinner, HStack, Heading, Center } from 'native-base';

const Loading = () => {
  return (
    <Center flex={1} px="3">
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};

export default Loading;
