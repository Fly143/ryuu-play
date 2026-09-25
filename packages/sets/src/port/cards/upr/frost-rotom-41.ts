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

export class FrostRotom_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Roto Motor", powerType: PowerType.ABILITY, text: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Frost Crush", cost: [], damage: "10+", text: "This attack does 20 more damage times the amount of Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "UPR";
  public name: string = "Frost Rotom";
  public fullName: string = "Frost Rotom UPR 41";
  public text: string = "Frost Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 1);
    }
    return state;
  }
}
