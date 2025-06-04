// src/pages/RelatorioApontamentos2024.tsx
import React, { useState, useRef, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSheetData } from '../server/gas'
import type { ApontamentoRow } from '../types'
import Spinner from '../components/Spinner'
import {
  ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  PieChart, Pie, Cell
} from 'recharts'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card'

const COLORS = {
  primary: '#3B82F6',    // blue-500
  secondary: '#10B981',  // emerald-500
  warning: '#F59E0B',    // amber-500
  danger: '#EF4444',     // red-500
  accent: '#8B5CF6',     // violet-500
}
const PIE_PALETTE = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.warning,
  COLORS.danger,
  COLORS.accent,
]
const ITEMS_PER_PAGE = 15

export default function RelatorioApontamentos2024() {
  // ─── State & refs ────────────────────────────────────────
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<string|null>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  // ─── Fetch data ───────────────────────────────────────────
  const { data: allRows = [], isLoading, error } = useQuery<ApontamentoRow[],Error>({
    queryKey: ['apont-2024'],
    queryFn: () => getSheetData('relatorio-apontamentos-2024'),
    staleTime: 5 * 60 * 1000,
  })

  // ─── Auto-scroll to details ───────────────────────────────
  useEffect(() => {
    if (selected && detailsRef.current) {
      detailsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [selected])

  // ─── Loading / Error ──────────────────────────────────────
  if (isLoading) return <Spinner />
  if (error) return (
    <div className="p-6 text-red-600">
      Erro ao buscar dados: {error.message}
    </div>
  )

  // ─── Clean rows ────────────────────────────────────────────
  const rows = allRows.filter(r => (r.APONTAMENTO ?? '').trim().length > 0)

  // ─── Card metrics ─────────────────────────────────────────
  const totalPareceres    = new Set(rows.map(r => r['PARECER Nº'])).size
  const totalApontamentos = rows.length
  const advCount          = rows.filter(r => r['NATUREZA DO APONTAMENTO'] === 'Advertência').length
  const obrigCount        = rows.filter(r => r['NATUREZA DO APONTAMENTO'] === 'Obrigação').length

  // ─── Helper to build distributions ────────────────────────
  function makeDist(key: keyof ApontamentoRow) {
    const m = new Map<string,number>()
    rows.forEach(r => {
      const k = r[key] || 'Não informado'
      m.set(k, (m.get(k) ?? 0) + 1)
    })
    return Array.from(m, ([name, value]) => ({ name, value }))
  }
  const distNatureza = makeDist('NATUREZA DO APONTAMENTO')
  const distTema     = makeDist('TEMA DO PARECER')
  const distEspecie  = makeDist('ESPÉCIE')
  const distSubtema  = makeDist('SUBTEMA')

  // ─── Group by Parecer ─────────────────────────────────────
  type Group = {
    parecer: string
    parecerista: string
    tema: string
    count: number
  }
  const groups: Group[] = Array.from(
    rows.reduce<Map<string,Group>>((m, r) => {
      const key = r['PARECER Nº']
      if (!m.has(key)) {
        m.set(key, {
          parecer: key,
          parecerista: r.PARECERISTA,
          tema: r['TEMA DO PARECER'],
          count: 0
        })
      }
      m.get(key)!.count++
      return m
    }, new Map()).values()
  )
  const totalPages = Math.ceil(groups.length / ITEMS_PER_PAGE)
  const paginated  = groups.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
  const detalhes   = selected ? rows.filter(r => r['PARECER Nº'] === selected) : []

  return (
    <div className="p-6 bg-off-white space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Relatório de Apontamentos 2024
      </h1>

      {/* ── CARDS ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Pareceres',    value: totalPareceres,    color: COLORS.primary },
          { title: 'Apontamentos', value: totalApontamentos, color: COLORS.secondary },
          { title: 'Advertências', value: advCount,          color: COLORS.warning },
          { title: 'Obrigações',   value: obrigCount,        color: COLORS.danger },
        ].map(c => (
          <Card key={c.title} className="shadow-sm border">
            <CardHeader>
              <CardTitle className="text-sm text-gray-600">
                {c.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <span
                className="h-2 w-2 rounded-full mr-2 block"
                style={{ backgroundColor: c.color }}
              />
              <span className="text-2xl font-semibold text-gray-900">
                {c.value}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── GRÁFICOS 2x2 ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Natureza do Apontamento */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Natureza do Apontamento</CardTitle>
            <p className="text-xs text-gray-500 mt-1">
              Quantidade por natureza
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={distNatureza}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={50}
                  tick={{ fill: '#4B5563', fontSize: 12 }}
                />
                <YAxis tick={{ fill: '#4B5563', fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.primary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tema do Parecer */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Tema do Parecer</CardTitle>
            <p className="text-xs text-gray-500 mt-1">Percentual por tema</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <Pie
                  data={distTema}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = innerRadius + (outerRadius - innerRadius) / 2;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor={x > cx ? 'start' : 'end'}
                        dominantBaseline="central"
                        fontSize={12}
                      >
                        {`${(percent! * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {distTema.map((_, i) => (
                    <Cell key={i} fill={PIE_PALETTE[i % PIE_PALETTE.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number, name: string) => [`${value}`, name]} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{ paddingTop: 10 }}
                  payload={distTema.map((item, i) => ({
                    value: `${item.name}: ${item.value}`,
                    type: 'square' as const,
                    id: item.name,
                    color: PIE_PALETTE[i % PIE_PALETTE.length],
                  }))}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Espécie do Apontamento */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Espécie do Apontamento</CardTitle>
            <p className="text-xs text-gray-500 mt-1">
              Quantidade por espécie
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={distEspecie}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={50}
                  tick={{ fill: '#4B5563', fontSize: 12 }}
                />
                <YAxis tick={{ fill: '#4B5563', fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.secondary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Subtema do Parecer */}
        <Card className="border">
          <CardHeader>
            <CardTitle>Subtema do Parecer</CardTitle>
            <p className="text-xs text-gray-500 mt-1">
              Quantidade por subtema
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={distSubtema}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={50}
                  tick={{ fill: '#4B5563', fontSize: 12 }}
                />
                <YAxis tick={{ fill: '#4B5563', fontSize: 12 }} />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill={COLORS.danger}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ── Lista paginada de Pareceres ───────────────────────── */}
      <Card className="border">
        <CardHeader>
          <CardTitle>Lista de Pareceres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-1 text-left">Parecer Nº</th>
                <th className="px-2 py-1 text-left">Parecerista</th>
                <th className="px-2 py-1 text-left">Tema</th>
                <th className="px-2 py-1 text-center">Qtde Apont.</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(g => (
                <tr
                  key={g.parecer}
                  className={`border-t hover:bg-gray-50 ${
                    g.parecer === selected ? 'bg-blue-50' : ''
                  } cursor-pointer`}
                  onClick={() =>
                    setSelected(prev => prev === g.parecer ? null : g.parecer)
                  }
                >
                  <td className="px-2 py-1">{g.parecer}</td>
                  <td className="px-2 py-1">{g.parecerista}</td>
                  <td className="px-2 py-1">{g.tema}</td>
                  <td className="px-2 py-1 text-center font-semibold">
                    {g.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              ‹ Anterior
            </button>
            <span>
              Página {page} de {totalPages}
            </span>
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Próxima ›
            </button>
          </div>
        </CardContent>
      </Card>

      {/* ── Detalhes do Parecer Selecionado ───────────────────── */}
      {selected && (
        <div ref={detailsRef}>
          <Card className="border mt-6">
            <CardHeader>
              <CardTitle>Apontamentos do Parecer {selected}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {detalhes.map((r, i) => (
                <div
                  key={i}
                  className="border border-gray-200 p-4 rounded hover:shadow-sm transition"
                >
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div><strong>Tema:</strong> {r['TEMA DO PARECER']}</div>
                    <div><strong>Subtema:</strong> {r.SUBTEMA}</div>
                    <div><strong>Espécie:</strong> {r.ESPÉCIE}</div>
                    <div><strong>Natureza:</strong> {r['NATUREZA DO APONTAMENTO']}</div>
                    <div><strong>Urgência:</strong> {r.URGÊNCIA}</div>
                    <div><strong>Conferência:</strong> {r.CONFERÊNCIA}</div>
                    <div className="col-span-2">
                      <strong>Procedimento:</strong> {r.PROCEDIMENTO}
                    </div>
                    <div className="col-span-2">
                      <strong>Apontamento:</strong> {r.APONTAMENTO}
                    </div>
                    <div className="col-span-2">
                      <strong>Ementa:</strong> {r.EMENTA}
                    </div>
                    <div className="col-span-2">
                      <strong>Justificativa:</strong> {r.JUSTIFICATIVA}
                    </div>
                    <div className="col-span-2">
                      {r['LINK REAL'] && (
                        <a
                          href={String(r['LINK REAL']).replace('/view','/preview')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-700 hover:underline text-sm"
                        >
                          Abrir Documento
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
