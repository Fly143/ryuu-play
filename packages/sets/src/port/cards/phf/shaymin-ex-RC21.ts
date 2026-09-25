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

export class ShayminEXRC21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Synthesis", cost: [], damage: "", text: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward." },
      { name: "Revenge Blast", cost: [], damage: "30+", text: "Does 30 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "PHF";
  public name: string = "Shaymin-EX";
  public fullName: string = "Shaymin-EX PHF RC21";
  public text: string = "Shaymin-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
