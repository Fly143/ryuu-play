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

export class WailordEX_147 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Veil", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "High Breaching", cost: [], damage: "120", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "ROS";
  public name: string = "Wailord-EX";
  public fullName: string = "Wailord-EX ROS 147";
  public text: string = "Wailord-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
