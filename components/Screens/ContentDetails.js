import { Box, Center, Heading, VStack, Image, Text, View } from 'native-base';
import { useEffect, useState } from 'react';
import { getData } from '../../commons/api';
import { tmdbImageUrl } from '../../commons/configs';

export default function ContentDetails({ navigation, route }) {
  const { id, type } = route.params;
  const [isLoading, setisLoading] = useState(false);
  const [contentData, setContentData] = useState([]);
  const [alt, setAlt] = useState('');

  const fetchData = (url) => {
    getData(`${url}`).then((resp) => {
      setContentData(resp);
      setisLoading(false);
    });
  };

  useEffect(() => {
    let url =
      type === 'movie'
        ? `movie/${id}`
        : type === 'tv'
        ? `tv/${id}`
        : `multi/${id}`;
    setisLoading(true);
    fetchData(url);
  }, []);

  return (
    <View>
      <Box width="100%">
        <Center>
          <VStack>
            <Center mb="2">
              <Image
                size="2xl"
                source={{
                  uri: tmdbImageUrl + '/' + contentData.poster_path,
                }}
                alt={`${
                  type === 'movie'
                    ? contentData.title
                    : type === 'tv'
                    ? contentData.name
                    : ''
                }poster`}
              />
            </Center>
            <Heading mb="2" size="md">
              {type === 'movie'
                ? contentData.title
                : type === 'tv'
                ? contentData.name
                : ''}
            </Heading>
            <Text>{contentData.overview}</Text>
            <Text>
              Popularity: {contentData.popularity} | Release Date:{' '}
              {contentData.release_date}
            </Text>
          </VStack>
        </Center>
      </Box>
    </View>
  );
}
