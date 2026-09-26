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

export class Ludicolo_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 100;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rain Dish", powerType: PowerType.ABILITY, text: "At any time between turns, remove 1 damage counter from Ludicolo.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Nature Power", cost: [], damage: "60+", text: "If you have a Stadium Card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused." }
  ];
  public set: string = "SW";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo SW 13";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
