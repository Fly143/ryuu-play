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

export class CastformTG11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Weather Reading", powerType: PowerType.ABILITY, text: "If you have 8 or more Stadium cards in your discard pile, ignore all Energy in this Pokémon's attack costs.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Weather Force", cost: [], damage: "80", text: "Draw cards until you have 6 cards in your hand." }
  ];
  public set: string = "LOR";
  public name: string = "Castform";
  public fullName: string = "Castform LOR TG11";
  public text: string = "Castform";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    return state;
  }
}
