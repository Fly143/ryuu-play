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

export class GardevoirSylveonGX_130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 260;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fairy Song", cost: [], damage: "", text: "Search your deck for up to 2 Fairy Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Kaleidostorm", cost: [], damage: "150", text: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like." },
      { name: "Magical Miracle-GX", cost: [], damage: "200", text: "If this Pokémon has at least 3 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles their hand into their deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNM";
  public name: string = "Gardevoir & Sylveon-GX";
  public fullName: string = "Gardevoir & Sylveon-GX UNM 130";
  public text: string = "Gardevoir & Sylveon-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "opponentShuffleDraw:7");
    }
    return state;
  }
}
