import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';

import { tmdbImageUrl } from '../../commons/configs';

const ContentCard = ({ listData, name, fetchIndividualData }) => {
  return (
    <Box
      marginY={2}
      marginX={4}
      borderBottomColor="#808080"
      borderBottomWidth="1"
      paddingBottom={5}
    >
      <HStack space={2}>
        <AspectRatio w="30%" ratio={1}>
          <Image
            source={{
              uri: tmdbImageUrl + '' + listData.poster_path,
            }}
            alt={`${listData.title} poster`}
          />
        </AspectRatio>
        <VStack flex={1}>
          <Text fontWeight="bold">{name}</Text>
          <Text>Popularity: {listData.popularity}</Text>
          <Text>Release Date: {listData.release_date}</Text>
          <Button
            bg="#008080"
            width="80%"
            onPress={() => fetchIndividualData(listData, name)}
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ContentCard;
