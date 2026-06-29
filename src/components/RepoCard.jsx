function RepoCard({ repository }) {

    return (

        <div className="bg-[#151A23] border border-[#232A36] rounded-3xl p-10">

            <h2 className="text-5xl font-bold">

                {repository.name}

            </h2>

            <p className="text-gray-400 mt-5 text-lg">

                {repository.description}

            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">

                <div>

                    <p className="text-gray-500 text-sm">

                        Language

                    </p>

                    <p className="font-semibold text-lg">

                        {repository.language}

                    </p>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        ⭐ Stars

                    </p>

                    <p className="font-semibold text-lg">

                        {repository.stargazers_count.toLocaleString()}

                    </p>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        🍴 Forks

                    </p>

                    <p className="font-semibold text-lg">

                        {repository.forks_count.toLocaleString()}

                    </p>

                </div>

                <div>

                    <p className="text-gray-500 text-sm">

                        🐞 Issues

                    </p>

                    <p className="font-semibold text-lg">

                        {repository.open_issues_count.toLocaleString()}

                    </p>

                </div>

            </div>

        </div>

    )

}

export default RepoCard;