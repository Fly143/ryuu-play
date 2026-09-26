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

export class RadiantCharizard_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Excited Heart", powerType: PowerType.ABILITY, text: "This Pokémon's attacks cost Colorless less for each Prize card your opponent has taken.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Combustion Blast", cost: [], damage: "250", text: "During your next turn, this Pokémon can't use Combustion Blast." }
  ];
  public set: string = "PGO";
  public name: string = "Radiant Charizard";
  public fullName: string = "Radiant Charizard PGO 11";
  public text: string = "Radiant Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
