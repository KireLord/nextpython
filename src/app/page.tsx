// src/app/page.tsx
"use client";

import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { ReporteMejoresJugadores } from './ReporteMejoresJugadores';
import AnimatedBackground from './AnimatedBackground';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <AnimatedBackground />
      <Container className="animated-container" style={{ position: 'relative', zIndex: 1 }}>
        <Header as="h1" className="header">Reporte de Mejores Jugadores</Header>
        <ReporteMejoresJugadores />
      </Container>
    </div>
  );
}
