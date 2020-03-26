import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';

import logoImg from './../../assets/logo.png';

export default function Details() {
    const navigation = useNavigation(),
        route = useRoute(),
        incident = route.params.incident,
        message = `
            Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(incident.value)}`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail(email, title) {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${title}`,
            recipients: [email],
            body: message
        });
    }

    function sendWhatsapp(phone, message = message) {
        Linking.openURL(`whatsapp://send?phone=${phone}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#e02041' />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(incident.value)}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato!</Text>
                <View style={styles.actions}>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => sendWhatsapp(incident.whatsapp)}
                    >
                        <Text style={styles.actionText}>WhatssApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.action}
                        onPress={() => sendMail(incident.email, incident.title)}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};