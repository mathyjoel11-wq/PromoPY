import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { promotions } from '../data/promotions';
import PromotionCard from '../components/promotionCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>PromoPY 🇵🇾</Text>
          <Text style={styles.subtitle}>
            Ahorrá más en Paraguay
          </Text>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.greeting}>
            ¡Hola! 👋
          </Text>
          <Text style={styles.description}>
            Descubrí las mejores promociones para vos.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Promociones destacadas
        </Text>

        <View style={styles.promotions}>
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
            />
          ))}
        </View>

        <Text style={styles.footer}>
          PromoPY · Una iniciativa de MJ Software
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
  },
  header: {
    backgroundColor: '#176B45',
    paddingTop: 55,
    paddingBottom: 28,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#D7EBDD',
    fontSize: 13,
    marginTop: 5,
  },
  welcome: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 22,
  },
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#202820',
  },
  description: {
    color: '#778078',
    fontSize: 14,
    marginTop: 7,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#202820',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  promotions: {
    paddingHorizontal: 18,
  },
  footer: {
    textAlign: 'center',
    color: '#929B93',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 25,
  },
});