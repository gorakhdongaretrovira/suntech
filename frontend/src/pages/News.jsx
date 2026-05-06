import news from "../data/news";

export default function News() {
  return (
    <main className="min-h-screen bg-[#0e1c2f] px-6 py-20 text-white">

      <h1 className="text-4xl font-bold text-center mb-12">
        News & Updates
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {news.map((n, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold">{n.title}</h3>
            <p className="text-sm text-[#e8a020]">{n.date}</p>
            <p className="mt-2 text-white/70">{n.description}</p>
          </div>
        ))}
      </div>

    </main>
  );
}