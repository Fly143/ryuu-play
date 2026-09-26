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

export class Wigglytuff_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Jigglypuff";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Expand", cost: [], damage: "30", text: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Charmed Slap", cost: [], damage: "70+", text: "If this Pokémon has a Pokémon Tool card that has \"Fairy Charm\" in its name attached to it, this attack does 70 more damage." }
  ];
  public set: string = "DRM";
  public name: string = "Wigglytuff";
  public fullName: string = "Wigglytuff DRM 134";
  public text: string = "Wigglytuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
