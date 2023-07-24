import { Link } from 'react-router-dom';

const HomePage = () => (
    <div className='container'>
        <div className='jumbotron mt-5'>
            <h1 className='display-4'>Bem Vindo!</h1>
            <p className='lead'>Este é um sistema de autenticação incrível com características de nível de produção!</p>
            <hr className='my-4' />
            <p>Clicke no botao para fazer Log In</p>
            <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
        </div>
    </div>
);

export default HomePage;