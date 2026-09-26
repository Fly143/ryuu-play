import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Exeggcute_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Propagation", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put this Pokémon into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Seed Bomb", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Exeggcute";
  public fullName: string = "Exeggcute FFI 102";
  public text: string = "Exeggcute";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toBottomOfDeck");
    }
    return state;
  }
}
