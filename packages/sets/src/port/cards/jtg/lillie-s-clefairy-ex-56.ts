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

export class LillieSClefairyEx_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fairy Zone", powerType: PowerType.ABILITY, text: "The Weakness of each of your opponent's Dragon Pokémon in play is now Psychic. (Apply Weakness as ×2.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Full Moon Rondo", cost: [], damage: "20+", text: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "JTG";
  public name: string = "Lillie's Clefairy ex";
  public fullName: string = "Lillie's Clefairy ex JTG 56";
  public text: string = "Lillie's Clefairy ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    return state;
  }
}
