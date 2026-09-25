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

export class BlisseyEx_201 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 300;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Happy Switch", powerType: PowerType.ABILITY, text: "Once during your turn, you may move a Basic Energy from 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Return", cost: [], damage: "180", text: "You may draw cards until you have 6 cards in your hand." }
  ];
  public set: string = "TWM";
  public name: string = "Blissey ex";
  public fullName: string = "Blissey ex TWM 201";
  public text: string = "Blissey ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    return state;
  }
}
