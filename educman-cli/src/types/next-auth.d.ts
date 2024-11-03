import NextAuth from "next-auth"

declare module 'next-auth' {
  interface Session {
    pkUser: string
    name: string
    surname: string
    nri: string
    profile: string
    email: string
    fkPer: string
    fkLic: string
  }
}
