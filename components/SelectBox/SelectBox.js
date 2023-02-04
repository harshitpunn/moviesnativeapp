import { Select } from 'native-base';

const SelectBox = ({ options, selectedOption, pressAction, width }) => {
  return (
    <Select
      minWidth={width}
      onValueChange={(itemValue) => pressAction(itemValue)}
      selectedValue={selectedOption}
    >
      {options.map((optionsData, index) => (
        <Select.Item
          key={index}
          label={optionsData.title}
          value={optionsData.value}
        />
      ))}
    </Select>
  );
};

export default SelectBox;
