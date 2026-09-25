import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class StevenSMetagrossEx_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Steven's Metang";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "X-Boot", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for a Basic Psychic Energy card, a Basic Metal Energy card, or 1 of each and attach them to your Psychic Pokémon and Metal Pokémon in any way you like. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Metal Stomp", cost: [], damage: "200", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Steven's Metagross ex";
  public fullName: string = "Steven's Metagross ex DRI 145";
  public text: string = "Steven's Metagross ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchEnergyToSelf */ state;
    }
    return state;
  }
}
