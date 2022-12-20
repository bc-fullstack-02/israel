import { Link } from 'react-router-dom';
import Text from '../Text/index';
import amazim from '../../assets/amazim.png';
import { TextInput } from '../TextInput/index';
import { User } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import Button from '../Button/index';


interface AuthFormProps {
    formTitle: string;
    submitFormButtonText: string;
    submitFormButtonAction: (user: string, password: string) => void;
    linkDescription: string;
    routeName: string;
}

function AuthForm({
    formTitle,
    submitFormButtonText,
    submitFormButtonAction,
    linkDescription,
    routeName,
}: AuthFormProps) {
    function handleSubmit(event: FormEvent) {
        console.log('dentro')
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        submitFormButtonAction(
            form.elements.user.value,
            form.elements.password.value
        );
    }
    return (
        <div>
            <div className="text-green-600 flex flex-col items-center mt-16">
                <header className='flex flex-col items-center'>
                    <img src={ amazim } width="200" alt="Logo" />
                    <Text className='text-green-400'>{formTitle}</Text>
                </header>

                <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
                    <label htmlFor="user" className='flex flex-col gap-2'>
                        <Text>Digite o e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <User />
                            </TextInput.Icon>
                            <TextInput.Input
                                id='user'
                                type='text'
                                placeholder='Digite seu login'
                            />
                        </TextInput.Root>
                    </label>
                    <label htmlFor="password" className='flex flex-col gap-2'>
                        <Text>Senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>
                            <TextInput.Input
                                id='password'
                                type='password'
                                placeholder='*******'
                            />
                        </TextInput.Root>
                    </label>

                    <Button type='submit' className='mt-4'>{submitFormButtonText}</Button>
                </form>


                <footer className='flex-col items-center gap-4 mt-8'>
                    < Text asChild size='sm'>
                        < Link to={routeName} className='text-green-500 underline hover:text-orange-350'
                        >
                            {linkDescription}
                        </ Link>
                    </Text>
                </footer>
            </div>
        </div >
    );
}

export default AuthForm;