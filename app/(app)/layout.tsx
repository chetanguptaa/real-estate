'use client'

import { NavBar } from '@/components/nav-bar'
import {
  RecoilRoot,
} from 'recoil';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <NavBar />
      <main className="h-full">{children}</main>
    </RecoilRoot>
  )
}