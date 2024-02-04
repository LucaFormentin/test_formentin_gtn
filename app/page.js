import LoginForm from '@/components/Login';
import { Typography } from '@mui/material';

const LoginPage = async () => {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center gap-10 p-24'>
      <Typography variant='h4'>Frontend Test Formentin</Typography>
      <LoginForm />
    </main>
  )
}

export default LoginPage