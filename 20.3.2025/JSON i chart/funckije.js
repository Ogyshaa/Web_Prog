class temp{
    constructor(ime, min, max){
        this.ime =ime
        this.min = min
        this.max = max
    }
    srednja(){
        this.srednja = (parseInt(this.min) + parseInt(this.max))/2
    }
}

let grad = []
let xValues = []
let yValues1 = []
let yValues2= []

function unos(){
    ime = document.getElementById('tbime').value
    min = document.getElementById('tempmin').value
    max = document.getElementById('tempmax').value
    gr = new temp(ime, min, max)
    gr.srednja()
    grad.push(gr)
    xValues.push(ime)
    yValues1.push(min)
    yValues2.push(max)
    document.getElementById('tbime').value= ''
    document.getElementById('tempmin').value= ''
    document.getElementById('tempmax').value= ''
}

function sacivaj(){
    localStorage.setItem('ime',JSON.stringify(xValues))
    localStorage.setItem('max',JSON.stringify(yValues2))
    localStorage.setItem('min',JSON.stringify(yValues1))
    localStorage.setItem('niz',JSON.stringify(grad))
}

function stampa(){
    let grad = JSON.parse(localStorage.getItem('niz'))
    let i =0
    let br = grad.length
    let t = document.getElementById('t2')
    let red = t.insertRow(0)
    let pljerb = red.insertCell(0)
    pljerb.innerHTML = 'redni br'
    let poljeime = red.insertCell(1)
    poljeime.innerHTML = 'ime grad'
    let poljemin = red.insertCell(2)
    poljemin.innerHTML = 'min'
    let poljemax = red.insertCell(3)
    poljemax.innerHTML = 'max'
    let poljesr = red.insertCell(4)
    poljesr.innerHTML= 'sr'
    while (i<br){
        red = t.insertRow()
        tekst = '<td>' +(i+1)+"</td>" + '<td>' +grad[i].ime+"</td>"+ '<td>' +grad[i].min+"</td>"+'<td>' +grad[i].max+"</td>" +'<td>' +grad[i].srednja+"</td>"
        red.innerHTML = tekst
        i++
    }
}

function grafik(){
    xValues = JSON.parse(localStorage.getItem('ime'))
    yValues1 = JSON.parse(localStorage.getItem('min'))
    yValues2= JSON.parse(localStorage.getItem('max'))
    new Char('myChart',{
        type:'bar',
        data:{
            labels:xValues,
            datasets:[
                {
                    backgroundColor: 'red',
                    data: yValues1
                
                },
                {
                    backgroundColor: 'blue',
                    data:yValues2
                }
            ]
        },
        options: {
            legend:{display:false},
            title:{
                display: true,
                text: 'T'
            },
            scales: {
                yAxes:[{
                    ticks:{
                        min:-5
                    }
                }]
            }
        }
    })
}
