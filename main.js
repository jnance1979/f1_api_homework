let submitButton = document.querySelector('#userForm')
let year = document.getElementById('year')
let season = document.getElementById('season')
let results = document.querySelector('#results')


submitButton.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(`https://ergast.com/api/f1/${year.value}/${season.value}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {

            for (x of data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'])
            {
            let tr = document.createElement('tr')
            tr.innerHTML =`
            <td style="border-color: dimgray;">${x.position}</td>
            <td style="color: blue; border-color: dimgray;">${x.Driver.givenName} ${x.Driver.familyName}</td>
            <td style="border-color: dimgray;">${x.Driver.nationality}</td>
            <td style="border-color: dimgray;">${x.Constructors[0].name}</td>
            <td style="border-color: dimgray;">${x.points}</td>
            `
            results.appendChild(tr)
            }
        })
})
