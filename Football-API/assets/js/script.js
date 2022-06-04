let table = document.querySelector(".league-table");

let url = "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=a1811700-d81a-11ec-ab5a-f56c62caeaee&season_id=1243&league_id=281&date_from=2021-02-17&date_to=2021-02-25";


async function fetchText() {
    let response = await fetch(url);
    let data = await response.json();
    let scorsTbale = data.data;

    scorsTbale.forEach(e => {
        // e.home_team.short_code
        // ${e.home_team.logo}
        table.innerHTML += `
        <div class="teams">
            <span id="firstTeam">${e.home_team.short_code}</span> 
            <span id="firstTeamIcon">
                <img src="${e.home_team.logo}" alt="">
            </span>
            <span id="point">${e.stats.ft_score}</span>
            <span id="secondTeamIcon">
                <img src="${e.away_team.logo}" alt="">
            </span>
            <span id="secondTeam">${e.away_team.short_code}</span>
        </div>
        `;
    });

}

fetchText();