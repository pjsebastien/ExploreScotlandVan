interface ComparatifRow {
  critere: string;
  van: string;
  hotel: string;
  avantageVan: boolean;
}

interface ComparatifProps {
  title?: string;
  rows: ComparatifRow[];
}

export default function Comparatif({
  title = 'Van vs Hotel : le comparatif',
  rows
}: ComparatifProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-forest-800 mb-8 text-center">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-forest-800 text-white">
              <th className="px-6 py-4 text-left font-semibold">Critere</th>
              <th className="px-6 py-4 text-center font-semibold">
                <span className="inline-flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  Van amenage
                </span>
              </th>
              <th className="px-6 py-4 text-center font-semibold">
                <span className="inline-flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                  Hotel
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-stone-200 ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}
              >
                <td className="px-6 py-4 font-medium text-stone-800">
                  {row.critere}
                </td>
                <td className={`px-6 py-4 text-center ${row.avantageVan ? 'text-forest-700 font-semibold' : 'text-stone-600'}`}>
                  {row.avantageVan && (
                    <span className="inline-block w-2 h-2 rounded-full bg-forest-500 mr-2"></span>
                  )}
                  {row.van}
                </td>
                <td className={`px-6 py-4 text-center ${!row.avantageVan ? 'text-forest-700 font-semibold' : 'text-stone-600'}`}>
                  {!row.avantageVan && (
                    <span className="inline-block w-2 h-2 rounded-full bg-forest-500 mr-2"></span>
                  )}
                  {row.hotel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-stone-500 text-center">
        Le point vert indique l&apos;option avantageuse pour chaque critere
      </p>
    </section>
  );
}
