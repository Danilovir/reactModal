import{ useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { ActionModal } from './src/ActionModal'

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sujeito Programador!</Text>
      
      <TouchableOpacity style={styles.button} onPress={ () => setVisibleModal(true) }>
        <Text>Open</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={ () => setVisibleModal(false) }
        animationType="slide"
      >
       
        <ActionModal
        handleClose={ () => setVisibleModal(false) }
        handleEdit={ () => alert("clicou no editar") }
        handleDelete={ () => alert("Clicou no excluir") }
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12131B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  button:{
    backgroundColor: '#FFF',
    padding: 4,
    marginVertical: 8,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,

  }

});
