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

export class Tropius_522 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fly", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Tropius during your opponent's next turn." },
      { name: "Blessed Fruit", cost: [], damage: "", text: "Remove all damage counters from 1 of your Benched Grass Pokémon." },
      { name: "Solarbeam", cost: [], damage: "60", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Tropius";
  public fullName: string = "Tropius RR 52";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 999);
    }
    return state;
  }
}
