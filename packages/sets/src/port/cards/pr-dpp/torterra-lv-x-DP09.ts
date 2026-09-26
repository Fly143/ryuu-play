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

export class TorterraLVXDP09 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Torterra";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Forest Murmurs", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have more Prize cards left than your opponent, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. This power can't be used if Torterra is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Vigorous Dash", cost: [], damage: "100", text: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Torterra does 30 damage to itself." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Torterra LV.X";
  public fullName: string = "Torterra LV.X PR-DPP DP09";
  public text: string = "Torterra LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "putDamageCounters:1");
    }
    return state;
  }
}
