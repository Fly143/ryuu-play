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

export class Luxray_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Luxio";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Gleam Eyes", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Luxray from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lightning Star", cost: [], damage: "80", text: "Move all Lightning Energy attached to Luxray to 1 of your Benched Pokémon. (Ignore this effect if you don't have any Benched Pokémon.)" }
  ];
  public set: string = "DP";
  public name: string = "Luxray";
  public fullName: string = "Luxray DP 7";
  public text: string = "Luxray";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
