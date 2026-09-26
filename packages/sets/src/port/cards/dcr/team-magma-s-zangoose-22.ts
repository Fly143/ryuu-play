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

export class TeamMagmaSZangoose_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Call for Family", cost: [], damage: "", text: "Search your deck for up to 2 Basic Team Magma Pokémon and put them onto your Bench. Shuffle your deck afterward." },
      { name: "Team Play", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Team Magma Pokémon on your Bench." }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Zangoose";
  public fullName: string = "Team Magma's Zangoose DCR 22";
  public text: string = "Team Magma's Zangoose";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
