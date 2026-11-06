
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { promotions } from '../data/promotions';
import PromotionCard from '../components/promotionCard';

export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const filteredPromotions = promotions.filter((promotion) => {
    const searchableText = [
      promotion.store,
      promotion.category,
      promotion.bank,
      promotion.day,
      promotion.description,
      ...promotion.products,
    ].join(' ').toLowerCase();

    return searchableText.includes(search.toLowerCase().trim());
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar promociones 🔎</Text>

      <Text style={styles.subtitle}>
        Encontrá descuentos por producto, comercio o banco.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Ej: pañales, farmacia, alimentos..."
        placeholderTextColor="#929B93"
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.results}>
        {filteredPromotions.length} promociones encontradas
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredPromotions.length > 0 ? (
          filteredPromotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
              promotion={promotion}
            />
          ))
        ) : (
          <Text style={styles.empty}>
            No encontramos promociones con esa búsqueda.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F5',
    paddingHorizontal: 18,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#202820',
  },
  subtitle: {
    fontSize: 14,
    color: '#778078',
    marginTop: 8,
    marginBottom: 22,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1EAE2',
    borderRadius: 14,
    padding: 15,
    fontSize: 14,
    color: '#202820',
  },
  results: {
    fontSize: 13,
    color: '#176B45',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 14,
  },
  empty: {
    textAlign: 'center',
    color: '#778078',
    marginTop: 40,
    fontSize: 14,
  },
});
