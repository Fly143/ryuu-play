import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Torkoal_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "White Smoke", powerType: PowerType.ABILITY, text: "As long as Torkoal is your Active Pokémon, prevent all effects, including damage, done to your Benched Pokémon by your opponent's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Black Soot", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Burned and Paralyzed." }
  ];
  public set: string = "SF";
  public name: string = "Torkoal";
  public fullName: string = "Torkoal SF 41";
  public text: string = "Torkoal";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
