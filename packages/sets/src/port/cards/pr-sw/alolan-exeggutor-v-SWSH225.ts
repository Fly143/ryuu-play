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

export class AlolanExeggutorVSWSH225 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growing Tall", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for up to 5 Grass Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Head Swing", cost: [], damage: "", text: "This attack does 30 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PR-SW";
  public name: string = "Alolan Exeggutor V";
  public fullName: string = "Alolan Exeggutor V PR-SW SWSH225";
  public text: string = "Alolan Exeggutor V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
