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

export class Flygon_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rainbow Float", powerType: PowerType.ABILITY, text: "If any basic Energy card attached to Flygon is the same type as any of your Pokémon, the Retreat Cost for those Pokémon is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sand Wall", cost: [], damage: "40", text: "Discard a Stadium card your opponent has in play. If you do, prevent all effects of an attack, including damage, done to Flygon during your opponent's next turn." },
      { name: "Power Swing", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each Evolved Pokémon on your Bench." }
  ];
  public set: string = "RR";
  public name: string = "Flygon";
  public fullName: string = "Flygon RR 5";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsMarker */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
