import { useEffect, useState } from 'react';
import {
  Center,
  FlatList,
  VStack,
  HStack,
  Heading,
  Input,
  FormControl,
  Button,
} from 'native-base';
import { View, Text } from 'react-native';
import SelectBox from '../SelectBox/SelectBox';
import { getData } from '../../commons/api';
import Loading from '../Loading/Loading';
import ContentCard from '../ContentCard/ContentCard';

export default function SearchResults({ navigation }) {
  const [contentType, setContentType] = useState('multi');
  const [userSearch, setUserSearch] = useState('');
  const [contentData, setContentData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const options = [
    {
      title: 'Multi',
      value: 'multi',
    },
    {
      title: 'Movie',
      value: 'movie',
    },
    {
      title: 'Tv',
      value: 'tv',
    },
  ];

  const fetchMovies = () => {
    setisLoading(true);
    getData(`search/${contentType}?query=${userSearch}`)
      .then((resp) => {
        setContentData(resp.results);
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const updateContentType = (item) => {
    setContentType(item);
  };

  const fetchIndContentData = (data, name) => {
    let type = data.media_type;
    let id = data.id;
    navigation.navigate('View Details', { name, id, type });
  };

  return (
    <VStack space={4} flex={1}>
      <Center mt={6}>
        <FormControl w="75%" maxW="300px">
          <FormControl.Label>Search Movie/TV Show Name *</FormControl.Label>
          <Input
            placeholder="James Bond"
            onChangeText={(newText) => setUserSearch(newText)}
          />
        </FormControl>
      </Center>
      <Center>
        <Text fontWeight="bold">Choose Search Type *</Text>
      </Center>
      <HStack space={3} justifyContent="center">
        <Center>
          <SelectBox
            selectedOption={contentType}
            options={options}
            pressAction={updateContentType}
            width={'200'}
          />
        </Center>
        <Center>
          <Button size="lg" onPress={() => fetchMovies()}>
            Search
          </Button>
        </Center>
      </HStack>
      {isLoading ? (
        <Loading />
      ) : contentData.length > 0 ? (
        <FlatList
          data={contentData}
          renderItem={({ item }) => (
            <ContentCard
              listData={item}
              fetchIndividualData={fetchIndContentData}
              name={item.title}
            />
          )}
        ></FlatList>
      ) : (
        <Center flex={1} px="3">
          <HStack space={2} justifyContent="center">
            <Heading>Please initiate new search</Heading>
          </HStack>
        </Center>
      )}
    </VStack>
  );
}
