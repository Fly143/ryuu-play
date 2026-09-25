import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Gothitelle_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothorita";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Read the Stars", powerType: PowerType.ABILITY, text: "Once during your turn, you may look at the top 2 cards of your opponent's deck and put 1 of them back. Put the other card on the bottom of their deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psych Out", cost: [], damage: "120", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "PAL";
  public name: string = "Gothitelle";
  public fullName: string = "Gothitelle PAL 92";
  public text: string = "Gothitelle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
