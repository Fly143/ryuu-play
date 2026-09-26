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

export class GalarianPonytaSWSH013 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heal Pulse", cost: [], damage: "", text: "Heal 30 damage from 1 of your Pokémon." },
      { name: "Flop", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Galarian Ponyta";
  public fullName: string = "Galarian Ponyta PR-SW SWSH013";
  public text: string = "Galarian Ponyta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "heal:30");
    }
    return state;
  }
}
