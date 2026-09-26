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

export class LatiosGX_223 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Bind", powerType: PowerType.ABILITY, text: "If you have 4 or fewer Pokémon in play, this Pokémon can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tag Purge", cost: [], damage: "120", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from TAG TEAM Pokémon." },
      { name: "Clear Vision-GX", cost: [], damage: "", text: "For the rest of this game, your opponent can't use any GX attacks. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Latios-GX";
  public fullName: string = "Latios-GX CEC 223";
  public text: string = "Latios-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
