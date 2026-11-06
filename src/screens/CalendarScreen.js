import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import { promotions } from '../data/promotions';
import PromotionCard from "../components/promotionCard";

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

export default function CalendarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario 📅</Text>

      <Text style={styles.subtitle}>
        Organizá tus compras según los días de descuento.
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {days.map((day) => {
          const dayPromotions = promotions.filter(
            (promotion) => promotion.day === day
          );

          return (
            <View key={day} style={styles.daySection}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayTitle}>{day}</Text>

                <Text style={styles.count}>
                  {dayPromotions.length} promociones
                </Text>
              </View>

              {dayPromotions.length > 0 ? (
                dayPromotions.map((promotion) => (
                  <PromotionCard
                    key={promotion.id}
                    promotion={promotion}
                  />
                ))
              ) : (
                <Text style={styles.empty}>
                  Sin promociones cargadas.
                </Text>
              )}
            </View>
          );
        })}
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
    marginBottom: 25,
  },
  daySection: {
    marginBottom: 22,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#176B45',
  },
  count: {
    fontSize: 12,
    color: '#778078',
  },
  empty: {
    color: '#929B93',
    fontSize: 13,
    paddingVertical: 12,
  },
});