import React, {useState} from 'react';
import {View,Text, Platform} from 'react-native';
import {Button, Item, Form} from 'native-base'
import DateTimePicker from '@react-native-community/datetimepicker';

const Date_time_picker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === 'ios' ? true : false);
  };

  const showMode = currentMode => {  
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <Form>
      <Item>
        <Button block transparent onPress={showDatepicker} style={{justifyContent:'center'}} title="Show date picker!"><Text style={{color:'#6a0582'}}>Date</Text></Button>
      </Item>
      <Item>
        <Button block transparent onPress={showTimepicker} style={{justifyContent:'center'}} title="Show date picker!"><Text style={{color:'#6a0582'}}>Time</Text></Button>
      </Item>
      </Form>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Date_time_picker;