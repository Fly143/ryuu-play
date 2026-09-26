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

export class Lucario_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Riolu";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dual Armor", powerType: PowerType.ABILITY, text: "If this Pokémon has any Metal Energy attached to it, this Pokémon's type is both Fighting and Metal.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hurricane Kick", cost: [], damage: "60+", text: "Does 30 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "PLB";
  public name: string = "Lucario";
  public fullName: string = "Lucario PLB 78";
  public text: string = "Lucario";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
