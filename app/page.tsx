import React from 'react';
import HomeWrapper from './_components/HomeWrapper';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanskar.me',
  description: 'Got an interesting design and less time to build? Reach me out today and make your dream project live!',
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-backgroundPrimary">
      <HomeWrapper />
    </main>
  )
}
