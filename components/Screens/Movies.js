import { useEffect, useState } from 'react';
import { Center, FlatList, VStack, HStack, Heading } from 'native-base';
import ContentCard from '../ContentCard/ContentCard';
import SelectBox from '../SelectBox/SelectBox';
import Loading from '../Loading/Loading';
import { getData } from '../../commons/api';

export default function Movies({ navigation }) {
  const [movieOption, setMovieOption] = useState('popular');
  const [isLoading, setisLoading] = useState(false);
  const [movieData, setMovieData] = useState([]);
  const options = [
    {
      title: 'Popular',
      value: 'popular',
    },
    {
      title: 'Now Playing',
      value: 'now_playing',
    },
    {
      title: 'Top Rated',
      value: 'top_rated',
    },
    {
      title: 'Upcoming',
      value: 'upcoming',
    },
  ];

  const fetchMovies = (option) => {
    setMovieOption(option);
    getData(`movie/${option}`).then((resp) => {
      setMovieData(resp.results);
      setisLoading(false);
    });
  };

  const fetchIndMovieData = (data, name) => {
    //navigation.navigate(ContentDetails);
    let type = 'movie';
    let id = data.id;
    navigation.navigate('View Details', { name, id, type });
  };

  useEffect(() => {
    setisLoading(true);
    fetchMovies(movieOption);
  }, []);
  return (
    <VStack space={4} flex={1}>
      <Center mt={6}>
        <SelectBox
          selectedOption={movieOption}
          options={options}
          pressAction={fetchMovies}
          width={'250'}
        />
      </Center>
      {isLoading ? (
        <Loading />
      ) : movieData.length > 0 ? (
        <FlatList
          data={movieData}
          renderItem={({ item }) => (
            <ContentCard
              listData={item}
              fetchIndividualData={fetchIndMovieData}
              name={item.title}
            />
          )}
        ></FlatList>
      ) : (
        <Center flex={1} px="3">
          <HStack space={2} justifyContent="center">
            <Heading>No results found</Heading>
          </HStack>
        </Center>
      )}
    </VStack>
  );
}
