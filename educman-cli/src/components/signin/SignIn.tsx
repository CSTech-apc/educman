'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

import { FormEvent, useState } from "react"

export default function SignIn() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace('/pages/dashboard')

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
      <input
        type="text"
        id='email'
        placeholder='Digite seu email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="pass">Palavra chave</label>
      <input
        type="password"
        id='pass'
        placeholder='Digite a palavra chave'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  )
}
