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

export class AmpharosGX_163 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flaaffy";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Power Recharge", cost: [], damage: "30", text: "Put all Electropower cards from your discard pile into your hand." },
      { name: "Impact Bolt", cost: [], damage: "150", text: "Discard all Lightning Energy from this Pokémon." },
      { name: "Electrical-GX", cost: [], damage: "", text: "Search your deck for up to 7 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNB";
  public name: string = "Ampharos-GX";
  public fullName: string = "Ampharos-GX UNB 163";
  public text: string = "Ampharos-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
