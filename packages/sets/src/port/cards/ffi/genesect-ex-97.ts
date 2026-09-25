import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class GenesectEX_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Red Signal", powerType: PowerType.ABILITY, text: "When you attach a Plasma Energy from your hand to this Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Megalo Cannon", cost: [], damage: "100", text: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)" }
  ];
  public set: string = "FFI";
  public name: string = "Genesect-EX";
  public fullName: string = "Genesect-EX FFI 97";
  public text: string = "Genesect-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "gustOpponent");
    }
    return state;
  }
}
