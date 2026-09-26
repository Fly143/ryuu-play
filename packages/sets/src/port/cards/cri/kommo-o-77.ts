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

export class KommoO_77 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hakamo-o";
  public hp: number = 160;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "War Cry", cost: [], damage: "30+", text: "If you have fewer Pokémon in play than your opponent, this attack does 90 more damage." },
      { name: "Clanging Scales", cost: [], damage: "130", text: "During your opponent's next turn, this Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "CRI";
  public name: string = "Kommo-o";
  public fullName: string = "Kommo-o CRI 77";
  public text: string = "Kommo-o";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
