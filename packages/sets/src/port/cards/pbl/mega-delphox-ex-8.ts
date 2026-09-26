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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MegaDelphoxEx_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Braixen";
  public hp: number = 350;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trick Portal", cost: [], damage: "", text: "Look at the top 9 cards of your deck, and you may put any number of Pokémon you find there onto your Bench. Shuffle the other cards back into your deck." },
      { name: "Eerie Glow", cost: [], damage: "200", text: "Your opponent's Active Pokémon is now Burned and Confused." }
  ];
  public set: string = "PBL";
  public name: string = "Mega Delphox ex";
  public fullName: string = "Mega Delphox ex PBL 8";
  public text: string = "Mega Delphox ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
