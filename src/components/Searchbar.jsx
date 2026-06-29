import {useState} from"react";
import {useNavigate} from "react-router-dom";
function Searchbar(){
    const[repoUrl,setRepoUrl]=useState("");
    const navigate =useNavigate();

    function extractRepoDetails(url){
        const parts =url.split("/");
        const owner =parts[3];
        const repo =parts[4];
        return {owner,repo};
    }

    function handleAnalyze(){

        const {owner,repo}=extractRepoDetails(repoUrl);
        localStorage.setItem("lastRepo",repoUrl);
        navigate("/dashboard",{state:{owner,repo}});
    }
    
    return(
        <div className="flex gap-5">
            <input
                type="text"
                placeholder="Paste Github reporsitory URL"
                value={repoUrl}
                onChange={(e)=>setRepoUrl(e.target.value)}
                className="border p-3 w-96 rounded-lg"
            />

            <button 
            onClick={handleAnalyze}
            className="bg-black text-white px-5 rounded-lg">Analyze Repository</button>


        </div>

    )



}
export default Searchbar;
