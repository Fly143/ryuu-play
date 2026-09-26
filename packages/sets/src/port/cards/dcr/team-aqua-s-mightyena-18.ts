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

export class TeamAquaSMightyena_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Aqua's Poochyena";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Teampact", cost: [], damage: "30×", text: "Flip a coin for each Team Aqua Pokémon you have in play. This attack does 30 damage times the number of heads." },
      { name: "Crunch", cost: [], damage: "80", text: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "DCR";
  public name: string = "Team Aqua's Mightyena";
  public fullName: string = "Team Aqua's Mightyena DCR 18";
  public text: string = "Team Aqua's Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsDiscardEnergyOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
