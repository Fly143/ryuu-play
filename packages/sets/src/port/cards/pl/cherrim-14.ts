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

export class Cherrim_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cherubi";
  public hp: number = 80;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunny Day", powerType: PowerType.ABILITY, text: "Each of your Grass Pokémon's and Fire Pokémon's attacks does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Salty-sweet Pollen", cost: [], damage: "20", text: "Remove 2 damage counters from 1 of your Pokémon." },
      { name: "Solarbeam", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PL";
  public name: string = "Cherrim";
  public fullName: string = "Cherrim PL 14";
  public text: string = "Cherrim";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
