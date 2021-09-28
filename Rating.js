import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const Rating = () => {
  const [defaultValue, setDefaultValue] = React.useState(2);
  const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);

  const fillerStar =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const emptyStar =
    'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';

  const RatingStar = () => {
    return (
      <View style={styles.ratingContainer}>
        {maxRating.map((item, index) => {
          return (
            <TouchableOpacity key={item} onPress={() => setDefaultValue(item)}>
              <Image
                style={styles.star}
                source={
                  item <= defaultValue ? {uri: fillerStar} : {uri: emptyStar}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.font]}>Select Your Rating</Text>
      <RatingStar />
      <Text
        style={[styles.font]}>{`${defaultValue} / ${maxRating.length}`}</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => alert(`Rating is ${defaultValue}`)}>
          <Text style={[styles.font]}>Get Rating Value</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  font: {
    fontSize: 18,
  },
  button: {
    height: 40,
    width: width - 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  star: {
    height: 40,
    width: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
