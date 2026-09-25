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

export class Cherrim_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cherubi";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spring Bloom", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn't have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seed Bomb", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Cherrim";
  public fullName: string = "Cherrim SHF 8";
  public text: string = "Cherrim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* oncePerTurnAttachFromHand */ state;
    }
    return state;
  }
}
