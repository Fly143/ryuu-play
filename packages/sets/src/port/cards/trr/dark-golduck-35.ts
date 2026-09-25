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

export class DarkGolduck_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Darkness Shield", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to each of your Active Pokémon during your opponent's next turn." },
      { name: "Cold Crush", cost: [], damage: "40", text: "You may discard an Energy card attached to Dark Golduck. If you do, discard an Energy attached to the Defending Pokémon." }
  ];
  public set: string = "TRR";
  public name: string = "Dark Golduck";
  public fullName: string = "Dark Golduck TRR 35";
  public text: string = "Dark Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
