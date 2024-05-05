const translateMap = {
    "平板": "Tablet",
    "3C配件": "3CAccessories",
    "手機": "MobilePhone",
    "電腦": "Computer",
    "智慧手錶": "Smartwatch",
    "遊戲機": "GamingConsole",
    "Tablet": "平板",
    "3CAccessories": "3C配件",
    "MobilePhone": "手機",
    "Computer": "電腦",
    "Smartwatch": "智慧手錶",
    "GamingConsole": "遊戲機"
}

export const translate = (string) => {
    if (!translateMap[string]) return null
    return translateMap[string]
}