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

export class AegislashEX_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mighty Shield", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from each of your opponent's Pokémon that has any Special Energy attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Slash Blast", cost: [], damage: "40", text: "This attack does 20 more damage for each Metal Energy attached to this Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Aegislash-EX";
  public fullName: string = "Aegislash-EX PHF 65";
  public text: string = "Aegislash-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
