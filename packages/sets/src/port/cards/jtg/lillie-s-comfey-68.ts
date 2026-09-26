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

export class LillieSComfey_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Inviting Flowers", cost: [], damage: "", text: "You may search your deck for any number of Basic Lillie's Pokémon and put them onto your Bench. Then, shuffle your deck." },
      { name: "Fade Out", cost: [], damage: "30", text: "Put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "JTG";
  public name: string = "Lillie's Comfey";
  public fullName: string = "Lillie's Comfey JTG 68";
  public text: string = "Lillie's Comfey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
