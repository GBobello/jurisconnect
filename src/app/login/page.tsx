"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  // const handleSubmit = async (e: React.FormEvent) => {
  //   //     e.preventDefault();
  //   //     try {
  //   //       const result = await signIn("credentials", {
  //   //         email,
  //   //         password,
  //   //         redirect: false,
  //   //       });
  //   //       if (result?.error) {
  //   //         setError("Invalid credentials");
  //   //         return;
  //   //       }
  //   //       router.push("/dashboard");
  //   //     } catch (error) {
  //   //       setError("An error occurred during login");
  //   //     }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Faça login para acessar sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={() => {}}>
          {/* {error && (
            <div className="text-red-500 text-center text-sm">{error}</div>
          )} */}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Endereço de e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Endereço de e-mail"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Link href="/dashboard">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continuar
              </button>
            </Link>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            É advogado?{" "}
            <Link
              href="/login-advogado"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <Link
              href="/cadastro"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Cadastro
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
