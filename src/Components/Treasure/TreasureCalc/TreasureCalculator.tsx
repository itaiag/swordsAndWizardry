import { Item } from '../Item';
import { potions } from '../../../data/potions';
import { scrolls } from '../../../data/scrolls';
import { magicalWeapons } from '../../../data/magicalWeapons';
import { magicalItems } from '../../../data/magicalItems';
import rollDice from '../../../utils/DiceRoller'
let index = 0;

function addItem(items: Array<Item>, item: Item): Array<Item> {
    console.log(`Adding item: ${item.name} `);
    items.push(item);
    return items;
}

function findItemByProbability(probability: number, itemByProbability: Array<any>): Item {
    console.log(`Finding item for probability ${probability}`);
    for (const item of itemByProbability) {
        const itemProbability: string = item['הסתברות'] + "";
        let start = 0;
        let end = 0;
        if (itemProbability.includes('-')) {
            const [startStr, endStr] = itemProbability.split('-');
            start = parseInt(startStr);
            end = parseInt(endStr);
        } else {
            start = parseInt(itemProbability);
            end = start;
        }
        if (probability >= start && probability <= end) {
            return new Item(index++, item['שם'], item['ערך'], item['סוג'], item['מצביע לטבלה']);
        }

    };
    console.log(`No item found for probability ${probability}`);
    return new Item(index++, "לא נמצא", 0);
}

export function calculateItems(experience: number): Array<Item> {    
    let gold = experience * (rollDice(3) + 1);
    console.log("Initial gold: " + gold);
    let items: Array<Item> = [];
    let jewleryProbability = Math.floor(gold / 100);
    console.log(`Will roll: ${jewleryProbability} for items`);

    for (let i = 0; i < jewleryProbability; i++) {
        if (rollDice(10) === 10) {
            console.log("Great, Replacing 100 gold with an item");
            gold -= 100;
            console.log("Decreasing gold: " + gold);
            console.log("Rolling for simple gem or simple magical item");
            if (rollDice(20) < 20) {
                console.log("Rolling for simple gem");
                let item: Item = new Item(index++, "אבן חן פשוטה", 0);
                switch (rollDice(4)) {
                    case 1:
                        item.value = rollDice(6);
                        break;
                    case 2:
                        item.value = rollDice(100) + 25;
                        break;
                    case 3:
                        item.value = rollDice(100) + 75;
                        break;
                    case 4:
                        item.value = rollDice(100) * 10;
                        break;
                }
                items = addItem(items, item);
            } else {
                console.log("Rolling for magical item");
                let item: Item | null = null;
                switch (rollDice(4)) {
                    case 1:
                        console.log("Rolling for potion");
                        item = findItemByProbability(rollDice(20), potions.filter(potion => potion['סוג'] === 'רגיל'));
                        break;
                    case 2:
                        console.log("Rolling for scroll");
                        item = findItemByProbability(rollDice(20), scrolls.filter(scroll => scroll['סוג'] === 'רגיל'));
                        if (item.tablePointer !== "") {
                            switch (item.tablePointer) {
                                case "הגנה":
                                    console.log("Rolling for protection scroll");
                                    item = findItemByProbability(rollDice(6), scrolls.filter(scroll => scroll['סוג'] === 'הגנה'));
                                    break;
                                case "מקוללת":
                                    console.log("Rolling for cursed scroll");
                                    item = findItemByProbability(rollDice(12), scrolls.filter(scroll => scroll['סוג'] === 'מקוללת'));
                                    break;
                            }
                        }
                        break;
                    case 3:
                        console.log("Rolling for 1 magical weapon or armor");
                        item = findItemByProbability(rollDice(100), magicalWeapons);
                        break;
                    case 4:
                        console.log("Rolling for simple magical item");
                        item = findItemByProbability(rollDice(20), magicalItems.filter(item => item['סוג'] === 'פשוט'));
                        break;
                }
                if (item !== null) {
                    items = addItem(items, item);
                }
            }
        }
    }

    jewleryProbability = Math.floor(gold / 1000);
    console.log(`Will roll: ${jewleryProbability} for items`);

    for (let i = 0; i < jewleryProbability; i++) {
        if (gold < 1000) {
            console.log(`Only ${gold}. Not enough for item replacement`);
            break;
        }
        if (rollDice(10) === 10) {
            console.log("Great, Replacing 1000 gold with an item");
            gold -= 1000;
            console.log("Decreasing gold: " + gold);
            console.log("Rolling for expensinve gem or expensive magical item");
            if (rollDice(20) < 20) {
                console.log("Rolling for expensive gem");
                let item: Item = new Item(index++, "אבן חן יקרה", 0);
                switch (rollDice(4)) {
                    case 1:
                        item.value = rollDice(100);
                        break;
                    case 2:
                        item.value = rollDice(6) * 200;
                        break;
                    case 3:
                        item.value = rollDice(6) * 300;
                        break;
                    case 4:
                        item.value = rollDice(100) * 100;
                        break;
                }
                items = addItem(items, item);
            } else {
                console.log("Rolling for expensive magical item");
                let item: Item | null = null;
                switch (rollDice(4)) {
                    case 1:
                        console.log("Rolling 3 for potions");
                        for (let i = 0; i < 3; i++) {
                            item = findItemByProbability(rollDice(20), potions.filter(potion => potion['סוג'] === 'רגיל'));
                            items = addItem(items, item);
                        }
                        break;
                    case 2:
                        console.log("Rolling for 3 scrolls");
                        for (let i = 0; i < 3; i++) {
                            item = findItemByProbability(rollDice(20), scrolls.filter(scroll => scroll['סוג'] === 'רגיל'));
                            if (item.tablePointer !== "") {
                                switch (item.tablePointer) {
                                    case "הגנה":
                                        console.log("Rolling for protection scroll");
                                        item = findItemByProbability(rollDice(6), scrolls.filter(scroll => scroll['סוג'] === 'הגנה'));
                                        break;
                                    case "מקוללת":
                                        console.log("Rolling for cursed scroll");
                                        item = findItemByProbability(rollDice(12), scrolls.filter(scroll => scroll['סוג'] === 'מקוללת'));
                                        break;
                                }
                            }
                            items = addItem(items, item);

                        }
                        break;
                    case 3:
                        console.log("Rolling 3 for magical weapon or armors");
                        for (let i = 0; i < 3; i++) {
                            item = findItemByProbability(rollDice(100), magicalWeapons);
                            items = addItem(items, item);
                        }
                        break;
                    case 4:
                        console.log("Roll for expensive magical item");
                        item = findItemByProbability(rollDice(20), magicalItems.filter(item => item['סוג'] === 'יקר'));
                        items = addItem(items, item);
                        break;
                }
            }
        }
    }
    items = addItem(items, new Item(index++, "זהב", gold));
    console.log(items);
    return items;
}