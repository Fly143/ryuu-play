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

export class Rotom_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Type Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Rotom's type is Psychic until the end of your turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poltergeist", cost: [], damage: "30+", text: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer, Supporter, and Stadium card in your opponent's hand." }
  ];
  public set: string = "POP9";
  public name: string = "Rotom";
  public fullName: string = "Rotom POP9 5";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
