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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Jirachi_972 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wish Upon a Star", powerType: PowerType.ABILITY, text: "If you took this Pokémon as a face-down Prize card during your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench and take 1 more Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Perish Dream", cost: [], damage: "10", text: "This Pokémon is now Asleep. At the end of your opponent's next turn, the Defending Pokémon will be Knocked Out." }
  ];
  public set: string = "CES";
  public name: string = "Jirachi ◇";
  public fullName: string = "Jirachi ◇ CES 97";
  public text: string = "Jirachi ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
