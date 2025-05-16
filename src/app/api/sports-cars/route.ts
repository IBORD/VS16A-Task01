import { NextResponse } from 'next/server'
import cars from '../../data/sportCars.json'

export async function GET() {
  return NextResponse.json(cars)
}