import React from 'react';
import Button from '@/components/Button';
import HomeWrapper from './_components/HomeWrapper';

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-5rem)] flex-col items-center justify-between bg-backgroundPrimary">
      <HomeWrapper />
    </main>
  )
}
