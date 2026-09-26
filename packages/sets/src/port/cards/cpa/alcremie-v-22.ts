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
import { commonEffects } from '../../../common';

export class AlcremieV_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sugary Sprinkles", cost: [], damage: "", text: "Heal 30 damage from each of your Benched Pokémon." },
      { name: "Sweet Splash", cost: [], damage: "100", text: "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn." }
  ];
  public set: string = "CPA";
  public name: string = "Alcremie V";
  public fullName: string = "Alcremie V CPA 22";
  public text: string = "Alcremie V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
