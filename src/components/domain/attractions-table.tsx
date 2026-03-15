import { touristSpots } from '@/data/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function AttractionsTable() {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Inventário de atrativos</h2>
        <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100">
          Ver todos
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3 font-medium">Nome</th>
              <th className="pb-3 font-medium">Categoria</th>
              <th className="pb-3 font-medium">Região</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {touristSpots.map((spot) => (
              <tr key={spot.id} className="text-slate-600">
                <td className="py-3 font-medium text-slate-800">{spot.name}</td>
                <td className="py-3">{spot.category}</td>
                <td className="py-3">{spot.district}</td>
                <td className="py-3">
                  <Badge variant={spot.status === 'Ativo' ? 'success' : 'warning'}>{spot.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
