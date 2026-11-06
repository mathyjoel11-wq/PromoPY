import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PromotionCard({ promotion }) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.category}>
          {promotion.category}
        </Text>

        <Text style={styles.discount}>
          {promotion.discount}
        </Text>
      </View>

      <Text style={styles.store}>
        {promotion.store}
      </Text>

      <Text style={styles.bank}>
        🏦 {promotion.bank}
      </Text>

      <Text style={styles.day}>
        📅 {promotion.day}
      </Text>

      <Text style={styles.description}>
        {promotion.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E5EDE7',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  category: {
    color: '#176B45',
    fontSize: 12,
    fontWeight: '600',
  },
  discount: {
    backgroundColor: '#E8F5EC',
    color: '#176B45',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    overflow: 'hidden',
  },
  store: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#202820',
    marginBottom: 9,
  },
  bank: {
    fontSize: 14,
    color: '#59665C',
    marginBottom: 7,
  },
  day: {
    fontSize: 14,
    color: '#59665C',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#778078',
    lineHeight: 19,
  },
});