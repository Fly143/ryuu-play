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

export class Exploud_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Loudred";
  public hp: number = 140;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "80+", text: "Flip a coin. If heads, this attack does 40 more damage." },
      { name: "Cacophony", cost: [], damage: "", text: "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it." }
  ];
  public set: string = "FAC";
  public name: string = "Exploud";
  public fullName: string = "Exploud FAC 82";
  public text: string = "Exploud";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 1);
    }
    return state;
  }
}
