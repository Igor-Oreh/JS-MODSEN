function rand(min, max) {
    const diap = max - min + 1;
    return Math.trunc(Math.random() * diap + min)
}


(
    function() {
        const length = 5;
        const randomArr = [...Array(length)]
        
        for (let i = 0; i < length; i++)
            randomArr[i] = rand(-10, 10)

        const min = Math.min(...randomArr)
        const max = Math.max(...randomArr)
        console.log(randomArr)
        console.log(min)
        console.log(max)
    }
)();