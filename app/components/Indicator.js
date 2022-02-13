import React from 'react';
import {Modal, StyleSheet, View, ActivityIndicator, Dimensions} from 'react-native';

const Width = Dimensions.get('window').height;

const Indicator = ({visible = false}) => {
  if (!visible) return null;
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActivityIndicator color="white" size="large" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    top: Width / 2.5,
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
});

export default Indicator;
