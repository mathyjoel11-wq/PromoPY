
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mi perfil 👤</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>

        <Text style={styles.name}>Usuario PromoPY</Text>
        <Text style={styles.email}>usuario@promopy.com</Text>

        <Text style={styles.member}>Miembro de PromoPY 🇵🇾</Text>
      </View>

      <Text style={styles.sectionTitle}>Mi cuenta</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>❤️</Text>
        <Text style={styles.optionText}>Mis promociones favoritas</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>💳</Text>
        <Text style={styles.optionText}>Mis bancos y tarjetas</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>🔔</Text>
        <Text style={styles.optionText}>Notificaciones</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionIcon}>⚙️</Text>
        <Text style={styles.optionText}>Configuración</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        PromoPY v1.0.0{"\n"}
        Desarrollado por MJ Software
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#202820',
    marginBottom: 25,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#176B45',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#202820',
  },
  email: {
    fontSize: 13,
    color: '#778078',
    marginTop: 5,
  },
  member: {
    color: '#176B45',
    fontSize: 12,
    marginTop: 15,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202820',
    marginBottom: 15,
  },
  option: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 13,
  },
  optionText: {
    flex: 1,
    fontSize: 14,
    color: '#344238',
  },
  arrow: {
    fontSize: 23,
    color: '#929B93',
  },
  footer: {
    textAlign: 'center',
    color: '#929B93',
    fontSize: 12,
    marginTop: 30,
    marginBottom: 35,
    lineHeight: 20,
  },
});
