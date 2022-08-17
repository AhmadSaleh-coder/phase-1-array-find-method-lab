const record = [
    { year: "2018", result: "L" },
    { year: "2015", result: "W" },
    { year: "2016", result: "N/A" }
    //...
]
let year;


const superbowlWin = record => {
    
    const result = record.find(record => record.result === "W");
    if(result)
        return result.year;

    
}

console.log(superbowlWin(record));
