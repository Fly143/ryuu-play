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

export class PikachuZekromGX_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 240;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Full Blitz", cost: [], damage: "150", text: "Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck." },
      { name: "Tag Bolt-GX", cost: [], damage: "200", text: "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNB";
  public name: string = "Pikachu & Zekrom-GX";
  public fullName: string = "Pikachu & Zekrom-GX UNB 162";
  public text: string = "Pikachu & Zekrom-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
