import Link from "next/link";

export default function Page() {
    return (
        <div className="p-10 max-w-3xl mx-auto mt-14">
            <Link className=" px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition möb " href="/diseases/psoriasis">
                ← Назад
            </Link>

            <h1 className="text-3xl font-bold mb-6 mt-5">Что такое псориаз?</h1>

            <p className="mb-4">
                Иммунная система состоит из клеток, защищающих организм от заболеваний.
                Когда функция этих клеток нарушается, могут развиваться различные
                болезни. При псориазе нарушение работы иммунных клеток стимулирует
                быстрое размножение кожных клеток.
            </p>

            <p className="mb-4">
                Хотя точная причина дисфункции иммунных клеток и стимуляции кожных
                клеток до конца не изучена, известно, что в этом процессе важную роль
                играют определённые факторы.
            </p>
        </div>
    );
}
