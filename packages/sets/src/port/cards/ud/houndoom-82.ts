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

export class Houndoom_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 110;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fire Breath", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Burned. This power can't be used if Houndoom is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Clamp", cost: [], damage: "70", text: "The Defending Pokémon can't retreat during your opponent's next turn." }
  ];
  public set: string = "UD";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom UD 82";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsSpecial:BURNED");
    }
    return state;
  }
}
