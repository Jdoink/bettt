import { NextResponse } from 'next/server'

export async function GET() {
  const response = await fetch(
    'https://overtimemarketsv2.xyz/networks/10/markets?type=moneyline&status=open'
  )
  const markets = await response.json()
  return NextResponse.json(markets[Math.floor(Math.random() * markets.length)])
}
