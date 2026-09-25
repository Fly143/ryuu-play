import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Delphox_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Braixen";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flare Parade", cost: [], damage: "60×", text: "This attack does 60 damage for each Serena card in your discard pile." },
      { name: "Energy Crush", cost: [], damage: "50×", text: "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "PGO";
  public name: string = "Delphox";
  public fullName: string = "Delphox PGO 27";
  public text: string = "Delphox";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesDiscardPokemon:60 */ state;
    }
    return state;
  }
}
