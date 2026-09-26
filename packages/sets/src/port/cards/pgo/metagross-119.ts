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

export class Metagross_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 170;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Emergency Entry", powerType: PowerType.ABILITY, text: "Once during your turn, if you drew this Pokémon from your deck at the beginning of your turn and your Bench isn't full, before you put it into your hand, you may put it onto your Bench. If you do, draw 3 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Meteor Mash", cost: [], damage: "100", text: "During your next turn, this Pokémon's Meteor Mash attack does 100 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "PGO";
  public name: string = "Metagross";
  public fullName: string = "Metagross PGO 119";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
