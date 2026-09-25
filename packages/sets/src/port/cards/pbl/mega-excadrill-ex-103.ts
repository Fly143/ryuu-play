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

export class MegaExcadrillEx_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drilbur";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Undermine", cost: [], damage: "90", text: "Discard the top 2 cards of your opponent's deck." },
      { name: "Maximum Drilling", cost: [], damage: "200+", text: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 130 more damage." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Excadrill ex";
  public fullName: string = "Mega Excadrill ex PBL 103";
  public text: string = "Mega Excadrill ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 130, 1);
    }
    return state;
  }
}
