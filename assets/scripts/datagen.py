import pandas as pd
import json


def dumpJson(filename, gendict):
    with open(f"../dataparsed/{filename}.json", "w", encoding='utf8') as fp:
        json.dump(gendict, fp, ensure_ascii=False, indent=4, allow_nan=False)


def genCharStat():
    dfchar = pd.read_csv(f"../datamine/Chars.csv")
    chardict = {}
    for i in range(3, 35):
        chardict[dfchar.iat[i, 0]] = {}
        for j in range(2, dfchar.shape[1]):
            if pd.notna(dfchar.iat[1, j]):
                chardict[dfchar.iat[i, 0]][dfchar.iat[1, j]] = dfchar.iat[i, j]
        chardict[dfchar.iat[i, 0]]["Internal Level"] = dfchar.iat[i, 14]
    dumpJson("Chars", chardict)
    return chardict


def genClassStat():
    dfcls = pd.read_csv("../datamine/Class.csv")
    clsdict = {}
    for i in range(3, dfcls.shape[0]-1):
        if dfcls.iat[i, 4] == "NPC" or pd.isna(dfcls.iat[i, 0]):
            continue
        clsdict[dfcls.iat[i, 0]] = {}
        for j in range(1, dfcls.shape[1]):
            if pd.notna(dfcls.iat[1, j]) and pd.notna(dfcls.iat[i, j]):
                clsdict[dfcls.iat[i, 0]][dfcls.iat[1, j]] = dfcls.iat[i, j]
    dumpJson("Class", clsdict)
    return clsdict

def genWpnItmStat():
    dfwi = pd.read_csv("../datamine/WeaponItems.csv")
    widict = {}
    for i in range(5, 121):
        if pd.notna(dfwi.iat[i, 1]):
            continue
        widict[dfwi.iat[i, 0]] = {}
        for j in range(1, dfwi.shape[1]):
            if pd.notna(dfwi.iat[1, j]) and pd.notna(dfwi.iat[i, j]):
                widict[dfwi.iat[i, 0]][dfwi.iat[1, j]] = dfwi.iat[i, j]
    dumpJson("WeaponItems", widict)
    return widict


if __name__ == '__main__':
    # chardict = genCharStat()
    # clsdict = genClassStat()
    widict = genWpnItmStat()
