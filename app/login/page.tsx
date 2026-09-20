'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginForm() {
  const router = useRouter()
  const params = useSearchParams()
  const next = params.get('next') || '/'

  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push(next)
        router.refresh()
      } else {
        setError('Қате пароль / Неверный пароль')
      }
    } catch {
      setError('Қате шықты, қайталап көріңіз / Произошла ошибка, попробуйте ещё раз')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-icon">🔒</div>
        <h1 className="login-title">Мақтаарал ауданы</h1>
        <p className="login-subtitle">Кіру үшін парольді енгізіңіз / Введите пароль для входа</p>

        <input
          type="password"
          className="login-input"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-button" disabled={loading || !password}>
          {loading ? 'Тексерілуде...' : 'Кіру'}
        </button>
      </form>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  )
}
