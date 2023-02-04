import { useEffect, useState } from 'react';
import { Center, FlatList, VStack, HStack, Heading } from 'native-base';
import ContentCard from '../ContentCard/ContentCard';
import SelectBox from '../SelectBox/SelectBox';
import Loading from '../Loading/Loading';
import { getData } from '../../commons/api';
import axios from 'axios';

export default function TvShows({ navigation }) {
  const [tvShowsOption, settvShowsOption] = useState('popular');
  const [isLoading, setisLoading] = useState(false);
  const [tvShowData, settvShowData] = useState([]);
  const options = [
    {
      title: 'Popular',
      value: 'popular',
    },
    {
      title: 'On the air',
      value: 'on_the_air',
    },
    {
      title: 'Top Rated',
      value: 'top_rated',
    },
    {
      title: 'Airing Today',
      value: 'airing_today',
    },
  ];

  const fetchTvShows = async (option) => {
    settvShowsOption(option);
    getData(`tv/${option}`).then((resp) => {
      settvShowData(resp.results);
      setisLoading(false);
    });
  };

  const fetchIndTvData = (data, name) => {
    //navigation.navigate(ContentDetails);
    let type = 'tv';
    let id = data.id;
    navigation.navigate('View Details', { name, id, type });
  };

  useEffect(() => {
    setisLoading(true);
    fetchTvShows(tvShowsOption);
  }, []);
  return (
    <VStack space={4} flex={1}>
      <Center mt={6}>
        <SelectBox
          selectedOption={tvShowsOption}
          options={options}
          pressAction={fetchTvShows}
          width={'250'}
        />
      </Center>
      {isLoading ? (
        <Loading />
      ) : tvShowData.length > 0 ? (
        <FlatList
          data={tvShowData}
          renderItem={({ item }) => (
            <ContentCard
              listData={item}
              name={item.name}
              fetchIndividualData={fetchIndTvData}
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
