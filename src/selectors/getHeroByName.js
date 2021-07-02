import { heroes } from "../data/heroes";

const getHeroByName = (name = '') => {
    if(name === ''){
        return []
    }

    name = name.toLocaleLowerCase();

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name) ||
    hero.characters.toLocaleLowerCase().includes(name) ||
    hero.publisher.toLocaleLowerCase().includes(name)||
    hero.first_appearance.toLocaleLowerCase().includes(name))
}

export default getHeroByName;
