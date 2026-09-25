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

export class AlolanVulpix_21a extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Beacon", cost: [], damage: "", text: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Icy Snow", cost: [], damage: "20", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Alolan Vulpix";
  public fullName: string = "Alolan Vulpix GRI 21a";
  public text: string = "Alolan Vulpix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
