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

export class Smeargle_123 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Second Coat", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may switch a basic Energy card attached to your Active Pokémon with a different type of basic Energy card from your discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Beat", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BKP";
  public name: string = "Smeargle";
  public fullName: string = "Smeargle BKP 123";
  public text: string = "Smeargle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* attachBasicFromDiscard */ state;
    }
    return state;
  }
}
