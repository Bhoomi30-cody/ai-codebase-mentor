function HistoryCard({ repository }) {

  if (!repository) return null;

  return (
    <div className="bg-[#151A23] border border-[#232A36] rounded-3xl p-8 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        🕘 Recent Repository
      </h2>

      <p className="text-violet-400 text-xl font-semibold">
        {repository.full_name}
      </p>

      <a
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-violet-400 transition"
      >
        Open GitHub Repository →
      </a>

    </div>
  );
}

export default HistoryCard;