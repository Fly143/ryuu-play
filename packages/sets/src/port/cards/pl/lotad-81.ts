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

export class Lotad_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Ball", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each Energy attached to Lotad but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way." },
      { name: "Synthesis", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward." }
  ];
  public set: string = "PL";
  public name: string = "Lotad";
  public fullName: string = "Lotad PL 81";
  public text: string = "Lotad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
