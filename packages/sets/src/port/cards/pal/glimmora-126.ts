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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Glimmora_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glimmet";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shattering Crystal", powerType: PowerType.ABILITY, text: "When this Pokémon is Knocked Out, flip a coin. If heads, your opponent can't take any Prize cards for it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Petals", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, put 6 damage counters on that Pokémon instead of 1." }
  ];
  public set: string = "PAL";
  public name: string = "Glimmora";
  public fullName: string = "Glimmora PAL 126";
  public text: string = "Glimmora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
