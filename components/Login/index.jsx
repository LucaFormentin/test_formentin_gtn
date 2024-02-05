'use client'

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material'
import { login } from '@/app/actions'
import { useLoggedUserContext } from '@/app/context/LoggedUserContextProvider'

const LoginFormHeader = () => {
  return (
    <div>
      <header className='flex flex-col items-center justify-center bg-zinc-800 rounded-t-md p-2'>
        <div className='w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center'>
          <LockOutlinedIcon />
        </div>
        <Typography variant='h6'>Sign In</Typography>
      </header>
    </div>
  )
}

const LoginForm = () => {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isPwdVisible, setIsPwdVisible] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { setUser } = useLoggedUserContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { value: emailVal } = emailRef.current
    const { value: passwordVal } = passwordRef.current

    const loginData = { email: emailVal, password: passwordVal }

    try {
      const user = await login(loginData)
      const { id: userId } = user

      setUser(user)

      router.push(`/home/${userId}`)
      toast.success('Login successfull!')
    } catch (error) {
      toast.error(error.message)
      setHasError(true)
    }
  }

  return (
    <div className='w-1/3 flex flex-col'>
      <LoginFormHeader />
      <form className='login-form-container' onSubmit={handleSubmit}>
        <TextField
          inputRef={emailRef}
          required
          variant='outlined'
          label='Email Address'
          fullWidth
          error={hasError}
          helperText={hasError && 'Incorrect email'}
          onChange={() => hasError && setHasError(false)}
        />
        <FormControl variant='outlined' fullWidth required>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            inputRef={passwordRef}
            id='outlined-adornment-password'
            type={isPwdVisible ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setIsPwdVisible(!isPwdVisible)}
                  edge='end'
                >
                  {isPwdVisible ? (
                    <VisibilityOffRounded />
                  ) : (
                    <VisibilityRounded />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
        <FormControlLabel
          className='mr-auto'
          control={<Checkbox />}
          label='Remember me'
        />
        <Button variant='outlined' type='submit'>
          Sign In
        </Button>
        <Link href='#' variant='body2' className='mr-auto hover:cursor-pointer'>
          Forgot password?
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
