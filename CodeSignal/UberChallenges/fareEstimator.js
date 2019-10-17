function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    
    let ans = [];
    
    for (let i = 0; i < cost_per_minute.length; i++)
    {
        let temp = (cost_per_minute[i] * ride_time) + (cost_per_mile[i] * ride_distance)
        ans.push(temp)
    }
    
    
    return ans

}

