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

export class ScizorGX_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scyther";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Danger Perception", powerType: PowerType.ABILITY, text: "If this Pokémon's remaining HP is 100 or less, its attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Steel Wing", cost: [], damage: "80", text: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Cross-Cut-GX", cost: [], damage: "100+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 100 more damage. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CES";
  public name: string = "Scizor-GX";
  public fullName: string = "Scizor-GX CES 90";
  public text: string = "Scizor-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:80");
    }
    return state;
  }
}
