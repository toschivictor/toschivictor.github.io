'use strict'

;(function(brokers) {
    let box = []

    const createBox = (data) => {
        let name = data.name

        box.push(`
            <div class="box-property">
                <img src="${data.links.logo2x}" alt="${name}" title="${name}">
                <h3>${name}</h3>
                <p>${data.description}</p>
            </div>
        `)

        document.getElementById('content').innerHTML = box.join('')
    }

    const checkCurrentVal = (prev, curr) => {
        let data = undefined !== prev ? prev : curr
        return data
    }

    brokers.reduce((prev, curr) => {
        let broker = checkCurrentVal(prev, curr)
        createBox(broker)
    })        
    
})(dataBrokers)
