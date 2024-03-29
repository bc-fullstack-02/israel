import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import api from '../../services/api';

function SignUp() {
    const navigate = useNavigate()

    async function handleRegister(user: string, password: string) {
        try {
            await api.post('/security/register', {
                user,
                password,
            })
            navigate('/')
        } catch (err) {
            alert('Erro na criação do usuário.')
        }
    }

    return (
        <AuthForm
            formTitle='Faça o cadastro e comece a usar!'
            submitFormButtonText='Cadastrar'
            submitFormButtonAction={handleRegister}
            linkDescription='Já possui conta? Crie uma agora!'
            routeName='/'
        />
    );
}

export default SignUp;