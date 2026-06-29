function AISummaryCard({ aiResponse }) {

    if(!aiResponse){

        return(

            <div className="bg-[#151A23] border border-[#232A36] rounded-3xl p-8 mt-8">

                <h2 className="text-3xl font-bold mb-5">

                    🤖 AI Mentor Report

                </h2>

                <p className="text-gray-400">

                    Click Generate AI Report

                </p>

            </div>

        )

    }

    return(

        <div className="bg-[#151A23] border border-[#232A36] rounded-3xl p-8 mt-8">

            <h2 className="text-3xl font-bold mb-8">

                🤖 AI Mentor Report

            </h2>

            <div className="mb-8">

                <h3 className="text-violet-400 text-xl font-semibold">

                    📖 Summary

                </h3>

                <p className="text-gray-300 mt-3">

                    {aiResponse.summary}

                </p>

            </div>

            <div className="mb-8">

                <h3 className="text-violet-400 text-xl font-semibold">

                    📈 Difficulty

                </h3>

                <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full inline-block mt-3">

                    {aiResponse.difficulty}

                </span>

            </div>

            <div className="mb-8">

                <h3 className="text-violet-400 text-xl font-semibold">

                    🛠 Skills Required

                </h3>

                <div className="flex flex-wrap gap-3 mt-3">

                    {aiResponse.skills.map((skill,index)=>(

                        <span

                        key={index}

                        className="bg-violet-500/20 text-violet-300 px-4 py-2 rounded-full"

                        >

                            {skill}

                        </span>

                    ))}

                </div>

            </div>

            <div className="mb-8">

                <h3 className="text-violet-400 text-xl font-semibold">

                    🗺 Learning Roadmap

                </h3>

                <ol className="list-decimal list-inside mt-3 text-gray-300 space-y-2">

                    {aiResponse.roadmap.map((step,index)=>(

                        <li key={index}>

                            {step}

                        </li>

                    ))}

                </ol>

            </div>

            <div>

                <h3 className="text-violet-400 text-xl font-semibold">

                    💡 Mini Project

                </h3>

                <p className="text-gray-300 mt-3">

                    {aiResponse.miniProject}

                </p>

            </div>

        </div>

    )

}

export default AISummaryCard;