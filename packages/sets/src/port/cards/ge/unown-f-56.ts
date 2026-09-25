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

export class UnownF_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "FAKE", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown F is on your Bench, you may use this power. Put a coin next to your Active Pokémon without showing your opponent and cover it with your hand. Your opponent guesses if the coin is heads or tails. If he or she is wrong, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "10", text: "You may flip a coin. If tails, this attack does nothing. If heads, this attack's base damage is 30." }
  ];
  public set: string = "GE";
  public name: string = "Unown [F]";
  public fullName: string = "Unown [F] GE 56";
  public text: string = "Unown [F]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
