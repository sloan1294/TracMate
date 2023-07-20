import { useState } from "react";

import { data } from "../data";
import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Chart, Pie } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)


const set = () => {
    function random_bg_color() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     console.log(bgColor);
      
      return bgColor
        }
    
    
    function chart(){
    
        <div>
     {data.map((user) => {
          const data = {
          
            labels: [user.name],
            datasets: [
              {
                data: [user.amount],
                backgroundColor:[random_bg_color()]
              }
            ]
          }
          
          return(
            <div className="" key={data.id}>
              <h1>
                Pie Chart
              </h1>
              <div className="p-2 w-1/2">
                <Pie 
                data={data}
               
                >
      
                </Pie>
              </div>
            </div>
          )
        })}
        </div>
      
    }
    
    chart();
}

export default set