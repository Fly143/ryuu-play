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

export class Ludicolo_372 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Recovery", powerType: PowerType.ABILITY, text: "When this Pokémon is healed, double the amount healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Astonish", cost: [], damage: "30", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck." },
      { name: "Splash Dance", cost: [], damage: "60", text: "During your next turn, this Pokémon's Splash Dance attack does 60 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "ROS";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo ROS 37";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
