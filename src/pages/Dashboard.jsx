import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRepository } from "../services/githubApi";
import RepoCard from "../components/RepoCard";
import AISummaryCard from "../components/AISummaryCard";
import Sidebar from "../components/Sidebar";
import HistoryCard from "../components/HistoryCard";
import { analyzeRepository } from "../services/geminiApi";

function Dashboard() {

  const location = useLocation();

  const { owner, repo } = location.state;

  const [repository, setRepository] = useState(null);

  const [loading, setLoading] = useState(true);

  const [aiResponse, setAiResponse] = useState(null);

  const [aiLoading,setAiLoading]=useState(false);

  useEffect(() => {
   async function fetchRepository() {
      

      try{

        const data = await getRepository(owner, repo);
        setRepository(data);

      }
      catch(error){
        console.error(error);
      }

      setLoading(false);
  
    }

    fetchRepository();

  }, [owner, repo]);

  async function generateAIReport()
  {
    if(!repository) return;
     setAiLoading(true);

    try{

        const aiData = await analyzeRepository(repository);
        setAiResponse(aiData);
    }

    catch(error){
        console.error(error);
        setAiResponse("Unable to generate AI report.");
    }

    setAiLoading(false);
  }


  return (

    <div
        className="min-h-screen text-white flex"
        style={{
        backgroundColor:"#070B14",
        backgroundImage:`
        radial-gradient(circle at top right, rgba(168,85,247,.15), transparent 35%),
        radial-gradient(circle at bottom left, rgba(6,182,212,.10), transparent 35%)
        `
        }} >
        
        <Sidebar />

        <div className="flex-1 p-10">

          <h1 className="text-5xl font-bold mb-3"> Dashboard</h1>

            <p className="text-gray-400 mb-10"> Analyze and understand any GitHub repository</p>

              {loading &&(<p>Loading...</p>)}

              {!loading && repository && (
                 <>
                  
              <div id="repository">
                  <RepoCard repository={repository} />
              </div>

              <div className="my-8">
                    <button
                          onClick={generateAIReport}
                          disabled={aiLoading}
                          className="
                          bg-gradient-to-r
                          from-fuchsia-600
                          via-violet-600
                          to-cyan-500
                          hover:scale-105
                          hover:shadow-[0_0_30px_rgba(168,85,247,.45)]
                          transition-all
                          duration-300
                          px-8
                          py-4
                          rounded-2xl
                          font-semibold
                          disabled:opacity-50
                          "
                        >

                              {aiLoading ? "Generating..." : "✨ Generate AI Report"}

                    </button>

                  </div>
                
                <div id="aireport">
                   <AISummaryCard aiResponse={aiResponse} />
                </div>
                
                <div id="history">
                  <HistoryCard repository={repository} />
                </div>
            
          </>
        )}
      </div>
    </div>

  )

}

export default Dashboard;