import Image from 'next/image'
import App from '../components/App';

export default function Home() {
  return (
    <main>
      <App />
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
