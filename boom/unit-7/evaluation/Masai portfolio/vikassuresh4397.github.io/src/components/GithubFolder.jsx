import React from 'react'
import GithubCalendar from "react-github-calendar"
const GithubFolder = () => {
  return (
    <div>

        <div ><GithubCalendar className='react-activity-calendar'  username='vikassuresh4397' blockSize={30} blockMargin={5} fontSize={16}/></div>
      <div>
      {/* 💫 About Me */}
      <h1>About Me:</h1>
    

      {/* 📊 GitHub Stats */}
      <img 
      id="github-stats-card"
        src="https://github-readme-stats.vercel.app/api?username=vikassuresh4397&theme=dark&hide_border=false&include_all_commits=false&count_private=false"
        alt="GitHub Stats"
      />
      <br />
      <img
      id="github-streak-stats"
        src="https://github-readme-streak-stats.herokuapp.com/?user=vikassuresh4397&theme=dark&hide_border=false"
        alt="GitHub Streak Stats"
      />
      <br />
      <img
      id="github-top-langs"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=vikassuresh4397&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
        alt="Top Languages"
      />

      {/* Other content */}
      <hr />
      <a href="https://visitcount.itsvg.in/api?id=vikassuresh4397&icon=0&color=0">
        <img
          src="https://visitcount.itsvg.in/api?id=vikassuresh4397&icon=0&color=0"
          alt="Visitor Count"
        />
      </a>
      <p>
        {/* Proudly created with GPRM (https://gprm.itsvg.in) */}
        Proudly created with GPRM (<a href="https://gprm.itsvg.in">https://gprm.itsvg.in</a>)
      </p>
    </div>
    </div>
  )
}

export default GithubFolder