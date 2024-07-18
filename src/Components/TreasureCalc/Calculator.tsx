class Item {
    constructor(public name: string, public value: number) { }

    public toString = () : string => {
        return `Item (name: ${this.name}, value: ${this.value})`;
    }
}

export function calculateItems(experience: number) : Array<Item> {
    const multiplier = Math.floor(Math.random() * 3) + 2;
        let gold = experience * multiplier;
        console.log("Initial gold: " + gold);
        let items: Array<Item> = [];
        const jewleryProbability = Math.floor(gold / 100);
        for (let i = 0; i < jewleryProbability; i++) {
            let diceRoll = Math.floor(Math.random() * 10) + 1;
            console.log(diceRoll);
            if (diceRoll === 10) {
                diceRoll = Math.floor(Math.random() * 20) + 1;
                gold -= 100;
                console.log(diceRoll);
                if (diceRoll < 20) {
                    console.log("Rolling for simple gem");
                    let goldValue = 0;
                    switch (Math.floor(Math.random() * 4) + 1) {
                        case 1:
                            goldValue = Math.floor(Math.random() * 6) + 1;
                            items.push(new Item("אבן חן פשוטה", goldValue));
                            break;
                        case 2:
                            goldValue = Math.floor(Math.random() * 100) + 1 + 25;
                            items.push(new Item("אבן חן פשוטה", goldValue));
                            break;
                        case 3:
                            goldValue = Math.floor(Math.random() * 100) + 1 + 75;
                            items.push(new Item("אבן חן פשוטה", goldValue));
                            break;
                        case 4:
                            goldValue = (Math.floor(Math.random() * 100) + 1) * 10;
                            items.push(new Item("אבן חן פשוטה", goldValue));
                            break;
                    }

                } else {
                    console.log("Rolling for simple magical item");
                    switch (Math.floor(Math.random() * 4) + 1) {
                        case 1:
                            console.log("Rolling for potion");
                            switch (Math.floor(Math.random() * 20) + 1) {
                                case 1:
                                    items.push(new Item("ראייה מרחוק", 0));
                                    break;
                                case 2:
                                    items.push(new Item("שמיעה מרחוק", 0));
                                    break;
                                case 3:
                                    items.push(new Item("כיווץ", 0));
                                    break;
                                case 4:
                                    items.push(new Item("צורת אתר", 0));
                                    break;
                                case 5:
                                case 6:
                                    items.push(new Item("חסינות לאש", 0));
                                    break;
                                case 7:
                                    items.push(new Item("צורת גז", 0));
                                    break;
                                case 8:
                                case 9:
                                    items.push(new Item("גדילה", 0));
                                    break;
                                case 10:
                                    items.push(new Item("גבורה", 0));
                                    break;
                                case 11:
                                case 12:
                                    items.push(new Item("היעלמות מעין", 0));
                                    break;
                                case 13:
                                case 14:
                                    items.push(new Item("ריחוף", 0));
                                    break;
                                case 15:
                                    items.push(new Item("רעל", 0));
                                    break;
                                default:
                                    items.push(new Item("ריפוי", 0));
                            }
                            break;
                        case 2:
                            console.log("Rolling for potion");
                            switch (Math.floor(Math.random() * 20) + 1) {
                                case 1:
                                    items.push(new Item("לחש אחד, עוצמה ראשונה", 0));
                                    break;
                                case 2:
                                    items.push(new Item("לחש אחד, עוצמה 1ק2", 0));
                                    break;
                                case 3:
                                    items.push(new Item("שני לחשים, עוצמה 1", 0));
                                    break;
                                case 4:
                                    items.push(new Item("שני לחשים, עוצמה 1ק2", 0));
                                    break;
                                case 5:
                                case 6:
                                    items.push(new Item("מגילה מקוללת. יש לגלג בטבלת מגילות מקוללות", 0));
                                    break;
                                case 7:
                                    items.push(new Item("מגילת הגנה. יש לגלגל בטבלת מגילות הגנה", 0));
                                    break;
                                case 8:
                                    items.push(new Item("לחש אחד, עוצמה שלישית", 0));
                                    break;
                                case 9:
                                    items.push(new Item("מגילת הגנה, יש לגלגל בטבלת מגילות ההגנה", 0));
                                    break;
                                case 10:
                                    items.push(new Item("שני לחשים, עוצמה 1ק3", 0));
                                    break;
                                case 11:
                                    items.push(new Item("מגילה מקוללת. יש לגלגל בטבלת מגילות מקוללות", 0));
                                    break;
                                case 12:
                                    items.push(new Item("מגילת הגנה. זמן הגנה כפולה", 0));
                                    break;
                                case 13:
                                    items.push(new Item("שני לחשים, עוצמה 1ק2", 0));
                                    break;
                                case 14:
                                    items.push(new Item("ארבעה לחשים, עוצמה 1", 0));
                                    break;
                                case 15:
                                    items.push(new Item("שני לחשים, עוצמה 1ק3", 0));
                                    break;
                                case 16:
                                    items.push(new Item("מגילת הגנה, יש לגלגל בטבלת מגילות ההגנה", 0));
                                    break;
                                case 17:
                                    items.push(new Item("מגילה מקוללת. יש לגלגל בטבלת מגילות מקוללות", 0));
                                    break;
                                case 18:
                                    items.push(new Item("שלושה לחצים, עוצמה 1ק2", 0));
                                    break;
                                case 19:
                                    items.push(new Item("ארבעה לחשים, עוצמה 1ק2", 0));
                                    break;
                                case 20:
                                    items.push(new Item("שלושה לחשים, עוצמה 1ק3", 0));
                                    break;
                            }
                            break;
                        case 3:
                            console.log("Rolling for magical weapon");
                            diceRoll = Math.floor(Math.random() * 20) + 1;
                            if (diceRoll >= 1 && diceRoll <= 10) {
                                items.push(new Item("חרב +1", 0));
                            } else if (diceRoll === 11) {
                                items.push(new Item("חרב פלוס 1. פלוס 2 כנגד על מתים", 0));
                            } else if (diceRoll === 12) {
                                items.push(new Item("חרב פלוס 1. פלוס 2 כנגד חיות אדם", 0));
                            } else if (diceRoll === 13 || diceRoll === 14) {
                                items.push(new Item("חרב פלוס 1. פלוס 2 כנגד אורקים", 0));
                            } else if (diceRoll === 15) {
                                items.push(new Item("חרב פלוס 1. מטילה ריפוי פצעים קלים פעם ביום", 0));
                            } else if (diceRoll >= 16 && diceRoll <= 20) {
                                items.push(new Item("חרב פלוס 2", 0));
                            }
                            else if (diceRoll >= 21 && diceRoll <= 22) {
                                items.push(new Item("חרב פלוס 2, פלוס 3 כנגד אל מתים", 0));
                            }
                            else if (diceRoll >= 23 && diceRoll <= 24) {
                                items.push(new Item("חרב פלוס 2, פלוס 3 כנגד מטילי לחשים", 0));
                            }
                            else if (diceRoll == 25) {
                                items.push(new Item("חרב פלוס 2, מטילה ריפוי פצעים קלים פעמיים ביום", 0));
                            }
                            else if (diceRoll >= 26 && diceRoll <= 35) {
                                items.push(new Item('נשק קפא"פ פלוס 1', 0));
                            }
                            else if (diceRoll >= 36 && diceRoll <= 40) {
                                items.push(new Item('נשק קפא"פ פלוס 2', 0));
                            }
                            else if (diceRoll >= 41 && diceRoll <= 44) {
                                items.push(new Item("חיצים פלוס 1 - עשרה", 0));
                            }
                            else if (diceRoll >= 45 && diceRoll <= 46) {
                                items.push(new Item("קליע קל פלוס 1 - עשרה", 0));
                            }
                            else if (diceRoll >= 47 && diceRoll <= 50) {
                                items.push(new Item("קליע כבד פלוס 1 - עשרה", 0));
                            }
                            else if (diceRoll >= 51 && diceRoll <= 60) {
                                items.push(new Item("מגן פלוס 1", 0));
                            }
                            else if (diceRoll >= 61 && diceRoll <= 65) {
                                items.push(new Item("מגן פלוס 2", 0));
                            }
                            else if (diceRoll >= 66 && diceRoll <= 78) {
                                items.push(new Item("שריון פלוס 1", 0));
                            }
                            else if (diceRoll >= 79 && diceRoll <= 85) {
                                items.push(new Item("שריון פלוס 2", 0));
                            }
                            else if (diceRoll >= 86 && diceRoll <= 90) {
                                items.push(new Item("חרב מקוללת מינוס 1", 0));
                            }
                            else if (diceRoll >= 91 && diceRoll <= 93) {
                                items.push(new Item('נשק קפא"פ מקולל מינוס 1', 0));
                            }
                            else if (diceRoll >= 94 && diceRoll <= 95) {
                                items.push(new Item("חיצים או קליעים מקוללים מינוס 1", 0));
                            }
                            else if (diceRoll >= 96 && diceRoll <= 100) {
                                items.push(new Item("שריון מקולל מינוס 1", 0));
                            }
                            break;
                        case 4:
                            console.log("Scroll for magical item");
                            switch (Math.floor(Math.random() * 20) + 1) {
                                case 1:
                                case 2:
                                    items.push(new Item('טבעת הגנה פלוס 1', 0));
                                    break;
                                case 3:
                                case 4:
                                    items.push(new Item('טבעת הליכה על מים', 0));
                                    break;
                                case 5:
                                case 6:
                                    items.push(new Item('טבעת עמידות לאש', 0));
                                    break;
                                case 7:
                                case 8:
                                    items.push(new Item('טבעת חסינות לרעל', 0));
                                    break;
                                case 9:
                                    items.push(new Item('שרביט גילוי קסם (ק)', 0));
                                    break;
                                case 10:
                                    items.push(new Item('שרביט גילוי מלכודות ודלתות סתרים (ק)', 0));
                                    break;
                                case 11:
                                    items.push(new Item('מטה ריפוי (כ)', 0));
                                    break;
                                case 12:
                                    items.push(new Item('מטה פקודה (כ,ק)', 0));
                                    break;
                                case 13:
                                    items.push(new Item('גלימת אלפים (כל)', 0));
                                    break;
                                case 14:
                                case 15:
                                    items.push(new Item('גלימת הגנה +1 (כל)', 0));
                                    break;
                                case 16:
                                    items.push(new Item('חבל טיפוס (כל)', 0));
                                    break;
                                case 17:
                                    items.push(new Item('חבל לכידה (כל)', 0));
                                    break;
                                case 18:
                                    items.push(new Item('מגפי אלפים (כל)', 0));
                                    break;
                                case 19:
                                    items.push(new Item('מגפי מהירות (כל)', 0));
                                    break;
                                case 20:
                                    items.push(new Item('תיק רחב ידיים (כל)', 0));
                                    break;

                            }
                            break;

                    }
                }
                items.push(new Item("זהב", gold));

            }
            console.log(items);
        }
        return items;


}