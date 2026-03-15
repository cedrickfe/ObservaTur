import { citySummaries } from '@/data';
import { Card } from '@/components/ui/card';

export function CitiesTable() {
  return (
    <Card>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Resumo por município</h2>
        <p className="text-sm text-slate-500">Base mockada para demonstração de escalabilidade multi-cidade.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3 font-medium">Cidade</th>
              <th className="pb-3 font-medium">Atrativos</th>
              <th className="pb-3 font-medium">Eventos</th>
              <th className="pb-3 font-medium">Satisfação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {citySummaries.map((city) => (
              <tr key={city.id}>
                <td className="py-3 font-medium text-slate-900">{city.city}</td>
                <td className="py-3">{city.attractions}</td>
                <td className="py-3">{city.events}</td>
                <td className="py-3">{city.satisfaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
