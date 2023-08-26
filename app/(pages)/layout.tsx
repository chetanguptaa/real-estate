'use client'

import {
  RecoilRoot,
} from 'recoil';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <main className="h-full">{children}</main>
    </RecoilRoot>
  )
}