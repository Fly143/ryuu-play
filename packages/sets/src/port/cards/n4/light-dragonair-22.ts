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

export class LightDragonair_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dratini";
  public hp: number = 80;
    public height?: number = 4.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Light", cost: [], damage: "", text: "Remove 1 damage counter from each of your Pokémon that has any damage counters on it." },
      { name: "Protective Wave", cost: [], damage: "20", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Light Dragonair." }
  ];
  public set: string = "N4";
  public name: string = "Light Dragonair";
  public fullName: string = "Light Dragonair N4 22";
  public text: string = "Light Dragonair";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
