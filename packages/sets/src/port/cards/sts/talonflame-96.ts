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

export class Talonflame_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fletchinder";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gale Wings", powerType: PowerType.ABILITY, text: "If this Pokémon is in your hand when you are setting up to play, you may put it face down as your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aero Blitz", cost: [], damage: "40", text: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "STS";
  public name: string = "Talonflame";
  public fullName: string = "Talonflame STS 96";
  public text: string = "Talonflame";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    return state;
  }
}
