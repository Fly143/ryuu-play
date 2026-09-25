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

export class Claydol_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mystery Charge", powerType: PowerType.ABILITY, text: "You can use this Ability only if you have no Supporter cards in your discard pile. Once during your turn, you may attach a Fighting Energy card from your discard pile to 1 of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Attack", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Claydol";
  public fullName: string = "Claydol PGO 94";
  public text: string = "Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
