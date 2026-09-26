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

export class Carracosta_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tirtouga";
  public hp: number = 160;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Custom", powerType: PowerType.ABILITY, text: "Pokémon Tool cards attached to your opponent's Pokémon have no effect.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Impact", cost: [], damage: "80+", text: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "CEC";
  public name: string = "Carracosta";
  public fullName: string = "Carracosta CEC 45";
  public text: string = "Carracosta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
