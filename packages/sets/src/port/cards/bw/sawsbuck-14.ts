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

export class Sawsbuck_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Deerling";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nature Power", cost: [], damage: "20+", text: "Does 10 more damage for each Grass Energy attached to both your and your opponent's Pokémon." },
      { name: "Horn Leech", cost: [], damage: "60", text: "Heal 20 damage from this Pokémon." }
  ];
  public set: string = "BW";
  public name: string = "Sawsbuck";
  public fullName: string = "Sawsbuck BW 14";
  public text: string = "Sawsbuck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* bonusPerEnergyBoth:10 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
