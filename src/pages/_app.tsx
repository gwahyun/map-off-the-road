import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import * as NavBar from "@/components/NavBar";
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <NavBar.Container>
    <NavBar.Item>
        <Link href="/info">info</Link>
      </NavBar.Item>
      <NavBar.Item>
        <Link href="/news">news</Link>
      </NavBar.Item>
    </NavBar.Container>
    <Component {...pageProps} />
  </div>
}
