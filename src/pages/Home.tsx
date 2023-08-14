import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="flex h-screen justify-center items-center">
    <div className="bg-white shadow-md rounded-lg p-8 text-black">
      <h1 className="text-4xl font-bold mb-4">Bem Vindo!</h1>
      <p className="text-xl mb-6">
        Este é um sistema de consumo da API{' '}
        <a
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          rickandmorty
        </a>{' '}
        com um sistema de login e autenticação com Djoser!
      </p>
      <hr className="my-6" />
      <p className="text-lg mb-4">Clique no botão para fazer login</p>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
      >
        Login
      </Link>
    </div>
  </div>
);

export default HomePage;
