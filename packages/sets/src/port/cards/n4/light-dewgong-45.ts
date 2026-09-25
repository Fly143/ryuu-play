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

export class LightDewgong_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seel";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Freezing Breath", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep." },
      { name: "Ice Pillar", cost: [], damage: "40", text: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)" }
  ];
  public set: string = "N4";
  public name: string = "Light Dewgong";
  public fullName: string = "Light Dewgong N4 45";
  public text: string = "Light Dewgong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* preventEffectsMarker */ state;
    }
    return state;
  }
}
