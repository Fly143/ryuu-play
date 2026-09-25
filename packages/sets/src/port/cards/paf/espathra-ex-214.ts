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

export class EspathraEx_214 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Flittle";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dazzling Gaze", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost Colorless more.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psy Ball", cost: [], damage: "30+", text: "This attack does 30 more damage for each Energy attached to both Active Pokémon." }
  ];
  public set: string = "PAF";
  public name: string = "Espathra ex";
  public fullName: string = "Espathra ex PAF 214";
  public text: string = "Espathra ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyBoth:30");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
