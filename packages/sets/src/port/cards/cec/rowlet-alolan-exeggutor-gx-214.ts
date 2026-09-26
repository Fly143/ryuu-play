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

export class RowletAlolanExeggutorGX_214 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 270;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Growth", cost: [], damage: "", text: "Search your deck for a card that evolves from 1 of your Grass Pokémon and put it onto that Pokémon to evolve it. If that Pokémon is now a Stage 1 Pokémon, search your deck for a Stage 2 Pokémon that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck." },
      { name: "Calming Hurricane", cost: [], damage: "150", text: "Heal 30 damage from this Pokémon." },
      { name: "Tropical Hour-GX", cost: [], damage: "200", text: "If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), your opponent shuffles all Energy from all of their Pokémon into their deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Rowlet & Alolan Exeggutor-GX";
  public fullName: string = "Rowlet & Alolan Exeggutor-GX CEC 214";
  public text: string = "Rowlet & Alolan Exeggutor-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
