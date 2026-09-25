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

export class DragoniteEx_91 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragonair";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deafen", cost: [], damage: "40", text: "Your opponent can't play any Trainer cards (except for Supporter cards) from his or her hand during your opponent's next turn." },
      { name: "Dragon Roar", cost: [], damage: "", text: "Put 8 damage counters on the Defending Pokémon. If that Pokémon would be Knocked Out by this attack, put any damage counters not necessary to Knock Out the Defending Pokémon on your opponent's Benched Pokémon in any way you like." }
  ];
  public set: string = "DF";
  public name: string = "Dragonite ex δ";
  public fullName: string = "Dragonite ex δ DF 91";
  public text: string = "Dragonite ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
