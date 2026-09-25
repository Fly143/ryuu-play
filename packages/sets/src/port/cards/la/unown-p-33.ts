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

export class UnownP_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "PUT", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Unown P is on your Bench, you may put 1 damage counter on 1 of your Pokémon (excluding any Unown).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hidden Power", cost: [], damage: "20+", text: "Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Unown discarded in this way." }
  ];
  public set: string = "LA";
  public name: string = "Unown [P]";
  public fullName: string = "Unown [P] LA 33";
  public text: string = "Unown [P]";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
