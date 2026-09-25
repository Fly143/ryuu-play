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

export class LatiosEXXY72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Raid", cost: [], damage: "40", text: "If you go first, you can use this attack on your first turn." },
      { name: "Light Pulse", cost: [], damage: "110", text: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn." }
  ];
  public set: string = "PR-XY";
  public name: string = "Latios-EX";
  public fullName: string = "Latios-EX PR-XY XY72";
  public text: string = "Latios-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsNextTurn");
    }
    return state;
  }
}
