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

export class ZacianVUNIONSWSH166 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Union Gain", cost: [], damage: "", text: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon." },
      { name: "Dance of the Crowned Sword", cost: [], damage: "150", text: "During your opponent's next turn, the Defending Pokémon's attacks do 150 less damage (before applying Weakness and Resistance)." },
      { name: "Steel Cut", cost: [], damage: "200", text: "" },
      { name: "Master Blade", cost: [], damage: "340", text: "Discard 3 Energy from this Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Zacian V-UNION";
  public fullName: string = "Zacian V-UNION PR-SW SWSH166";
  public text: string = "Zacian V-UNION";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[3]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
