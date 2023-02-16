import pandas as pd
import json

def genStat(df: pd.DataFrame):
    chardict = {}
    for i in range(3, 35):
        chardict[df.iat[i,0]] = {}
        for j in range(2,61):
            if pd.notna(df.iat[1,j]):
                chardict[df.iat[i,0]][df.iat[1,j]] = df.iat[i,j]
        chardict[df.iat[i,0]]["Internal Level"] = df.iat[i,14]
    return chardict

if __name__ == '__main__':
    dfchar = pd.read_csv("feechars.csv")
    chardict = genStat(dfchar)
    with open("../characters/chardatamined.json", "w", encoding='utf8') as fp:
        json.dump(chardict, fp, ensure_ascii=False, indent=4)

