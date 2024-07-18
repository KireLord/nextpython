// src/app/ReporteMejoresJugadores.tsx
"use client";

import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { Table, Message, Form, Button, Container, Header, Segment } from 'semantic-ui-react';
import axios from 'axios';

interface Jugador {
  jugador: string;
  puntaje: number;
  fecha_creacion: string;
  videojuegos: string[];
}

export function ReporteMejoresJugadores() {
  const [jugadores, setJugadores] = useState<Jugador[]>([]);
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [error, setError] = useState('');
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null; // Obtén el token desde el almacenamiento local

  const fetchJugadores = useCallback(async () => {
    if (!fechaInicio || !fechaFin) {
      setError("Debe proporcionar las fechas 'fecha_inicio' y 'fecha_fin'");
      return;
    }
    
    const localURL = `http://localhost:8000/api/reporte/mejores-puntajes/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`;
    const deployURL = `https://appweb-django-91343d2b52a9.herokuapp.com/reporte/mejores-puntajes/?fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`;
    const url = process.env.NODE_ENV === 'production' ? deployURL : localURL;

    try {
      const response = await axios.get<Jugador[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Datos recibidos:", response.data); // Log de los datos recibidos
      setJugadores(response.data || []);
      setError('');
    } catch (error) {
      console.error('Error fetching jugadores:', error);
      setJugadores([]);
      setError('Error al obtener los datos');
    }
  }, [fechaInicio, fechaFin, token]);

  const handleFechaInicioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFechaFin(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchJugadores();
  };

  return (
    <Container className="container">
      <Segment>
        <Form onSubmit={handleSubmit} className="centered-form">
          <div className="form-group">
            <Form.Input
              fluid
              label="Fecha Inicio"
              type="date"
              value={fechaInicio}
              onChange={handleFechaInicioChange}
              className="form-input"
            />
            <Form.Input
              fluid
              label="Fecha Fin"
              type="date"
              value={fechaFin}
              onChange={handleFechaFinChange}
              className="form-input"
            />
          </div>
          <Button primary type="submit" className="styled-button">Buscar</Button>
        </Form>
        {error && (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        )}
        {Array.isArray(jugadores) && jugadores.length > 0 ? (
          <div className="table-container">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Jugador</Table.HeaderCell>
                  <Table.HeaderCell>Puntaje</Table.HeaderCell>
                  <Table.HeaderCell>Fecha Creación</Table.HeaderCell>
                  <Table.HeaderCell>Videojuegos</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {jugadores.map((jugador, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{jugador.jugador}</Table.Cell>
                    <Table.Cell>{jugador.puntaje}</Table.Cell>
                    <Table.Cell>{jugador.fecha_creacion}</Table.Cell>
                    <Table.Cell>{jugador.videojuegos.join(', ')}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        ) : (
          <Message warning>
            <Message.Header>No hay datos disponibles</Message.Header>
            <p>Por favor, seleccione otro rango de fechas.</p>
          </Message>
        )}
      </Segment>
    </Container>
  );
}
