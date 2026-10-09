import type { TableData } from "../../types";

function DataTable({ table }: { table: TableData }) {
    return (
        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-left text-sm">
                <thead className="bg-cherry text-accent">
                    <tr>
                        {table.head.map((h) => (
                            <th key={h} scope="col" className="border-b border-slate-200 px-4 py-2.5 font-semibold">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                    {table.rows.map(([a, b]) => (
                        <tr key={a}>
                            <td className="px-4 py-2.5 font-medium text-accent">{a}</td>
                            <td className="px-4 py-2.5 text-slate-700">{b}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { DataTable }