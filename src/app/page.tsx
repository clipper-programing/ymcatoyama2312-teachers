import Image from 'next/image'
import Header from '@/components/header'
import Timeline from '@/components/timeline'
import HanedaEticket from '@/components/hanedaEticket'
import KixEticket from '@/components/kixEticket'
import hkgEticket from '@/components/hkgEticket'

export default function Home() {
  return (
    <main className="">
      <Header />

      <HanedaEticket />
      <KixEticket />
      
    </main>
  )
}
