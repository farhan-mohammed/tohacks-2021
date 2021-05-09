import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        padding: 20,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    h1: {
        fontWeight: 800,
        fontSize: 30,
        lineHeight: 1.2,
    },
    h2: {
        fontWeight: 800,
        fontSize: 25,
        lineHeight: 1.2,
    },
    p: {
        fontSize: 20,
        lineHeight: 1.2,
    },
});

// Create Document Component
export default class MyDocument extends React.Component {
    render() {
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    {this.props.items.map((i) => (
                        <View style={styles[i.type]}>
                            <Text>{i.content}</Text>
                        </View>
                    ))}
                </Page>
            </Document>
        );
    }
}
