import { Item } from './Item';

function rollDice(sides: number): number {
    const result =  Math.floor(Math.random() * sides) + 1;
    console.log(`Rolling a ${sides} sided dice. Result: ${result}`);
    return result; 
}

function addItem(items: Array<Item>, name: string, value: number = 0): Array<Item> {
    console.log(`Adding item: ${name} with value: ${value}`);
    items.push(new Item(name, value));
    return items;

}

export function calculateItems(experience: number): Array<Item> {    
    let gold = experience * (rollDice(3) + 1);
    console.log("Initial gold: " + gold);
    let items: Array<Item> = [];
    const jewleryProbability = Math.floor(gold / 100);
    
    for (let i = 0; i < jewleryProbability; i++) {
        if (rollDice(10) === 10) {
            console.log("Replacing 100 gold with an item");
            gold -= 100;
            console.log("Rolling for simple gem or simple magical item");
            if (rollDice(20) < 20) {
                console.log("Rolling for simple gem");
                let goldValue = 0;
                switch (rollDice(4)) {
                    case 1:
                        goldValue = rollDice(6);
                        items = addItem(items,"אבן חן פשוטה", goldValue);                        
                        break;
                    case 2:
                        goldValue = rollDice(100) + 25;
                        items = addItem(items,"אבן חן פשוטה", goldValue);
                        break;
                    case 3:
                        goldValue = rollDice(100) + 75;
                        items = addItem(items,"אבן חן פשוטה", goldValue);
                        break;
                    case 4:
                        goldValue = rollDice(100) * 10;
                        items = addItem(items,"אבן חן פשוטה", goldValue);
                        break;
                }

            } else {
                console.log("Rolling for simple magical item");
                switch (rollDice(4)) {
                    case 1:
                        console.log("Rolling for potion");
                        switch (rollDice(20)) {
                            case 1:
                                items = addItem(items,"שיקוי ראייה מרחוק");
                                break;
                            case 2:
                                items = addItem(items,"שיקוי שמיעה מרחוק");
                                break;
                            case 3:
                                items = addItem(items, "שיקוי כיווץ");
                                break;
                            case 4:                                
                                items = addItem(items, "שיקוי צורת אתר");
                                break;
                            case 5:
                            case 6:                                
                                items = addItem(items, "שיקוי חסינות לאש");
                                break;
                            case 7:
                                items = addItem(items, "שיקוי צורת גז");
                                break;
                            case 8:
                            case 9:                                
                                items = addItem(items, "שיקוי גדילה");
                                break;
                            case 10:
                                items = addItem(items, "שיקוי גבורה");
                                break;
                            case 11:
                            case 12:
                                items = addItem(items, "שיקוי היעלמות מעין")
                                break;
                            case 13:
                            case 14:
                                items = addItem(items, "שיקוי ריחוף");
                                break;
                            case 15:                                
                                items = addItem(items, "שיקוי רעל");
                                break;
                            default:
                                items = addItem(items, "שיקוי ריפוי");
                               
                        }
                        break;
                    case 2:
                        console.log("Rolling for scroll");
                        let diceRoll = 0;
                        switch (rollDice(20)) {
                            case 1:                                
                                items = addItem(items, "מגילה לחש אחד, עוצמה ראשונה");
                                break;
                            case 2:
                                items = addItem(items, "מגילה לחש אחד, עוצמה 1ק2");
                                break;
                            case 3:
                                items = addItem(items, "מגילה שני לחשים, עוצמה 1");
                                break;
                            case 4:
                                items = addItem(items, "מגילה שני לחשים, עוצמה 1ק2");
                                break;
                            case 5:
                            case 6:
                                items = addItem(items, "מגילה מקוללת. יש לגלג בטבלת מגילות מקוללות");
                                break;
                            case 7:
                                items = addItem(items, "מגילת הגנה. יש לגלגל בטבלת מגילות הגנה");
                                break;
                            case 8:
                                items = addItem(items, "מגילה לחש אחד, עוצמה שלישית");
                                break;
                            case 9:
                                items = addItem(items, "מגילת הגנה, יש לגלגל בטבלת מגילות ההגנה");
                                break;
                            case 10:
                                items = addItem(items, "מגילה שני לחשים, עוצמה 1ק3");
                                break;
                            case 11:
                                items = addItem(items, "מגילה מקוללת. יש לגלגל בטבלת מגילות מקוללות");
                                break;
                            case 12:
                                items = addItem(items, "מגילת הגנה. זמן הגנה כפולה");
                                break;
                            case 13:
                                diceRoll = rollDice(2);
                                items = addItem(items, `${diceRoll} מגילה שני לחשים, עוצמה  `);
                                break;
                            case 14:
                                items = addItem(items, "מגילה ארבעה לחשים, עוצמה 1");
                                break;
                            case 15:
                                diceRoll = rollDice(3);
                                items = addItem(items, `${diceRoll} מגילה שני לחשים, עוצמה `);
                                break;
                            case 16:
                                items = addItem(items, "מגילת הגנה, יש לגלגל בטבלת מגילות ההגנה");
                                break;
                            case 17:
                                items = addItem(items, "מגילה מקוללת. יש לגלגל בטבלת מגילות מקוללות");
                                break;
                            case 18:
                                items = addItem(items, "מגילה שלושה לחשים, עוצמה 1ק2");
                                break;
                            case 19:
                                items = addItem(items, "מגילה ארבעה לחשים, עוצמה 1ק2");
                                break;
                            case 20:
                                items = addItem(items, "מגילה שלושה לחשים, עוצמה 1ק3");
                                break;
                        }
                        break;
                    case 3:
                        console.log("Rolling for magical weapon");
                        diceRoll = rollDice(100);
                        if (diceRoll >= 1 && diceRoll <= 10) {
                            items = addItem(items, "חרב +1");
                        } else if (diceRoll === 11) {
                            items = addItem(items, "חרב פלוס 1. פלוס 2 כנגד על מתים");
                        } else if (diceRoll === 12) {
                            items = addItem(items, "חרב פלוס 1. פלוס 2 כנגד חיות אדם");
                        } else if (diceRoll === 13 || diceRoll === 14) {
                            items = addItem(items, "חרב פלוס 1. פלוס 2 כנגד אורקים");
                        } else if (diceRoll === 15) {
                            items = addItem(items, "חרב פלוס 1. מטילה ריפוי פצעים קלים פעם ביום");
                        } else if (diceRoll >= 16 && diceRoll <= 20) {
                            items = addItem(items, "חרב פלוס 2");
                        }
                        else if (diceRoll >= 21 && diceRoll <= 22) {
                            items = addItem(items, "חרב פלוס 2, פלוס 3 כנגד אל מתים");
                        }
                        else if (diceRoll >= 23 && diceRoll <= 24) {
                            items = addItem(items, "חרב פלוס 2, פלוס 3 כנגד מטילי לחשים");
                        }
                        else if (diceRoll == 25) {
                            items = addItem(items, "חרב פלוס 2, מטילה ריפוי פצעים קלים פעמיים ביום");
                        }
                        else if (diceRoll >= 26 && diceRoll <= 35) {
                            items = addItem(items, 'נשק קפא"פ פלוס 1');
                        }
                        else if (diceRoll >= 36 && diceRoll <= 40) {
                            items = addItem(items, 'נשק קפא"פ פלוס 2');
                        }
                        else if (diceRoll >= 41 && diceRoll <= 44) {
                            items = addItem(items, "חיצים פלוס 1 - עשרה");
                        }
                        else if (diceRoll >= 45 && diceRoll <= 46) {
                            items = addItem(items, "קליע קל פלוס 1 - עשרה");
                        }
                        else if (diceRoll >= 47 && diceRoll <= 50) {
                            items = addItem(items, "קליע כבד פלוס 1 - עשרה");
                        }
                        else if (diceRoll >= 51 && diceRoll <= 60) {
                            items = addItem(items, "מגן פלוס 1");
                        }
                        else if (diceRoll >= 61 && diceRoll <= 65) {
                            items = addItem(items, "מגן פלוס 2");
                        }
                        else if (diceRoll >= 66 && diceRoll <= 78) {
                            items = addItem(items, "שריון פלוס 1");
                        }
                        else if (diceRoll >= 79 && diceRoll <= 85) {
                            items = addItem(items, "שריון פלוס 2");
                        }
                        else if (diceRoll >= 86 && diceRoll <= 90) {
                            items = addItem(items, "חרב מקוללת מינוס 1");
                        }
                        else if (diceRoll >= 91 && diceRoll <= 93) {
                            items = addItem(items, 'נשק קפא"פ מקולל מינוס 1');
                        }
                        else if (diceRoll >= 94 && diceRoll <= 95) {
                            items = addItem(items, "חיצים או קליעים מקוללים מינוס 1");
                        }
                        else if (diceRoll >= 96 && diceRoll <= 100) {
                            items = addItem(items, "שריון מקולל מינוס 1");
                        }
                        break;
                    case 4:
                        console.log("Scroll for magical item");
                        switch (rollDice(20)) {
                            case 1:
                            case 2:
                                items = addItem(items, 'טבעת הגנה פלוס 1');
                                break;
                            case 3:
                            case 4:
                                items = addItem(items, 'טבעת הליכה על מים');
                                break;
                            case 5:
                            case 6:
                                items = addItem(items, 'טבעת עמידות לאש');
                                break;
                            case 7:
                            case 8:
                                items = addItem(items, 'טבעת חסינות לרעל');
                                break;
                            case 9:
                                items = addItem(items, 'שרביט גילוי קסם (ק)');
                                break;
                            case 10:
                                items = addItem(items, 'שרביט גילוי מלכודות ודלתות סתרים (ק)');
                                break;
                            case 11:
                                items = addItem(items, 'מטה ריפוי (כ)');
                                break;
                            case 12:
                                items = addItem(items, 'מטה פקודה (כ,ק)');
                                break;
                            case 13:
                                items = addItem(items, 'גלימת אלפים (כל)');
                                break;
                            case 14:
                            case 15:
                                items = addItem(items, 'גלימת הגנה +1 (כל)');
                                break;
                            case 16:
                                items = addItem(items, 'חבל טיפוס (כל)');
                                break;
                            case 17:
                                items = addItem(items, 'חבל לכידה (כל)');
                                break;
                            case 18:
                                items = addItem(items, 'מגפי אלפים (כל)');
                                break;
                            case 19:
                                items = addItem(items, 'מגפי מהירות (כל)');
                                break;
                            case 20:
                                items = addItem(items, 'תיק רחב ידיים (כל)');
                                break;

                        }
                        break;

                }
            }

        }
    }
    items = addItem(items, "זהב", gold);    
    console.log(items);
    return items;


}