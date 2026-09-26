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

export class Nidoqueen_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorina";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Maternal Comfort", powerType: PowerType.ABILITY, text: "At any times between turns, remove 1 damage counter from each of your Pokémon. You can't use more than 1 Maternal Comfort Poké-Body between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "40", text: "" },
      { name: "Ruthless Tail", cost: [], damage: "50+", text: "Does 50 damage plus 10 more damage for each of your opponent's Benched Pokémon." }
  ];
  public set: string = "RR";
  public name: string = "Nidoqueen";
  public fullName: string = "Nidoqueen RR 30";
  public text: string = "Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
