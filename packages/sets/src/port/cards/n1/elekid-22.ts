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

export class Elekid_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Playful Punch", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent's Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can't be used if Elekid is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "N1";
  public name: string = "Elekid";
  public fullName: string = "Elekid N1 22";
  public text: string = "Elekid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
