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

export class AlolanMarowak_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spirit Smash", cost: [], damage: "", text: "Discard the top card of your opponent's deck. If the card you discarded is a Pokémon, this attack does damage equal to that Pokémon's HP to your opponent's Active Pokémon." },
      { name: "Bone Beatdown", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Alolan Marowak";
  public fullName: string = "Alolan Marowak CEC 75";
  public text: string = "Alolan Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
