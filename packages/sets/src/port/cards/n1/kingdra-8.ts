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

export class Kingdra_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Agility", cost: [], damage: "30", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Kingdra." },
      { name: "Dragon Tornado", cost: [], damage: "50", text: "If this attack doesn't Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent's Bench, choose 1 of them and switch it with the Defending Pokémon." }
  ];
  public set: string = "N1";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra N1 8";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
