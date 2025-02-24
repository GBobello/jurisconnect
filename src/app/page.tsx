import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center">
          <Link className="flex items-center" href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="ml-2 text-xl font-bold text-cyan-600">
              Jurisconnect
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
            <Link href="/login">Entrar</Link>
          </button>
          <button className="px-4 py-2 ml-2 text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
            <Link href="/cadastro">Cadastrar</Link>
          </button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Jurisconnect</h1>
        <p className="text-lg">A conexão entre advogados e clientes.</p>

        <div className="mt-8">
          <Image
            src="/imagem-balanca.jpg"
            alt="Balança da Justiça"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-12 text-center max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">
            Transformando a Advocacia Digital
          </h2>
          <p className="text-gray-600 mb-8">
            O Jurisconnect é uma plataforma inovadora que revoluciona a forma
            como advogados e clientes se conectam. Oferecemos uma solução
            completa para profissionais do direito expandirem sua presença
            digital e para cidadãos encontrarem o suporte jurídico ideal para
            suas necessidades. Com ferramentas intuitivas e interface moderna,
            facilitamos o acesso à justiça e o crescimento profissional.
          </p>
        </div>
      </div>
      <footer className="w-full bg-gray-100 mt-16 p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>Email: contato@jurisconnect.com</p>
            <p>Tel: (11) 1234-5678</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul>
              <li>
                <Link
                  href="/sobre"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-cyan-600 hover:text-cyan-700">
                LinkedIn
              </Link>
              <Link href="#" className="text-cyan-600 hover:text-cyan-700">
                Twitter
              </Link>
              <Link href="#" className="text-cyan-600 hover:text-cyan-700">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p>© 2025 Jurisconnect. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
