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

export class Florges_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floette";
  public hp: number = 110;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Calming Aroma", powerType: PowerType.ABILITY, text: "Each of your Pokémon's attacks costs Fairy less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wonder Shine", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "BKP";
  public name: string = "Florges";
  public fullName: string = "Florges BKP 103";
  public text: string = "Florges";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
