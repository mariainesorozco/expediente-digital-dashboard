"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Briefcase, Home, Clock, Calendar, Users, CreditCard, DollarSign } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import InfoItem from './InfoItem';

const DatosLaboralesContent = () => {
  return (
    <div className="grid gap-4 md:gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight hidden md:block">Datos Laborales</h2>
        <Button size="sm">Editar</Button>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Información Básica</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <InfoItem icon={Database} label="Número de trabajador" value="000000" />
              <InfoItem icon={Database} label="Número de plaza" value="00000" />
              <InfoItem icon={Calendar} label="Fecha de ingreso" value="DD/MM/AAAA" />
              <InfoItem icon={Briefcase} label="Tipo de empleado" value="Base/Contrato/Jubilado" />
              <InfoItem icon={Briefcase} label="Clasificación" value="Académico/Administrativo/Directivo" />
              <InfoItem icon={Briefcase} label="Estatus" value="Activo" />
              <InfoItem icon={Users} label="Sindicato" value="SETUAN/SPAUAN/No aplica" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Adscripción y Puesto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <InfoItem icon={Home} label="Adscripción" value="Nombre del departamento" />
              <InfoItem icon={Briefcase} label="Puesto" value="Nombre del puesto" />
              <InfoItem icon={Clock} label="Horario" value="Tiempo Completo/Medio Tiempo/etc." />
              <InfoItem icon={Database} label="Categoría tabulador" value="Nivel correspondiente" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Datos para pago</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <InfoItem icon={CreditCard} label="Banco" value="Nombre del banco" />
              <InfoItem icon={CreditCard} label="Clabe interbancaria" value="000000000000000000" />
              <InfoItem icon={DollarSign} label="Tipo de cuenta" value="Débito/Nómina/etc." />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Historial de Plazas</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <div className="min-w-[600px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plaza</TableHead>
                    <TableHead>Puesto</TableHead>
                    <TableHead>Adscripción</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Estatus</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">00000</TableCell>
                    <TableCell>Nombre del puesto</TableCell>
                    <TableCell>Nombre de la adscripción</TableCell>
                    <TableCell>Administrativo</TableCell>
                    <TableCell>01/01/2020 - Actual</TableCell>
                    <TableCell>
                      <Badge className="bg-green-500">Activo</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DatosLaboralesContent;