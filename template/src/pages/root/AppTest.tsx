import TextButton from 'src/components/common/TextButton';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface AppTestProps {
  setDevForm: (value: boolean) => void;
}

const AppTest: FC<AppTestProps> = ({setDevForm}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextButton
        style={styles.buttonStyle}
        textProps={{
          style: styles.buttonTextStyle,
        }}
        testID="AppStartButton"
        onPress={() => setDevForm(false)}>
        정상흐름으로 시작
      </TextButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '100%',
    height: 48,
    backgroundColor: '#3A86F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default React.memo(AppTest);
