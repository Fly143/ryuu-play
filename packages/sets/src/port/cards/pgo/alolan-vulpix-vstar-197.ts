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

export class AlolanVulpixVSTAR_197 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Vulpix V";
  public hp: number = 240;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Snow Mirage", cost: [], damage: "160", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon that have an Ability." },
      { name: "Silvery Snow Star", cost: [], damage: "70×", text: "This attack does 70 damage for each of your opponent's Pokémon V in play. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PGO";
  public name: string = "Alolan Vulpix VSTAR";
  public fullName: string = "Alolan Vulpix VSTAR PGO 197";
  public text: string = "Alolan Vulpix VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
