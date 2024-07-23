import { Item } from '../Item';
import { potions } from '../../../data/potions';
import { scrolls } from '../../../data/scrolls';
import { magicalWeapons } from '../../../data/magicalWeapons';
import { magicalItems } from '../../../data/magicalItems';
import rollDice from '../../../utils/DiceRoller'
let index = 0;

function addItem(items: Array<Item>, name: string, value: number = 0): Array<Item> {
    console.log(`Adding item: ${name} with value: ${value}`);
    items.push(new Item(index++, name, value));
    return items;
}

function findItemByProbability(probability: number, itemByProbability: Array<any>): string {
    console.log(`Finding item for probability ${probability}`);
    for (const item of itemByProbability) {
        const itemProbability: string = item['הסתברות'] + "";
        if (itemProbability.includes('-')) {
            const [start, end] = itemProbability.split('-');
            if (probability >= parseInt(start) && probability <= parseInt(end)) {
                return item['שם'];
            }
        } else {
            if (probability === parseInt(itemProbability)) {
                return item['שם'];
            }
        }
    };
    console.log(`No item found for probability ${probability}`);
    return "";
}

export function calculateItems(experience: number): Array<Item> {
    index = 0;
    let gold = experience * (rollDice(3) + 1);
    console.log("Initial gold: " + gold);
    let items: Array<Item> = [];
    const jewleryProbability = Math.floor(gold / 100);
    console.log(`Will roll: ${jewleryProbability} for items`);

    for (let i = 0; i < jewleryProbability; i++) {
        if (rollDice(10) === 10) {
            console.log("Great, Replacing 100 gold with an item");
            gold -= 100;
            console.log("Decreasing gold: " + gold);
            console.log("Rolling for simple gem or simple magical item");
            if (rollDice(20) < 20) {
                console.log("Rolling for simple gem");
                let goldValue = 0;
                switch (rollDice(4)) {
                    case 1:
                        goldValue = rollDice(6);
                        items = addItem(items, "אבן חן פשוטה", goldValue);
                        break;
                    case 2:
                        goldValue = rollDice(100) + 25;
                        items = addItem(items, "אבן חן פשוטה", goldValue);
                        break;
                    case 3:
                        goldValue = rollDice(100) + 75;
                        items = addItem(items, "אבן חן פשוטה", goldValue);
                        break;
                    case 4:
                        goldValue = rollDice(100) * 10;
                        items = addItem(items, "אבן חן פשוטה", goldValue);
                        break;
                }

            } else {
                console.log("Rolling for simple magical item");
                let diceRoll = 0;
                let itemName = "";
                switch (rollDice(4)) {
                    case 1:
                        console.log("Rolling for potion");
                        itemName = findItemByProbability(rollDice(20), potions.filter(potion => potion['סוג'] === 'רגיל'));
                        items = addItem(items, itemName);
                        break;
                    case 2:
                        console.log("Rolling for scroll");
                        itemName = findItemByProbability(rollDice(20), scrolls.filter(scroll => scroll['סוג'] === 'רגיל'));
                        items = addItem(items, itemName);
                        break;
                    case 3:
                        console.log("Rolling simple for magical weapon");
                        diceRoll = rollDice(100);
                        itemName = findItemByProbability(diceRoll, magicalWeapons);
                        items = addItem(items, itemName);
                        break;
                    case 4:
                        console.log("Roll for magical item");
                        diceRoll = rollDice(20);
                        itemName = findItemByProbability(diceRoll, magicalItems.filter(item => item['סוג'] === 'פשוט'));
                        items = addItem(items, itemName);                       
                        break;
                }
            }

        }
    }
    items = addItem(items, "זהב", gold);
    console.log(items);
    return items;


}