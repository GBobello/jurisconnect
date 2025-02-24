"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";

export default function DashboardAdvogados() {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [clientes] = useState([
    {
      id: 1,
      nome: "Maria Silva",
      email: "maria.silva@email.com",
      telefone: "(11) 98765-4321",
      caso: "Direito Trabalhista",
      status: "Pendente",
      dataCadastro: "2024-01-15",
      descricao: "Processo trabalhista relacionado a horas extras não pagas",
    },
    {
      id: 2,
      nome: "Carlos Souza",
      email: "carlos.souza@email.com",
      telefone: "(21) 97654-3210",
      caso: "Direito Civil",
      status: "Em Andamento",
      dataCadastro: "2024-02-10",
      descricao: "Ação de cobrança por inadimplência contratual",
    },
    {
      id: 3,
      nome: "Fernanda Oliveira",
      email: "fernanda.oliveira@email.com",
      telefone: "(31) 98547-6589",
      caso: "Direito de Família",
      status: "Finalizado",
      dataCadastro: "2023-12-05",
      descricao: "Divórcio litigioso com partilha de bens",
    },
    {
      id: 4,
      nome: "João Pereira",
      email: "joao.pereira@email.com",
      telefone: "(41) 99856-7412",
      caso: "Direito Penal",
      status: "Pendente",
      dataCadastro: "2024-03-20",
      descricao: "Defesa em processo criminal por lesão corporal",
    },
    {
      id: 5,
      nome: "Ana Martins",
      email: "ana.martins@email.com",
      telefone: "(51) 98721-3654",
      caso: "Direito do Consumidor",
      status: "Em Andamento",
      dataCadastro: "2024-01-30",
      descricao: "Reclamação por produto defeituoso sem troca ou reembolso",
    },
  ]);

  const handleOpenModal = (cliente) => {
    setSelectedClient(cliente);
    setIsModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <Link className="flex items-center" href="/dashboard-advogados">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="ml-2 text-xl font-bold text-cyan-600">
              Jurisconnect
            </h1>
          </Link>
        </div>
        {/* <div className="flex items-center">
          <button className="px-4 py-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
            Entrar
          </button>
          <button className="px-4 py-2 ml-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
            Cadastrar
          </button>
        </div> */}
      </nav>
      <div className="container mx-auto p-6">
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{clientes.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos Pendentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {clientes.filter((c) => c.status === "Pendente").length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Novos Hoje</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clientes Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Caso</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Mais informações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientes.map((cliente) => (
                  <TableRow key={cliente.id}>
                    <TableCell>{cliente.nome}</TableCell>
                    <TableCell>{cliente.email}</TableCell>
                    <TableCell>{cliente.telefone}</TableCell>
                    <TableCell>{cliente.caso}</TableCell>
                    <TableCell>{cliente.status}</TableCell>
                    <TableCell>
                      {new Date(cliente.dataCadastro).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenModal(cliente)}
                      >
                        Ler mais...
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Detalhes do Caso</DialogTitle>
            </DialogHeader>
            {selectedClient && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <h4 className="font-semibold">Cliente:</h4>
                  <span className="col-span-3">{selectedClient.nome}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <h4 className="font-semibold">Telefone:</h4>
                  <span className="col-span-3">{selectedClient.telefone}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <h4 className="font-semibold">E-mail:</h4>
                  <span className="col-span-3">{selectedClient.email}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <h4 className="font-semibold">Caso:</h4>
                  <span className="col-span-3">{selectedClient.caso}</span>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <h4 className="font-semibold">Descrição:</h4>
                  <span className="col-span-3">{selectedClient.descricao}</span>
                </div>{" "}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
