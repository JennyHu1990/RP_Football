import csv
import requests
from bs4 import BeautifulSoup

headers = ["name", "date_of_birth", "place_of_birth", "team", "season", "season_start_year", "season_end_year"]
make_csv = open('Spain.csv', 'w')
write_csv = csv.writer(make_csv, lineterminator='\n')
write_csv.writerow(headers)

team_hrefs = []

url = 'https://www.worldfootball.net/competition/esp-primera-division/'

url_r = requests.get(url)

soup = BeautifulSoup(url_r.text, 'lxml')

table = soup.find("div", class_="block active", id="tabelle_0")

tds = table.find_all("td", align = "center")

for td in tds:
    team_a = td.find("a")
    if team_a is not None:
        team_href = team_a.get("href")
        team_hrefs.append(team_href)

for team_href in team_hrefs:
    season_url = 'https://www.worldfootball.net' + team_href + '20/'
    # print(season_url)
    season_url_r = requests.get(season_url)
    season_url_soup = BeautifulSoup(season_url_r.text, 'lxml')
    season_url_table = season_url_soup.find("table", class_="standard_tabelle", cellpadding="3", cellspacing="1")
    season_url_trs = season_url_table.find_all("tr", limit=30)
    for season_url_tr in season_url_trs:
        season_url_tds = season_url_tr.find_all("td")
        season = season_url_tds[1].text
        season_end_year = season_url_tds[1].text.split('/')[1]
        season_start_year = int(season_end_year) - 1

        team_url = 'https://www.worldfootball.net' + team_href + str(season_end_year) + '/2/'
        print(team_url)
        team_url_r = requests.get(team_url)
        team_url_soup = BeautifulSoup(team_url_r.text, 'lxml')
        team_url_table = team_url_soup.find("table", class_="standard_tabelle", cellpadding="3")

        if "Pieces of information about this squad are not yet available." in team_url_table.text:
            continue
        team_url_trs = team_url_table.find_all("tr")
        for team_url_tr in team_url_trs:
            team_url_tds = team_url_tr.find_all("td")
            try:
                name = team_url_tds[2].text
                place_of_birth = team_url_tds[4].text
                date_of_birth = team_url_tds[5].text
                team = team_href.split('/')[2]
                season
            except:
                continue
            row = [name, date_of_birth, place_of_birth, team, season, season_start_year, season_end_year]
            write_csv.writerow(row)
make_csv.close()
