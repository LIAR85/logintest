'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) {
      setIsAuthenticated(true)
    } else {
      router.push('/login')
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

