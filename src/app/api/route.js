import { NextRequest, NextResponse } from "next/server";

let jerseys = [
  {
    nome: 'Chicago Bulls',
    tamanho: 'XL',
    preco: 69.99,
    imagem: '/image/bulls.jpeg',
    rota: '/rotas/bulls'
  },
  {
    nome: 'Los Angeles Lakers',
    tamanho: 'X',
    preco: 99,
    imagem: '/image/lakers.jpeg',
    rota: '/rotas/lakers'
  },
  {
    nome: 'Milwaukee Bucks',
    tamanho: 'XXL',
    preco: 80,
    imagem: '/image/bucks.jpeg',
    rota: '/rotas/bucks'
  }
];

export async function GET() {
  try {
    return NextResponse.json(jerseys);
  } catch (error) {
    return NextResponse.error('Erro Interno no servidor', { status: 500 });
  }
}
