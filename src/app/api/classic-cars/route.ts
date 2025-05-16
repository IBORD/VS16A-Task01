import { NextResponse } from 'next/server'
import cars from '../../data/classicCars.json'

export async function GET() {
  return NextResponse.json(cars)
}