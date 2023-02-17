import pandas as pd
import json

def dumpJson(filename, gendict):
    with open(f"../dataparsed/{filename}.json", "w", encoding='utf8') as fp:
        json.dump(gendict, fp, ensure_ascii=False, indent=4)

def genCharStat():
    df = pd.read_csv(f"../datamine/Chars.csv")
    chardict = {}
    for i in range(3, 35):
        chardict[df.iat[i,0]] = {}
        for j in range(2,61):
            if pd.notna(df.iat[1,j]):
                chardict[df.iat[i,0]][df.iat[1,j]] = df.iat[i,j]
        chardict[df.iat[i,0]]["Internal Level"] = df.iat[i,14]
    dumpJson("Chars", chardict)
    return chardict


if __name__ == '__main__':
    chardict = genCharStat()

