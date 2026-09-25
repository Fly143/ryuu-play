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

export class MegaHeracrossEx_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Juggernaut Horn", cost: [], damage: "100+", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage." },
      { name: "Mountain Ramming", cost: [], damage: "170", text: "Discard the top 2 cards of your opponent's deck." }
  ];
  public set: string = "PFL";
  public name: string = "Mega Heracross ex";
  public fullName: string = "Mega Heracross ex PFL 108";
  public text: string = "Mega Heracross ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
