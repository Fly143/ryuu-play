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

export class MRayquazaEX_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rayquaza-EX";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Δ Evolution", powerType: PowerType.ABILITY, text: "You may play this card from your hand to evolve a Pokémon during your first turn or the turn you play that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Emerald Break", cost: [], damage: "30×", text: "This attack does 30 damage times the number of your Benched Pokémon." }
  ];
  public set: string = "AOR";
  public name: string = "M Rayquaza-EX";
  public fullName: string = "M Rayquaza-EX AOR 105";
  public text: string = "M Rayquaza-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "earlyEvolution");
    }
    return state;
  }
}
