function IdCard({ name, role, department, idNumber, avatar }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg">
      <div className="bg-slate-900 px-5 py-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
          Shecan code ID
        </p>
      </div>

      <div className="flex gap-4 p-5">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="h-20 w-20 rounded-xl border border-slate-300 object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold text-slate-900">{name}</h2>
          <p className="text-sm font-medium text-slate-600">{role}</p>

          <dl className="mt-3 space-y-1 text-sm text-slate-700">
            <div className="flex items-center justify-between gap-2">
              <dt className="font-semibold">ID Number</dt>
              <dd className="font-mono">{idNumber}</dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="font-semibold">Department</dt>
              <dd>{department}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default IdCard;
