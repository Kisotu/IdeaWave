/* eslint-disable react/prop-types */
import Trends from "../api/Trends"
import OpenAi from "../api/OpenAI"

const Generate = () => {


  return (
    <>
      <div className="generate">
        <h4 className="gen_title">Generate Insights</h4>
      </div>

      {/* Google Trends */}
      <div className="trend-list">
        <h4>Recent Trends</h4>
        <Trends />
      </div>

      <OpenAi />
    </>
  )
}

export default Generate