import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class LightArcanine_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Growlithe";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Drive Off", powerType: PowerType.ABILITY, text: "As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gentle Flames", cost: [], damage: "50", text: "If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50." }
  ];
  public set: string = "N4";
  public name: string = "Light Arcanine";
  public fullName: string = "Light Arcanine N4 12";
  public text: string = "Light Arcanine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
