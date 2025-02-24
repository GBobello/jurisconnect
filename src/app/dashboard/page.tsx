"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-context-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const lawyers = [
  {
    id: 1,
    name: "Dra. Maria Silva",
    specialty: "Direito Civil",
    rating: 4.8,
    cases: 150,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    oab: "123456",
  },
  {
    id: 2,
    name: "Dr. João Santos",
    specialty: "Direito Trabalhista",
    rating: 4.9,
    cases: 200,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    oab: "789012",
  },
  {
    id: 3,
    name: "Dra. Ana Oliveira",
    specialty: "Direito Penal",
    rating: 4.7,
    cases: 180,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    oab: "345678",
  },
];

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <Link className="flex items-center" href="/dashboard">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
            <Card key={lawyer.id} className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={lawyer.image} alt={lawyer.name} />
                  <AvatarFallback>{lawyer.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{lawyer.name}</h2>
                  <p className="text-gray-500">OAB: {lawyer.oab}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  Especialidade: {lawyer.specialty}
                </p>
                <p className="text-gray-600">Avaliação: {lawyer.rating}/5.0</p>
                <p className="text-gray-600">Casos atendidos: {lawyer.cases}</p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Entrar em Contato
              </button>
            </Card>
          ))}
        </div>

        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-full shadow-lg flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Registrar Relato
          </button>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Registrar Novo Relato</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva sua experiência em detalhes"
                  className="h-32"
                />
              </div>
              <div className="grid gap-2">
                <Label>Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="trabalhista">Trabalhista</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" onClick={() => setIsOpen(false)}>
                Publicar Relato
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
