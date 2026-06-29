import { LayoutDashboard, BookOpen, Brain, History } from "lucide-react";

function Sidebar() {

  return (

    <div className="w-72 min-h-screen bg-[#101623] border-r border-[#232A36] px-8 py-10 sticky top-0">

      <h1 className="text-4xl font-black leading-tight">

        <span className="text-white">

          AI

        </span>

        <br />

        <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">

          Codebase

        </span>

        <br />

        <span className="text-white">

          Mentor

        </span>

      </h1>

      <div className="mt-16 space-y-5">

        <button onClick={() =>window.scrollTo({
            top: 0,
            behavior: "smooth",
        }) }
    className="flex items-center gap-4 hover:bg-[#1B2332] px-5 py-4 rounded-2xl w-full text-left transition"
    >
    <LayoutDashboard size={22} />

    <span>Dashboard</span>
</button>

              <button
          onClick={() =>
              document
                  .getElementById("repository")
                  ?.scrollIntoView({
                      behavior: "smooth",
                  })
          }
          className="flex items-center gap-4 hover:bg-[#1B2332] px-5 py-4 rounded-2xl w-full text-left transition"
      >
          <BookOpen size={22} />

          <span>Repository</span>
      </button>
      <button
    onClick={() =>
        document
            .getElementById("aireport")
            ?.scrollIntoView({
                behavior: "smooth",
            })
    }
    className="flex items-center gap-4 hover:bg-[#1B2332] px-5 py-4 rounded-2xl w-full text-left transition"
>
    <Brain size={22} />

    <span>AI Report</span>
</button>

      <button
    onClick={() =>
        document
            .getElementById("history")
            ?.scrollIntoView({
                behavior: "smooth",
            })
    }
    className="flex items-center gap-4 hover:bg-[#1B2332] px-5 py-4 rounded-2xl w-full text-left transition"
>
    <History size={22} />

    <span>History</span>
</button>
      </div>

      <div className="absolute bottom-10 left-8 right-8">

        <div className="bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl p-5">

          <h3 className="font-bold">

            🚀 AI Codebase Mentor

          </h3>

          <p className="text-sm mt-2">

            Learn open-source projects faster with AI.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Sidebar;